// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    namespace IceDiskEntity {
      interface Settings extends ig.AnimatedEntity.Settings {
        panel?: ig.ENTITY.WaterBubblePanel;
        coalCookTime?: number;
        target?: ig.ActorEntity;
        targetTime?: number;
        combatant?: ig.ENTITY.Combatant;
      }
    }
    interface IceDiskEntity extends ig.AnimatedEntity, ig.BallLike {
      timer: number;
      combatant: ig.ENTITY.Combatant;
      state: number;
      panel?: Nullable<ig.ENTITY.WaterBubblePanel>;

      slide(this: this, dir: Vec2, combatant: ig.ENTITY.Combatant): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface IceDiskEntityConstructor extends ImpactClass<IceDiskEntity> {
      new (x: number, y: number, z: number, settings: IceDiskEntity.Settings): IceDiskEntity;
    }
    let IceDiskEntity: IceDiskEntityConstructor;
  }
}
