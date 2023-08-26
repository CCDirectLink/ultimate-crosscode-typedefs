// requires impact.feature.gui.gui
// requires game.feature.gui.hud.hp-hud
// requires game.feature.gui.hud.sp-hud
// requires game.feature.gui.hud.param-hud
// requires game.feature.gui.hud.buff-hud
// requires game.feature.gui.hud.item-timer-hud
// requires game.feature.model.options-model
// requires game.feature.gui.hud.key-hud

export {};

declare global {
    namespace sc {
        interface StatusUpperGui extends ig.GuiElementBase {}
        interface StatusUpperGuiConstructor extends ImpactClass<StatusUpperGui> {
            new (): StatusUpperGui;
        }
        let StatusUpperGui: StatusUpperGuiConstructor
    }
}