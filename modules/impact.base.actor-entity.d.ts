// requires impact.base.entity
// requires impact.base.action

export {};

declare global {
  namespace ig {
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

      setAction(
        this: this,
        action: ig.Action,
        keepState?: Nullable<boolean>,
        noStateReset?: Nullable<boolean>,
      ): void;
      getTarget(this: this): Nullable<ig.ActorEntity>;
      setAttribute(this: this, key: string, value: unknown): void;
      getAttribute(this: this, key: string): unknown;
      storeWalkAnims(this: this, name: string, config: ig.ActorEntity.WalkAnims): void;
      setWalkAnims(this: this, config: string | ig.ActorEntity.WalkAnims): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {
      FACE4: typeof ActorEntity$FACE4
      FACE8: typeof ActorEntity$FACE8
    }
    var ActorEntity: ActorEntityConstructor;
  }
}
