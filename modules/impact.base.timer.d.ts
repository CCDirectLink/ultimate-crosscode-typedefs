
export { }

declare global {
    namespace ig {
        interface Timer extends ig.Class {
            target: number
            base: number
            last: number
            stopped: boolean
            
            set(this: this, seconds: number, keepRelativeDelta: boolean): void //todo
            reverseRelativeDelta(this: this): void
            stop(this: this): void
            resume(this: this): void
            reset(this: this): void
            tick(this: this): number
            weight(this: this): number
            delta(this: this): number
        }
        interface TimerConstructor extends ImpactClass<Timer> {
            _last: number
            time: number
            timeScale: number
            maxStep: number

            new(target: number): Timer
        }
        var Timer: TimerConstructor

        enum TIMER_MODE { ONCE = 0, REPEAT = 1, BLINK = 2, SINUS = 3, SINUS_RND = 4 }
        interface WeightTimer extends ig.Class {
            duration: number
            timer: number
            actualTick: boolean
            mode: ig.TIMER_MODE
            repeatCount: number
            _rndBool: boolean
        }
        interface WeightTimerConstructor extends ImpactClass<WeightTimer> {
            new(actualTick: boolean, duration: number, mode: ig.TIMER_MODE): WeightTimer
        }
        var WeightTimer: WeightTimerConstructor
    }
}
