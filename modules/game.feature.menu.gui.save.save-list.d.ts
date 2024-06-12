// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.save.save-misc

export { }

declare global {
    namespace sc {
        interface SaveAutoSaveSlot extends ig.BoxGui {
            button: null /* i swear this is never set */
        }
        interface SaveAutoSaveSlotConstructor extends ImpactClass<SaveAutoSaveSlot> {
            new(): SaveAutoSaveSlot
        }
        var SaveAutoSaveSlot: SaveAutoSaveSlotConstructor

        interface SaveList extends ig.GuiElementBase {
            gfx: ig.Image
            list: sc.ButtonListBox
            buttongroup: sc.ButtonGroup
            slots: sc.SaveSlotButton[]
            submitSound: ig.Sound
            selectedSlot: sc.SaveSlotButton
            autoSlot: sc.SaveAutoSaveSlot
        }
        interface SaveListConstructor extends ImpactClass<SaveList> {
            new(): SaveList
        }
        var SaveList: SaveListConstructor
    }
}
