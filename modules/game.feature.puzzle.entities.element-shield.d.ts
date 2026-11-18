// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface ElementShieldBallEntity extends ig.AnimatedEntity, ig.BallLike {
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface ElementShieldBallEntityConstructor extends ImpactClass<ElementShieldBallEntity> {
      new (x: number, y: number, z: number, settings: unknown): ElementShieldBallEntity;
    }
    var ElementShieldBallEntity: ElementShieldBallEntityConstructor;
  }
}
