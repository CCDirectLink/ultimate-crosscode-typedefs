// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.map-content.entities.hidden-block
// requires impact.feature.base.entities.object-layer-view
// requires game.feature.npc.entities.npc-waypoint

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace TeleportGround {
                interface Settings { }
            }
            interface TeleportGround extends ig.Entity {
                map: string
                marker: string
                dir: keyof typeof ig.ActorEntity.FACE4
                blockEventCondition: string
            }
            interface TeleportGroundConstructor extends ImpactClass<TeleportGround> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.TeleportGround.Settings): TeleportGround
            }
            var TeleportGround: TeleportGroundConstructor

        }
    }
}
