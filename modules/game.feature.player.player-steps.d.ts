// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.player.player-config
// requires game.feature.combat.model.combat-params
// requires impact.feature.camera.camera
// requires game.feature.combat.entities.food-icon
// requires game.feature.party.party

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      interface SET_PLAYER_INVINCIBLE extends ActionStepBase {
        factor: number;

        run(this: this, target: ig.ENTITY.Player): boolean;
      }
      interface SET_PLAYER_INVINCIBLE_CONSTRUCTOR extends ImpactClass<SET_PLAYER_INVINCIBLE> {}
      var SET_PLAYER_INVINCIBLE: SET_PLAYER_INVINCIBLE_CONSTRUCTOR;

      namespace SHOW_FOOD_ICON {
        interface Settings {
          icon: keyof typeof sc.FOOD_SPRITE;
          offset?: Optional<Vec2>;
        }
      }
      interface SHOW_FOOD_ICON extends ActionStepBase {
        icon: number;
        offset?: Optional<Vec2>;

        start(this: this, target: ig.ENTITY.Combatant): void;
      }
      interface SHOW_FOOD_ICON_CONSTRUCTOR extends ImpactClass<SHOW_FOOD_ICON> {
        new (settings: SHOW_FOOD_ICON.Settings): SHOW_FOOD_ICON;
      }
      var SHOW_FOOD_ICON: SHOW_FOOD_ICON_CONSTRUCTOR;
    }
  }
}
