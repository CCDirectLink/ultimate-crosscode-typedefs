// requires impact.base.game
// requires impact.feature.gui.gui

export {}

declare global {
    namespace sc {
        interface InputForcerGui extends ig.GuiElementBase { }

        namespace InputForcer {
            interface Entry {
                cancelAction: boolean
                check: () => boolean
                keep: boolean
            }
        }
        interface InputForcer extends ig.GameAddon {
            activeEntry: sc.InputForcer.Entry
            texts: { title: ig.LangLabel.Data | string, textKeyboard: ig.LangLabel.Data | string, textGamepad: ig.LangLabel.Data | string }
            gui: sc.InputForcerGui
            blocked: boolean
            darknessHandle: boolean
            lightHandle: boolean
            inputSubmitted: boolean
            sounds: { start: ig.Sound }
            preUpdateOrder: number

            setEntry(this: this, action: keyof typeof sc.INPUT_FORCER_ENTRIES, title: ig.LangLabel.Data | string,
                textKeyboard: ig.LangLabel.Data | string, textGamepad: ig.LangLabel.Data | string): void
            isBlocking(this: this): boolean
            clearEntry(this: this): void
            isSubmitted(this: this): boolean
            _startBlock(this: this, cancelAction: boolean): void
            _endBlock(this: this): void
        }
        interface InputForcerConstructor extends ImpactClass<InputForcer> {
            new (): InputForcer
        }
        var InputForcer: InputForcerConstructor

        var INPUT_FORCER_ENTRIES: {
            DODGE_RIGHT: sc.InputForcer.Entry
            ATTACK_LEFT: sc.InputForcer.Entry
            CHARGE_HOLD: sc.InputForcer.Entry
            CHARGE_RELEASE: sc.InputForcer.Entry
        }
    }
}
