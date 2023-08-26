// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
    namespace sc {
        interface QuickItemMenu extends ig.BoxGui {
            list: sc.ButtonListBox;
            buttongroup: sc.ButtonGroup;
            
            updateList(this: this, skipSounds: boolean): void;
            addFavoriteOverlay(this: this, button: sc.ItemBoxButton): void;
        }
        interface QuickItemMenuConstructor extends ImpactClass<QuickItemMenu> {

        }
        let QuickItemMenu: QuickItemMenuConstructor;
    }
}