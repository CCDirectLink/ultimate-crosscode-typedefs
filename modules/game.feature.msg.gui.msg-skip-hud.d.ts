// requires impact.feature.gui.gui
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text

export { }

declare global {
    namespace sc {
        interface MsgSkipGui extends ig.GuiElementBase {
            text: sc.TextGui
            box: sc.SmallBlackBoxGui
            personEntry: unknown
            timer: number

            hide(this: this): void
            show(this: this): void
        }
        interface MsgSkipGuiConstructor extends ImpactClass<MsgSkipGui> {
            new(): MsgSkipGui
        }
        var MsgSkipGui: MsgSkipGuiConstructor
    }
}
