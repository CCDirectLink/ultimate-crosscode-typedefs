// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface RegenDestructType {
      size: Vec3;
      noBlinking: boolean;
      collType: ig.COLLTYPE;
      boom: { sheet: string; name: string };
      regen?: { sheet: string; name: string };
      hide?: { sheet: string; name: string };
      shadow?: number;
      zGravityFactor?: number;
      hitSide?: [number, number, number, number];
      hitSound?: ig.Sound;
      terrain?: ig.TERRAIN;

      hitCondition(entity: ig.Entity, regenDestruct: ig.ENTITY.RegenDestruct): boolean;
      onCollision(entity: ig.Entity, dir: Vec2, regenDestruct: ig.ENTITY.RegenDestruct): void;
      anims: ig.AnimationSheet.Settings;
    }
    interface REGEN_DESTRUCT_TYPE {
      iceBlock: sc.RegenDestructType;
      flame: sc.RegenDestructType;
      shock: sc.RegenDestructType;
      ferroHeat: sc.RegenDestructType;
      ferroCold: sc.RegenDestructType;
      ferroShock: sc.RegenDestructType;
      ferroWave: sc.RegenDestructType;
    }
    var REGEN_DESTRUCT_TYPE: REGEN_DESTRUCT_TYPE;
  }
  namespace ig {
    namespace ENTITY {
      namespace RegenDestruct {
        interface Settings extends ig.Entity.Settings {
          desType: keyof typeof sc.REGEN_DESTRUCT_TYPE;
          activeCondition: string;
          onDestroyIncrease: string;
          blockNavMap?: boolean;
          regenTime?: number;
        }
      }
      interface RegenDestruct extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
        hitSide: [number, number, number, number];
        conditionFunction: sc.RegenDestructType['hitCondition'];
        effects: {
          base: ig.EffectSheet;
          boom: Nullable<ig.EffectSheet>;
          debris: Nullable<ig.EffectSheet>;
          regen: Nullable<ig.EffectSheet>;
          hide: Nullable<ig.EffectSheet>;
          baseHandle: Nullable<ig.ENTITY.Effect>;
          boomHandle: Nullable<ig.ENTITY.Effect>;
          debrisHandle: Nullable<ig.ENTITY.Effect>;
          regenHandle: Nullable<ig.ENTITY.Effect>;
          hideHandle: Nullable<ig.ENTITY.Effect>;
        };
        blockNavMap: boolean;
        navBlocker: ig.NavBlocker;
        blinkTimer: number;
        regenMaxTime: number;
        regenTimer: number;
        collType: ig.COLLTYPE;
        collideCallback: sc.RegenDestructType['onCollision'];
        zHeight: number;
        onDestroyIncrease?: string;
        _wm: ig.Config;
        desTypeName: keyof sc.REGEN_DESTRUCT_TYPE;

        onHideRequest(this: this): void;
        startRegen(this: this): void;
        isActive(this: this): boolean;
        regenerate(this: this): boolean;
        regenComplete(this: this): void;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
        destroy(this: this, spawnEffects?: boolean, startRegen?: boolean): void;
        varsChanged(this: this): void;
        throwDebris(this: this): void;
        isBallDestroyer(
          this: this,
          collPos: Vec3,
          collRes: ig.Physics.TraceResult,
          isThrowCharged?: boolean,
        ): boolean;
      }
      interface RegenDestructConstructor extends ImpactClass<RegenDestruct> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.RegenDestruct.Settings,
        ): RegenDestruct;
      }
      var RegenDestruct: RegenDestructConstructor;
    }
  }
  namespace sc {
    namespace COMBAT_POI {
      namespace REGEN_DESTRUCT {
        interface Settings {
          destructType: keyof sc.REGEN_DESTRUCT_TYPE;
          active?: boolean;
        }
      }
      interface REGEN_DESTRUCT extends sc.COMBAT_POI.Base<sc.COMBAT_POI.REGEN_DESTRUCT.Settings> {
        _wm: ig.Config;
      }
      var REGEN_DESTRUCT: REGEN_DESTRUCT;
    }
  }
}
