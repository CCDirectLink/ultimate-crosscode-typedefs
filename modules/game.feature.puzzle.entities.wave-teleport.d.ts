// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event
export {};

declare global {
    namespace ig.ENTITY {
        namespace WaveTeleport {
            interface Teleportable {
                doTeleport(this: this, portal: ig.ENTITY.WaveTeleport): void;
            }
        }
        interface WaveTeleport extends ig.AnimatedEntity {

        }
        interface WaveTeleportConstructor extends ImpactClass<WaveTeleport> {}

        let WaveTeleport: WaveTeleportConstructor;
    }
}