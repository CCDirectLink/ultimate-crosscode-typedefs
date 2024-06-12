// requires impact.base.entity
// requires impact.base.action

export {};

declare global {
  namespace ig {
    var ACTOR_RUN_THRESHOLD: number

    interface ActorConfig extends ig.Class {
      empty: boolean
      data: Record<string, unknown>
      original: unknown

      clearOverwrite(this: this): void;
    }
    interface ActorConfigConstructor extends ImpactClass<ActorConfig> {
      new(data: unknown, parentConfig: unknown): ActorConfig
    }
    var ActorConfig: ActorConfigConstructor

    enum ActorEntity$FACE4 {
      NORTH = 0,
      EAST = 1,
      SOUTH = 2,
      WEST = 3
    }
    enum ActorEntity$FACE8 {
      NORTH = 0,
      EAST = 1,
      SOUTH = 2,
      WEST = 3,
      NORTH_EAST = 4,
      SOUTH_EAST = 5,
      SOUTH_WEST = 6,
      NORTH_WEST = 7
    }

    namespace ActorEntity {
      interface WalkAnims {
        idle: string;
        preMove?: string;
        move?: string;
        moveRev?: string;
        moveLeft?: string;
        run?: string;
        runRev?: string;
        runLeft?: string;
        brake?: string;
        preIdle?: string;
        jump?: string;
        fall?: string;
        hover?: string;
        preHoverMove?: string;
        hoverMove?: string;
        hoverMoveRev?: string;
        land?: string;
      }
      type FACE4 = ig.ActorEntity$FACE4;
      type FACE8 = ig.ActorEntity$FACE8;
    }

    interface ActorEntity extends ig.AnimatedEntity {
      face: Vec2;
      animationFixed: boolean;
      walkAnims: ActorEntity.WalkAnims;
      stepTimer: number
      stepSync: number
      stepData: Record<string, any>
      defaultConfig: ig.ActorConfig
      jumpingEnabled: boolean
      jumping: boolean
      floatJump: number
      preJumpStats: { maxVel: number, accelSpeed: number, zGravityFactor: number }

      setDefaultConfig(this: this, config: ig.ActorConfig): void
      setAttribute(this: this, key: string, value: unknown): void;
      getAttribute(this: this, key: string): unknown;
      getTarget(this: this): Nullable<ig.ActorEntity>;
      setAction(
        this: this,
        action: ig.Action,
        keepState?: Nullable<boolean>,
        noStateReset?: Nullable<boolean>,
      ): void;
      cancelJump(this: this): void;
      setWalkAnims(this: this, config: string | ig.ActorEntity.WalkAnims): void;
      storeWalkAnims(this: this, name: string, config: ig.ActorEntity.WalkAnims): void;
      doJump(this: this, zVel: number, callbackHeight: number, maxVel: number, accelSpeed: Nullable<number>, ignoreSounds: boolean): void
      doFloatJump(this: this, floatJump: number, jumping: boolean | number, maxVel: number): void
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {
      FACE4: typeof ActorEntity$FACE4
      FACE8: typeof ActorEntity$FACE8

      new (x: number, y: number, z: number, settings: ig.Entity.Settings): ig.ActorEntity
    }
    var ActorEntity: ActorEntityConstructor;
  }
}
