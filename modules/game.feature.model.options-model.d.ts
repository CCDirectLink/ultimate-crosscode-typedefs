// requires impact.base.game
// requires impact.feature.storage.storage
// requires impact.base.input
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    var KEY_BLACK_LIST: Record<ig.KEY, boolean>;

    enum OPTION_TYPES {
      BUTTON_GROUP = 0,
      ARRAY_SLIDER = 1,
      OBJECT_SLIDER = 2,
      CHECKBOX = 3,
      CONTROLS = 4,
      LANGUAGE = 5,
      INFO = 6,
    }

    enum OPTION_CATEGORY {
      GENERAL = 0,
      INTERFACE = 1,
      VIDEO = 2,
      AUDIO = 3,
      GAMEPAD = 4,
      CONTROLS = 5,
      ASSISTS = 6,
      ARENA = 7,
    }

    namespace OptionDefinition {
      interface BUTTON_GROUP {
        type: 'BUTTON_GROUP';
        data: Record<string, number>;
        init: number;
      }

      interface ARRAY_SLIDER {
        type: 'ARRAY_SLIDER';
        data: number[];
        init: number;
        snap?: boolean;
        fill?: boolean;
      }

      interface OBJECT_SLIDER {
        type: 'OBJECT_SLIDER';
        data: Record<string, number>;
        init: number;
        snap?: boolean;
        fill?: boolean;
        showPercentage?: boolean;
      }

      interface CHECKBOX {
        type: 'CHECKBOX';
        data?: null | undefined;
        init: boolean;
      }

      interface CONTROLS {
        type: 'CONTROLS';
        data?: null | undefined;
        init: { key1: ig.KEY; key2?: ig.KEY };
      }

      interface LANGUAGE {
        type: 'LANGUAGE';
        data: Record<string, number>;
        init: number;
      }

      interface INFO {
        type: 'INFO';
        data: string;
        init?: null | undefined;
      }
    }

    interface OptionDefinitionCommon {
      cat: sc.OPTION_CATEGORY;
      hasDivider?: boolean;
      header?: string;
      restart?: boolean;
    }

    type OptionDefinition = OptionDefinitionCommon &
      (
        | sc.OptionDefinition.BUTTON_GROUP
        | sc.OptionDefinition.ARRAY_SLIDER
        | sc.OptionDefinition.OBJECT_SLIDER
        | sc.OptionDefinition.CHECKBOX
        | sc.OptionDefinition.CONTROLS
        | sc.OptionDefinition.LANGUAGE
        | sc.OptionDefinition.INFO
      );

    var OPTIONS_DEFINITION: { [name: string]: OptionDefinition };

    namespace OPTIONS_DEFINITION {
      interface KnownTypesMap {
        language: sc.OptionDefinition.LANGUAGE;
        'pause-unfocused': sc.OptionDefinition.CHECKBOX;
        'volume-music': sc.OptionDefinition.ARRAY_SLIDER;
        'volume-sound': sc.OptionDefinition.ARRAY_SLIDER;
        'skip-tutorials': sc.OptionDefinition.CHECKBOX;
        'skip-confirm': sc.OptionDefinition.CHECKBOX;
        'text-speed': sc.OptionDefinition.OBJECT_SLIDER;
        'message-padding': sc.OptionDefinition.BUTTON_GROUP;
        'game-sense': sc.OptionDefinition.CHECKBOX;
        'circuit-text-size': sc.OptionDefinition.BUTTON_GROUP;
        'circuit-display-time': sc.OptionDefinition.BUTTON_GROUP;
        'equip-level-display': sc.OptionDefinition.CHECKBOX;
        'level-letter-display': sc.OptionDefinition.CHECKBOX;
        'buff-help': sc.OptionDefinition.CHECKBOX;
        'update-trophy-style': sc.OptionDefinition.BUTTON_GROUP;
        'update-quest-style': sc.OptionDefinition.BUTTON_GROUP;
        'update-landmark-style': sc.OptionDefinition.BUTTON_GROUP;
        'update-lore-style': sc.OptionDefinition.BUTTON_GROUP;
        'update-drop-style': sc.OptionDefinition.BUTTON_GROUP;
        'min-sidebar': sc.OptionDefinition.CHECKBOX;
        'item-hud-size': sc.OptionDefinition.BUTTON_GROUP;
        'show-items': sc.OptionDefinition.CHECKBOX;
        'show-money': sc.OptionDefinition.CHECKBOX;
        'min-quest': sc.OptionDefinition.CHECKBOX;
        'quest-show-current': sc.OptionDefinition.CHECKBOX;
        'xeno-pointer': sc.OptionDefinition.CHECKBOX;
        'hud-display': sc.OptionDefinition.CHECKBOX;
        'close-combat-input': sc.OptionDefinition.CHECKBOX;
        'close-circle': sc.OptionDefinition.CHECKBOX;
        'sp-bar': sc.OptionDefinition.CHECKBOX;
        'element-overload': sc.OptionDefinition.CHECKBOX;
        'low-health-warning': sc.OptionDefinition.CHECKBOX;
        'combat-art-name': sc.OptionDefinition.CHECKBOX;
        'damage-numbers': sc.OptionDefinition.CHECKBOX;
        'damage-numbers-crit': sc.OptionDefinition.CHECKBOX;
        's-rank-effects': sc.OptionDefinition.CHECKBOX;
        'enemy-status-bars': sc.OptionDefinition.CHECKBOX;
        'hp-bars': sc.OptionDefinition.BUTTON_GROUP;
        'party-combat-arts': sc.OptionDefinition.BUTTON_GROUP;
        'quick-menu-access': sc.OptionDefinition.BUTTON_GROUP;
        'quick-location': sc.OptionDefinition.BUTTON_GROUP;
        'quick-element': sc.OptionDefinition.CHECKBOX;
        'quick-cursor': sc.OptionDefinition.CHECKBOX;
        'display-type': sc.OptionDefinition.BUTTON_GROUP;
        fullscreen: sc.OptionDefinition.CHECKBOX;
        'pixel-size': sc.OptionDefinition.BUTTON_GROUP;
        'rumble-strength': sc.OptionDefinition.BUTTON_GROUP;
        speedlines: sc.OptionDefinition.CHECKBOX;
        'env-particles': sc.OptionDefinition.CHECKBOX;
        weather: sc.OptionDefinition.CHECKBOX;
        lighting: sc.OptionDefinition.CHECKBOX;
        'gamepad-attack': sc.OptionDefinition.BUTTON_GROUP;
        'gamepad-dash': sc.OptionDefinition.BUTTON_GROUP;
        'gamepad-icons': sc.OptionDefinition.BUTTON_GROUP;
        'arena-cam-focus': sc.OptionDefinition.CHECKBOX;
        'arena-confirm': sc.OptionDefinition.CHECKBOX;
        'element-wheel': sc.OptionDefinition.CHECKBOX;
        'keys-confirm': sc.OptionDefinition.CONTROLS;
        'keys-back': sc.OptionDefinition.CONTROLS;
        'keys-menu': sc.OptionDefinition.CONTROLS;
        'keys-pause': sc.OptionDefinition.CONTROLS;
        'keys-help': sc.OptionDefinition.CONTROLS;
        'keys-help2': sc.OptionDefinition.CONTROLS;
        'keys-help3': sc.OptionDefinition.CONTROLS;
        'keys-skip-cutscene': sc.OptionDefinition.CONTROLS;
        'keys-help4': sc.OptionDefinition.CONTROLS;
        'keys-circle-left': sc.OptionDefinition.CONTROLS;
        'keys-circle-right': sc.OptionDefinition.CONTROLS;
        'keys-up': sc.OptionDefinition.CONTROLS;
        'keys-right': sc.OptionDefinition.CONTROLS;
        'keys-down': sc.OptionDefinition.CONTROLS;
        'keys-left': sc.OptionDefinition.CONTROLS;
        'keys-melee': sc.OptionDefinition.CONTROLS;
        'keys-guard': sc.OptionDefinition.CONTROLS;
        'keys-quick': sc.OptionDefinition.CONTROLS;
        'keys-special': sc.OptionDefinition.CONTROLS;
        'keys-dash2': sc.OptionDefinition.CONTROLS;
        'keys-cold': sc.OptionDefinition.CONTROLS;
        'keys-shock': sc.OptionDefinition.CONTROLS;
        'keys-heat': sc.OptionDefinition.CONTROLS;
        'keys-wave': sc.OptionDefinition.CONTROLS;
        'keys-neutral': sc.OptionDefinition.CONTROLS;
        'assists-description': sc.OptionDefinition.INFO;
        'assist-damage': sc.OptionDefinition.OBJECT_SLIDER;
        'assist-attack-frequency': sc.OptionDefinition.OBJECT_SLIDER;
        'assist-puzzle-speed': sc.OptionDefinition.OBJECT_SLIDER;
      }
    }

    var KEY_OPTION_MAP: Record<string, string>;

    interface KeyBinder extends ig.Class {
      initBindings(this: this): void;
      unbind(this: this, key: ig.KEY, data: sc.OptionDefinition.CONTROLS): void;
      updateGamepadIcons(this: this): void;
      changeBinding(
        this: this,
        optionId: string,
        key: ig.KEY,
        isAlternative: boolean,
        unbind: boolean,
      ): void;
    }
    interface KeyBinderConstructor extends ImpactClass<KeyBinder> {
      new (): KeyBinder;
    }
    var KeyBinder: KeyBinderConstructor;

    interface OptionModel extends ig.GameAddon, sc.Model, ig.Storage.Listener {
      hdMode: boolean;
      hasChanged: boolean;
      values: ig.Storage.GlobalsData.Options;

      dispatchKeySwappedEvent(this: this): void;
      get<K extends keyof sc.OPTIONS_DEFINITION.KnownTypesMap>(
        this: this,
        key: K,
        local?: boolean,
      ): sc.OPTIONS_DEFINITION.KnownTypesMap[K]['init'];
      get(this: this, key: string, local?: boolean): unknown;
      _checkForKeyBindingFailure(this: this): void;
      onStorageGlobalSave(this: this, globals: ig.Storage.GlobalsData): void;
      onStorageGlobalLoad(this: this, globals: ig.Storage.GlobalsData): void;
    }
    interface OptionModelConstructor extends ImpactClass<OptionModel> {
      new (): OptionModel;
    }
    var OptionModel: OptionModelConstructor;
    var options: OptionModel;

    enum OPTIONS_EVENT {
      OPTION_CHANGED = 0,
      OPTION_KEYS_SWAPPED = 1,
    }
  }
}
