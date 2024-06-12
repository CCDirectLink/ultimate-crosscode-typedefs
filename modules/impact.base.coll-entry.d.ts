export {};

declare global {
  namespace ig {
    enum COLL_HEIGHT_SHAPE {
      NONE = 0,
      NORTH_UP = 1,
      EAST_UP = 2,
      WEST_UP = 3,
      SOUTH_UP = 4
    }
    enum COLL_SHADOW_TYPE {
      DEFAULT = 0,
      STATIC_SIZE = 1,
      RECTANGULAR = 2, 
    }
    namespace CollEntry {
      interface Shadow {
        type: ig.COLL_SHADOW_TYPE;
        size: number;
        scaleY: number;
        offset: Vec2;
      }
    }
    interface CollEntry extends ig.Class {
      entity: ig.Entity
      _active: boolean
      _inCollisionMap: boolean
      _killed: boolean
      type: COLLTYPE;
      shape: ig.COLLSHAPE;
      size: Vec3;
      alwaysRender: boolean
      ignoreCollision: boolean
      weight: number;
      friction: { ground: number, air: number, terrain: number, ignoreTerrain: boolean }
      accelSpeed: number
      maxVel: number
      maxZVel: number
      relativeVel: number;
      bounciness: number
      zBounciness: number;
      minBounceBelocity: number
      zGravityFactor: number;
      float: { height: number, variance: number, maxSpeed: number, acel: number }
      pos: Vec3;
      level: string;
      baseZPos: number;
      shadow: CollEntry.Shadow;
      vel: Vec3;
      pushVel: Vec2
      accelDir: Vec2
      parentColl?: ig.CollEntry
      totalBlockTimer: number
      partlyBlockTimer: number
      updated: number
      _collData: {
        collided: boolean
        frameVel: Vec3
        blockDir: Vec2
        slipped: boolean
        zBaseUncertain: boolean
        zPush: boolean
        skipPhysics: boolean
        forceMoveFrameVel: boolean
        groundEntry: ig.CollEntry
        groundEntryOffset: Vec2
        overlapEntryFactor: number
        noSlipping: boolean
      }

      setSize(this: this, x: number, y: number, z: number): void;
      setPadding(this: this, x: number, y: number): void;
      getCenter(this: this, target?: Vec2): Vec2
    }
    interface CollEntryConstructor extends ImpactClass<CollEntry> {
      new (entity: ig.Entity): CollEntry;
    }
    var CollEntry: CollEntryConstructor;

    interface CollTools {
      getDistVec2(coll1: CollEntry, coll2: CollEntry, dest: Vec2): Vec2;
      isPostMoveOverHole(coll: ig.CollEntry, boo: boolean): boolean
      hasWallCollide(coll: ig.CollEntry, maxAngle: number): boolean
    }
    var CollTools: CollTools;
  }
}
