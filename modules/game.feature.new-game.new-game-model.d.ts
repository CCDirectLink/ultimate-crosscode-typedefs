// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    interface NewGameSet {
      type: sc.TOGGLE_SET_TYPE;
      order: number;
    }
    namespace NEW_GAME_SETS {
      type Keys = keyof NEW_GAME_SETS;
    }
    interface NEW_GAME_SETS {
      "carry-over": NewGameSet,
      money: NewGameSet,
      exp: NewGameSet,
      "drop-rate": NewGameSet,
      "combat-modifier": NewGameSet,
      itemCooldown: NewGameSet,
      "hp-regen": NewGameSet,
      enemy: NewGameSet,
      "enemy-damage": NewGameSet,
      "combat-arts": NewGameSet,
      others: NewGameSet
    }
    var NEW_GAME_SETS: NEW_GAME_SETS;

    interface NewGameOption {
      set: NEW_GAME_SETS.Keys;
      cost: number;
      disabled?: boolean;
      needsSaveFile?: boolean;
    }
    namespace NEW_GAME_OPTIONS {
      type Keys = keyof NEW_GAME_OPTIONS;
    }
    interface NEW_GAME_OPTIONS {
      "money-plus-2": NewGameOption,
      "money-plus-4": NewGameOption,
      "disable-money": NewGameOption,
      "exp-plus-2": NewGameOption,
      "exp-plus-4": NewGameOption,
      "disable-exp": NewGameOption,
      "drop-rate-2": NewGameOption,
      "drop-rate-4": NewGameOption,
      "keep-level": NewGameOption,
      "keep-consumables": NewGameOption,
      "keep-addons": NewGameOption,
      "keep-equipment": NewGameOption,
      "keep-trade": NewGameOption,
      "keep-money": NewGameOption,
      "keep-elements": NewGameOption,
      "keep-arena": NewGameOption,
      "keep-botanics": NewGameOption,
      "keep-traders": NewGameOption,
      "lea-must-die": NewGameOption,
      "sergey-hax": NewGameOption,
      "dash-1": NewGameOption,
      "witch-time": NewGameOption,
      "overload-disable": NewGameOption,
      "infinite-sp": NewGameOption,
      "double-buff-time": NewGameOption,
      "remove-skill-blocks": NewGameOption,
      "item-cd-double": NewGameOption,
      "item-cd-half": NewGameOption,
      "item-cd-zero": NewGameOption,
      "combat-regen-half": NewGameOption,
      "combat-regen-zero": NewGameOption,
      "scale-enemies": NewGameOption,
      "harder-enemies": NewGameOption,
      "enemy-aggro": NewGameOption,
      "enemy-damage-15": NewGameOption,
      "enemy-damage-2": NewGameOption,
      "enemy-damage-4": NewGameOption,
      "combat-arts-level-1": NewGameOption,
      "combat-arts-level-2": NewGameOption,
      "waypoints-heals": NewGameOption,
      "waypoints-teleport": NewGameOption,
      "rhombus-start": NewGameOption,
      "no-trophies": NewGameOption,
      "ice-physics": NewGameOption
    }
    var NEW_GAME_OPTIONS: NEW_GAME_OPTIONS;


    namespace NewGamePlusModel {
      interface Applier {
        onNewGameApply(this: this, save: ig.SaveSlot.Data): void;
      }
    }
    interface NewGamePlusModel extends ig.GameAddon, sc.Model {
      active: boolean;
      options: Record<sc.NEW_GAME_OPTIONS.Keys, boolean>;

      get(this: this, option: sc.NEW_GAME_OPTIONS.Keys): boolean;
      applyStoreData(this: this, atRhombus: boolean): void;
      getDropRateMultiplier(this: this): number;
    }
    interface NewGamePlusModelConstructor extends ImpactClass<NewGamePlusModel> {
      new (): NewGamePlusModel;
    }
    var NewGamePlusModel: NewGamePlusModelConstructor;
    var newgame: sc.NewGamePlusModel;
  }
}
