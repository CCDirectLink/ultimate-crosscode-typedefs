// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires impact.base.actor-entity

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace Elevator {
                interface Settings { }
            }
            interface Elevator extends ig.Entity {
                condition: ig.VarCondition
                switchEntity: sc.ElevatorSwitchEntity
            }
            interface ElevatorConstructor extends ImpactClass<Elevator> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.Elevator.Settings): Elevator
            }
            var Elevator: ElevatorConstructor
        }
    }
    namespace sc {
        namespace ElevatorSwitchEntity {
            interface Settings {
                ground: ig.ENTITY.Elevator
                // elevatorData: sc.ELEVATOR_TYPE
            }
        }
        interface ElevatorSwitchEntity extends ig.AnimatedEntity {
            groundEntity: ig.ENTITY.Elevator
            interactEntry: sc.MapInteractEntry
        }
        interface ElevatorSwitchEntityConstructor extends ImpactClass<ElevatorSwitchEntity> {
            new(x: number, y: number, z: number, settings: sc.ElevatorSwitchEntity.Settings): ElevatorSwitchEntity
        }
        var ElevatorSwitchEntity: ElevatorSwitchEntityConstructor

    }
}
