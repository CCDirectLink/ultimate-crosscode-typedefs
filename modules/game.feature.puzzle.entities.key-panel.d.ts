// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.entities.ball
// requires game.feature.menu.map-model

export {};

declare global {
    namespace ig.ENTITY {
        namespace KeyPanel {
            interface Settings extends ig.Entity.Settings {
                keyType: 'REGULAR' | 'MASTER'
            }
        }
    }
}
