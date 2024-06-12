// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export { }

declare global {
    namespace sc {
        interface RingMenuButton extends ig.FocusGui {
            state: sc.QUICK_MENU_STATE
            data: string
        }
        interface RingMenuButtonConstructor extends ImpactClass<RingMenuButton> {
            new(state: sc.QUICK_MENU_STATE, endPosX: number, endPosY: number): RingMenuButton
        }
        var RingMenuButton: RingMenuButtonConstructor
    }
}
