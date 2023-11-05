// requires impact.base.entity
// requires impact.base.coll-entry

export {};

declare global {
  namespace ig {
    namespace Physics {
      interface TraceResult {
        dir: Vec2;
        dist: number;
        levelUp: boolean;
        forcePushEntries: unknown;
        forcePushDirs: unknown;
      }
      interface CollEntry {
        _inCollisionMap: boolean;
        type: ig.COLLTYPE;
        pos: Vec2;
        size: Vec2;
        padding: Vec2;
        parentColl: CollEntry;
        ignoreCollision: boolean;
        weight: number;
        entity: ig.Entity;
      }
    }
    interface Physics extends ig.Class {
      cellSize: number;
      _updateCount: number;
    }
    interface PhysicsConstructor extends ImpactClass<Physics> {
      new (): Physics;
    }
    var Physics: PhysicsConstructor;
  }
}
