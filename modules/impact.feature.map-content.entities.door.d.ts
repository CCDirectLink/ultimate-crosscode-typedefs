// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.map-content.entities.hidden-block
// requires impact.feature.base.entities.object-layer-view
// requires impact.feature.effect.effect-sheet

export { };

declare global {
    namespace ig.ENTITY {
        namespace Door {
            interface Settings extends ig.Entity.Settings {
                doorType?: keyof typeof ig.DOOR_TYPE;
                transitionType?: "REGULAR" | "INTER_AREA";
                narrow?: boolean;
                map: string;
                marker: string;
                dir?: keyof typeof ig.ActorEntity.FACE4;
                variation?: string;
                condition?: string;
                blockEvent?: unknown; // steps: e.blockEvent
                blockEventCondition?: string;
                hideCondition?: string;
            }
        }
        interface Door extends ig.AnimatedEntity {
            doorType: keyof typeof ig.DOOR_TYPE
            condition: ig.VarCondition
            map: string
            marker: string
            dir: keyof typeof ig.ActorEntity.FACE4
            active: boolean
            openTimer: number
            hasDoorMat: boolean
            hasDoorGlow: boolean
            hideManager?: ig.EntityHideManager
            blockEvent: ig.Event
            blockEventCondition: ig.VarCondition
            openEffect: ig.EffectHandle
            sounds: { activate: ig.Sound, deactivate: ig.Sound }
            fx: { sheet: ig.EffectSheet }

            open(this: this, entity: ig.Entity, data: Vec2 & { dot: number }): void
        }
        interface DoorConstructor extends ImpactClass<Door> {
            new(x: number, y: number, z: number, settings: ig.ENTITY.Door.Settings): Door
        }
        var Door: DoorConstructor
    }
}

