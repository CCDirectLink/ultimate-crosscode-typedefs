// requires impact.feature.gui.gui
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text

export { }

declare global {
    namespace sc {
        interface MsgBoxGui extends ig.GuiElementBase {
            text: sc.TextGui
            box: sc.ArrowBoxGui
            personEntry: ig.MessageOverlayGui.Entry

            setPointerDown(this: this): void
            isFinished(this: this): boolean
            skip(this: this): void
        }
        interface MsgBoxGuiConstructor extends ImpactClass<MsgBoxGui> {
            new(maxWidth: number, pointerType: sc.ArrowBoxGui.POINTER,
                text: ig.LangLabel, speed: ig.TextBlock.SPEED, personEntry: ig.MessageOverlayGui.Entry, beepSound: Nullable<ig.Sound>): MsgBoxGui
        }
        var MsgBoxGui: MsgBoxGuiConstructor
    }
}
