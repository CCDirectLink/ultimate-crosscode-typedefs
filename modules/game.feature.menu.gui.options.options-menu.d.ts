// requires impact.feature.gui.gui
// requires game.feature.menu.gui.options.options-list


export {}

declare global {
    namespace sc {
        interface OptionsMenu extends sc.BaseMenu {
            exitMenu(this: this): void
        }
        interface OptionsMenuConstructor extends ImpactClass<OptionsMenu> {
          new (): OptionsMenu
        }
        var OptionsMenu: OptionsMenuConstructor
    }
}
