// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    interface Crosshair extends ig.Entity {
      _updateCrossHair(
        this: this,
        pos: Vec3,
        dir: Vec2,
        size: Vec3,
        alpha: number,
        tile: string,
        bouncePoints: number,
        maxPoint: number,
        maxBounce: number,
        s?: ig.Entity
      ): void;
    }
    interface CrosshairConstructor extends ImpactClass<Crosshair> {}
    var Crosshair: CrosshairConstructor;

    interface CrosshairDot extends ig.AnimatedEntity {}
    interface CrosshairDotConstructor extends ImpactClass<CrosshairDot> {}
    var CrosshairDot: CrosshairDotConstructor;
  }
}
