// requires impact.base.game
// requires game.feature.model.base-model
// requires game.feature.timers.gui.timers-hud

export {};

declare global {
    namespace sc {
        enum TIMER_TYPES {
            COUNTER = 0,
            COUNTDOWN = 1,
        }

        interface TimersModel extends ig.GameAddon, sc.Model, ig.Vars.Accessor, ig.Storage.Listener {
            timers: Record<string, sc.TimerEntry>;

            addTimer(
                this: this,
                name: string,
                mode: sc.TIMER_TYPES,
                duration?: Nullable<number>,
                area?: Nullable<string>,
                temp?: Nullable<boolean>,
                showGui?: Nullable<boolean>,
                millis?: Nullable<boolean>,
                quest?: Nullable<string>,
                label?: Nullable<string>,
                k?: Nullable<boolean>
            ): void;
            stopTimer(this: this, name: string): void;
            resumeTimer(this: this, name: string): void;
            resetTimer(this: this, name: string, mode: sc.TIMER_TYPES, duration: number): void;
            removeTimer(this: this, name: string): void;
            getRemainingTimerTime(this: this, name: string): number;
            formatTime(this: this, value: number, withMillis: boolean): string
        }
        interface TimersModelConstructor extends ImpactClass<TimersModel> {
            new (): TimersModel;
        }
        let TimersModel: TimersModelConstructor;
        let timers: TimersModel;
        
        interface TimerEntry extends ig.Class {
            name: string;
            mode: sc.TIMER_TYPES;
            timer: number;
            duration: number;
            temp: boolean;
            millis: boolean;
            area?: Nullable<string>;
            quest?: Nullable<string>;
        }
        interface TimerEntryContstructor extends ImpactClass<TimerEntry> {
            new(name: string, mode: sc.TIMER_TYPES, duration: number, area?: string, temp?: boolean, millis?: boolean, quest?: string): TimerEntry;
        }
    }
}