// requires impact.base.animation
// requires impact.base.coll-entry
// requires impact.base.impact

export {};

declare global {
  namespace ig {
    enum ENTITY_SPRITE_MODE {
      FLAT = 1,
      CUBE = 2,
    }

    enum ENTITY_ALIGN {
      BOTTOM = 1,
      CENTER = 2,
      TOP = 3,
      FACE = 4,
      BASE = 5,
      WALL_HIT = 6,
      FACE_BASE = 7,
    }

    namespace Entity {
      interface Settings {
        name?: string;
        size?: Partial<Vec3>;
        mapId?: number;
        spawnCondition?: string;
      }

      interface Attachable {
        onEntityKillDetach(this: this): void;
      }
    }
    interface Entity extends ig.Class, ig.Vars.Accessor {
      id: number;
      uid: number;
      mapId: number;

      settings: unknown; // an empty object, appears to be unused
      name?: Nullable<string>
      coll: ig.CollEntry;
      sprites: ig.CubeSprite[];
      entityAttached: ig.Entity.Attachable[];
      _hidden: boolean;
      _hideRequest: boolean;
      _killed: boolean;
      
      ballDestroyer?: boolean;
      isPlayer?: boolean;

      reset(this: this, x: number, y: number, z: number, settings: ig.Entity.Settings): void;
      initSprites(this: this): void;
      setPos(this: this, x?: number, y?: number, z?: number, moveDelta?: Nullable<boolean>): void;
      setZPos(this: this, z: number): void;
      getCenter(this: this, destination?: Nullable<Vec2>): Vec2;
      getAlignedPos(this: this, alignment: ig.ENTITY_ALIGN, dest?: Nullable<Vec3>): Vec3;
      getCollideSide(this: this, otherEntity: ig.Entity): ig.ActorEntity.FACE4;
      update(this: this): void;
      setSpriteCount(this: this, count: number, guiSprites?: boolean): void;
      updateSprites(this: this): void;
      addEntityAttached(this: this, attachable: ig.Entity.Attachable): void;
      removeEntityAttached(this: this, attachable: ig.Entity.Attachable): void;
      clearEntityAttached(this: this, conditionCallback: (attachable: ig.Entity.Attachable) => boolean): void;
      show(this: this): void;
      hide(this: this): void;
      kill(this: this, levelChange?: Nullable<boolean>): void;
      onKill(this: this): void;
      erase(this: this): void;
      collideWith(this: this, entity: ig.Entity, dir: Vec2): void;


      // below are functions and variables not formally defined in ig.Entity,
      // but other relevant classes do check for them.
      isBall?: boolean
      terrain?: ig.TERRAIN

      varsChanged?(this: this): void;
      isBallDestroyer?(this: this, collPos: Vec3, collRes: { dir: Vec2 }, c?: boolean): boolean;
      isBallAdjust?(this: this): boolean;
      doBallAdjust?(this: this, pos: Vec3, dir: Vec2, size: Vec3, maxBounce: number): void;
      ballHit?(this: this, ball: ig.Entity, ...args: unknown[]): boolean | void;
      isQuickMenuVisible?(this: this): boolean;
      getQuickMenuSettings?(this: this): Omit<sc.QuickMenuTypesBaseSettings, 'entity'>;
    }
    interface EntityConstructor extends ImpactClass<Entity> {
      new (x: number, y: number, z: number, settings: ig.Entity.Settings): Entity;
      COLLISION_MAP: Record<ig.COLLTYPE, Record<ig.COLLTYPE, boolean>>;
    }
    var Entity: EntityConstructor;

    enum WIPE_DIRECTION {
      NORTH = 1,
      SOUTH = 3
    }

    namespace EntityTools {
      function getGroundEntity(entity: ig.Entity): Nullable<ig.Entity>
      function isInScreen(entity: ig.Entity, x?: number, y?: number): boolean
    }

    enum COLLTYPE {
      NONE = 0,
      IGNORE = 1,
      PROJECTILE = 2,
      VIRTUAL = 3,
      PBLOCK = 4,
      NPBLOCK = 5,
      BLOCK = 6,
      TRIGGER = 7,
      PASSIVE = 8,
      SEMI_IGNORE = 9,
      FENCE = 10,
      NPFENCE = 11
    }

    enum COLLSHAPE {
      RECTANGLE = 1,
      SLOPE_NE = 2,
      SLOPE_SE = 3,
      SLOPE_SW = 4,
      SLOPE_NW = 5
    }

    namespace AnimatedEntity {
      interface Settings extends ig.Entity.Settings {}
    }
    interface AnimatedEntity extends ig.Entity {
      animSheet: ig.AnimationSheet
      animState: ig.AnimationState;
      animSpeedFactor: number
      currentAnim: string;

      initAnimations(this: this, sheet?: ig.AnimationSheet | string | unknown): void;
      setCurrentAnim(this: this, name: string, reset?: boolean, followUp?: Nullable<string>, force?: boolean, callbackOnFinish?: boolean): void;
    }
    interface AnimatedEntityConstructor extends ImpactClass<AnimatedEntity> {
      new (x: number, y: number, z: number, settings: ig.AnimatedEntity.Settings): AnimatedEntity;
    }
    var AnimatedEntity: AnimatedEntityConstructor;
  }
}
