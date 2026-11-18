// requires impact.base.actor-entity
// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig.ENTITY {
    namespace SlidingBlock {
      interface Settings extends ig.AnimatedEntity.Settings {}
    }
    interface SlidingBlock extends ig.AnimatedEntity {
      _wm: ig.Config;
      moving: boolean;
      moveDir: Vec2;
      bombSnap: boolean;
      squishRespawn: boolean;
      effects: { sheet: ig.EffectSheet };

      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface SlidingBlockConstructor extends ImpactClass<SlidingBlock> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.SlidingBlock.Settings,
      ): SlidingBlock;
    }
    var SlidingBlock: SlidingBlockConstructor;
  }
}
