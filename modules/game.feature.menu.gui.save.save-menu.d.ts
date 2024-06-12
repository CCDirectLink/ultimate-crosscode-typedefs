// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.widget.modal-dialog
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.control.control
// requires game.feature.menu.gui.save.save-list

export { }

declare global {
    namespace sc {
        interface SaveMenu extends sc.BaseMenu {
            list: sc.SaveList
        }
        interface SaveMenuConstructor extends ImpactClass<SaveMenu> {
            new(): SaveMenu
        }
        var SaveMenu: SaveMenuConstructor
    }
}
