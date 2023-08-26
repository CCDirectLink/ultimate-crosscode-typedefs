// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
    namespace ig.ENTITY {
        namespace WaterBubblePanel {
            interface Settings extends sc.MapModel.MapEntity.Settings {
                coalCoolTime?: number;
            }
        }
        interface WaterBubblePanel extends ig.AnimatedEntity {}
        interface WaterBubblePanelConstructor extends ImpactClass<WaterBubblePanel> {}
        let WaterBubblePanel: WaterBubblePanelConstructor;
    }
}
