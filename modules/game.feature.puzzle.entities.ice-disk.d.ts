// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
    namespace sc {
        namespace IceDiskEntity {
            interface Settings extends ig.AnimatedEntity.Settings {

            }
        }
        interface IceDiskEntity extends ig.AnimatedEntity {
            timer: number;
            combatant: ig.ENTITY.Combatant;
            state: number;
            panel?: Optional<ig.ENTITY.WaterBubblePanel>;

            slide(this: this, dir: Vec2, combatant: ig.ENTITY.Combatant): void;
        }
        interface IceDiskEntityConstructor extends ImpactClass<IceDiskEntity> {
            new(x: number, y: number, z: number, settings: IceDiskEntity.Settings): IceDiskEntity;
        }
        let IceDiskEntity: IceDiskEntityConstructor;
    }
}