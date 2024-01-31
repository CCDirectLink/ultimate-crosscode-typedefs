// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace sc {
    enum FOOD_ICON_STATE {
      HOLD = 0,
      BUBBLE = 1,
      DONE = 2,
    }

    var FOOD_SPRITE: Record<string, number>;

    namespace FoodIconEntity {
      interface Settings extends ig.Entity.Settings {
        icon: number;
        combatant: ig.ENTITY.Combatant;
      }
    }
    interface FoodIconEntity extends ig.Entity {
      state: sc.FOOD_ICON_STATE;
      sprites: ig.CubeSprite[];
      icon: number;

      setState(this: this, state: sc.FOOD_ICON_STATE, offset?: Nullable<Vec2>): void;
      updateSprites(this: this): void;
    }
    interface FoodIconEntityConstructor extends ImpactClass<FoodIconEntity> {
      new (x: number, y: number, z: number, settings: FoodIconEntity.Settings): FoodIconEntity;
    }
    var FoodIconEntity: FoodIconEntityConstructor;
  }
}
