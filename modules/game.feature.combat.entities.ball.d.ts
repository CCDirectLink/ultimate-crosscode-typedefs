// requires game.feature.combat.entities.projectile
// requires game.feature.combat.model.ball-behavior
// requires game.feature.combat.model.proxy
// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity
// requires impact.feature.light.light

export {};

declare global {
  namespace sc.PROXY_TYPE {
    type BALL = sc.BallInfo;
    var BALL: typeof sc.BallInfo;
  }

  namespace sc {
    // TODO data
    interface BallInfo extends sc.ProxySpawnerBase {
      data: any;
    }
    interface BallInfoConstructor extends ImpactClass<BallInfo> {
      new (data: any): BallInfo;
    }
    var BallInfo: BallInfo;
  }

  namespace ig.ENTITY {
    namespace Ball {
      interface Settings extends ig.Entity.Settings {}
    }
    interface Ball extends ig.ENTITY.Projectile {
      attackInfo: sc.AttackInfo;
      remainingHits: number;
      timer: number;
      speed: number;
      speedFactor: number;

      changeSpeed(this: this, speed: number, applySpeedFactor?: boolean): void
      destroy(this: this): void;
    }
    interface BallConstructor extends ImpactClass<Ball> {
      new(x: number, y: number, z: number, settings: Ball.Settings): Ball;
    }
    var Ball: BallConstructor;
  }
}
