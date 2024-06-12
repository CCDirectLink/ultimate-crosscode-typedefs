// requires impact.feature.gui.gui
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text
// requires game.feature.gui.base.slick-box
// requires game.feature.msg.gui.msg-skip-hud

export { }

declare global {
    namespace sc {
        function getMessageTime(textLike: sc.TextLike): number

        interface SideMessageHudGui extends ig.GuiElementBase {
            sideLabel: sc.SideMessageLabelGui
            pauseMaxY: number
            pauseBoxes: sc.SideMessageBoxGui[]
            visibleBoxes: sc.SideMessageBoxGui[]
            timer: number
            pauseMode: boolean
            messageIndex: number
            quickPop: boolean

            doMessageStep(this: this, quickPop?: boolean): void
            popMessage(this: this): void
            showNextSideMessage(this: this): void
            onMessageFinish(this: this): void
            onSkipInteract(this: this, type: sc.SKIP_INTERACT_MSG): void
        }
        interface SideMessageHudGuiConstructor extends ImpactClass<SideMessageHudGui> {
            new(): SideMessageHudGui
        }
        var SideMessageHudGui: SideMessageHudGuiConstructor

        interface SideMessageBoxGui extends sc.SlickBoxRawGui {
            text: sc.TextGui
            face: sc.SideMessageFaceGui
            beepSound: ig.Sound

            setContent(this: this, character: sc.CharacterExpression, text: sc.TextLike, skip: boolean): void
        }
        interface SideMessageBoxGuiConstructor extends ImpactClass<SideMessageBoxGui> {
            new(): SideMessageBoxGui
        }
        var SideMessageBoxGui: SideMessageBoxGuiConstructor

        interface SideMessageFaceGui extends ig.GuiElementBase {
            charExpression: sc.CharacterExpression
            timer: number

            setFace(this: this, expression: sc.CharacterExpression, height: number): void
        }
        interface SideMessageFaceGuiConstructor extends ImpactClass<SideMessageFaceGui> {
            new(): SideMessageFaceGui
        }
        var SideMessageFaceGui: SideMessageFaceGuiConstructor

        interface SideMessageLabelGui extends ig.GuiElementBase {
            iconText: sc.TextGui
            currentIconDevice: ig.INPUT_DEVICES
        }
        interface SideMessageLabelGuiConstructor extends ImpactClass<SideMessageLabelGui> {
            new(): SideMessageLabelGui
        }
        var SideMessageLabelGui: SideMessageLabelGuiConstructor
    }
}
