export {};

declare global {
  namespace ig {
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
      type: COLLTYPE;
      size: Vec3;
      weight: number;
      relativeVel: number;
      zBounciness: number;
      zGravityFactor: number;
      pos: Vec3;
      level: number;
      baseZPos: number;
      shadow: CollEntry.Shadow;
      vel: Vec3;

      setSize(x: number, y: number, z: number): void;
      setPadding(this: this, x: number, y: number): void;
    }
    interface CollEntryConstructor extends ImpactClass<CollEntry> {
      new (entity: ig.Entity): CollEntry;
    }
    var CollEntry: CollEntryConstructor;

    interface CollTools {
      getDistVec2(coll1: CollEntry, coll2: CollEntry, dest: Vec2): Vec2;
    }
    var CollTools: CollTools;
  }
}
