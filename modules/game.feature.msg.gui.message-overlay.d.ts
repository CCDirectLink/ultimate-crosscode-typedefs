// requires impact.feature.gui.gui
// requires game.feature.msg.gui.message-box
// requires game.feature.model.options-model

export { }

declare global {
    namespace ig {
        interface MessageOverlayGui$Entry extends ig.GuiElementBase {
            name: string
            isEntry: boolean
            lookRight: boolean
            order: number
            beepSound: ig.Sound
            displayName: ig.MessageOverlayGui.DisplayName

            addMessage(this: this, maxWidth: number, text: ig.LangLabel): sc.MsgBoxGui
        }
        interface MessageOverlayGui$EntryConstructor extends ImpactClass<MessageOverlayGui$Entry> {
            new(area: ig.MessageAreaGui, name: string, lookRight: boolean,
                order: number, displayName?: ig.MessageOverlayGui.DisplayName): MessageOverlayGui$Entry
        }

        interface MessageOverlayGui$DisplayName extends ig.GuiElementBase {
            text: sc.TextGui
        }
        interface MessageOverlayGui$DisplayNameConstructor extends ImpactClass<MessageOverlayGui$DisplayName> {
            new(test: sc.TextLike): MessageOverlayGui$DisplayName
        }

        namespace MessageOverlayGui {
            type Entry = MessageOverlayGui$Entry
            type DisplayName = MessageOverlayGui$DisplayName
        }
        interface MessageOverlayGui extends ig.GuiElementBase {
            messageArea: ig.MessageAreaGui
        }
        interface MessageOverlayGuiConstructor extends ImpactClass<MessageOverlayGui> {
            new(): MessageOverlayGui

            Entry: MessageOverlayGui$EntryConstructor
            DisplayName: MessageOverlayGui$DisplayNameConstructor
        }
        var MessageOverlayGui: MessageOverlayGuiConstructor

        interface MessageAreaGui extends ig.GuiElementBase {
            clickToContinue: boolean
            messages: sc.MsgBoxGui[]

            onTextFinished(this: this): void
            clearMessages(this: this): void
            skip(this: this): void
        }
        interface MessageAreaGuiConstructor extends ImpactClass<MessageAreaGui> {
            new(): MessageAreaGui
        }
        var MessageAreaGui: MessageAreaGuiConstructor
    }
}
