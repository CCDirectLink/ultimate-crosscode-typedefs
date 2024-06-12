// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace Crosshair {
      interface Settings {}
    }
    interface Crosshair extends ig.Entity {
      active: boolean
      _aimDir: Vec2

      deferredUpdate(this: this): void
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
    interface CrosshairConstructor extends ImpactClass<Crosshair> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Crosshair.Settings): Crosshair
    }
    var Crosshair: CrosshairConstructor;

    interface CrosshairDot extends ig.AnimatedEntity {}
    interface CrosshairDotConstructor extends ImpactClass<CrosshairDot> {}
    var CrosshairDot: CrosshairDotConstructor;
  }
}
