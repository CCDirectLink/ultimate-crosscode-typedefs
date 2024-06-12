// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.menu-misc

export { };

declare global {
    namespace sc {
        interface QuickItemArrow extends ig.GuiElementBase {
            flipX: boolean
            flipY: boolean
            bottomAnchor: boolean

            setPosition(this: this, x: number, y: number, flipX?: boolean, flipY?: boolean, bottomAnchor?: boolean): void
        }
        interface QuickItemArrowConstructor extends ImpactClass<QuickItemArrow> {
            new(): QuickItemArrow
        }
        var QuickItemArrow: QuickItemArrowConstructor
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
