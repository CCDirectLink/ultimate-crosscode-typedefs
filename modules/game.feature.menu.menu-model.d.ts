// requires impact.base.game
// requires impact.feature.interact.button-interact
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.menu.area-loadable
// requires game.feature.menu.gui.start-menu
// requires game.feature.menu.gui.equip.equip-menu
// requires game.feature.menu.gui.circuit.circuit-menu
// requires game.feature.menu.gui.item.item-menu
// requires game.feature.menu.gui.map.map-menu
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.menu.gui.options.options-menu
// requires game.feature.menu.gui.shop.shop-menu
// requires game.feature.menu.gui.synop.synop-menu
// requires game.feature.menu.gui.quests.quest-menu
// requires game.feature.menu.gui.quest-hub.quest-hub-menu
// requires game.feature.menu.gui.enemies.enemy-menu
// requires game.feature.menu.gui.lore.lore-menu
// requires game.feature.menu.gui.status.status-menu
// requires game.feature.menu.gui.help.help-menu
// requires game.feature.menu.gui.museum.museum-menu
// requires game.feature.menu.gui.stats.stats-menu
// requires game.feature.menu.gui.trophy.trophy-menu
// requires game.feature.menu.gui.social.social-menu
// requires game.feature.menu.gui.trade.trader-menu
// requires game.feature.menu.gui.botanics.botanics-menu
// requires game.feature.menu.gui.arena.arena-menu
// requires game.feature.menu.gui.new-game.new-game-menu
// requires game.feature.menu.map-model

export {};

declare global {
  namespace sc {
    enum MENU_SUBMENU {
      START = 0,
      ITEMS = 1,
      SKILLS = 2,
      EQUIPMENT = 3,
      STATUS = 4,
      SYNOPSIS = 5,
      MAP = 6,
      SAVE = 7,
      OPTIONS = 8,
      SHOP = 9,
      QUESTS = 10,
      TROPHY = 11,
      LORE = 12,
      ENEMY = 13,
      SOCIAL = 14,
      STATS = 15,
      MUSEUM = 16,
      TRADE = 17,
      BOTANICS = 18,
      QUEST_HUB = 19,
      ARENA = 20,
      NEW_GAME = 21,
    }

    interface SubMenuInfo {
      Clazz: new () => sc.BaseMenu;
      name: string;
      alt?: string;
    }
    var SUB_MENU_INFO: Record<sc.MENU_SUBMENU, sc.SubMenuInfo>;

    enum MENU_LEA_STATE {
      LARGE = 0,
      SMALL = 1,
      HIDDEN = 2,
    }

    enum MENU_EQUIP_BODYPART {
      NONE = 0,
      HEAD = 1,
      RIGHT_ARM = 2,
      LEFT_ARM = 3,
      TORSO = 4,
      FEET = 5,
    }

    enum MENU_EQUIP_BODYPART_STR {
      HEAD = 'head',
      LEFT_ARM = 'leftArm',
      RIGHT_ARM = 'rightArm',
      TORSO = 'torso',
      FEET = 'feet',
    }

    enum MENU_SHOP_TYPES {
      BUY_AND_SELL = 0,
      BUY = 1,
      SELL = 2,
      COIN = 3,
    }

    enum MENU_SHOP_STATE {
      START = 0,
      BUY = 1,
      SELL_CAT = 2,
      SELL = 3,
    }

    enum LOG_TYPES {
      QUEST = 0,
      LANDMARK = 1,
      LORE = 2,
      TROPHY = 3,
      TRADER = 4,
      STORY = 5,
      DROP = 6,
    }

    enum MENU_STATUS_PAGES {
      MAIN = 0,
      PARAMS = 1,
      MODS = 2,
      COMBAT_ARTS = 3,
    }

    enum BOTANICS_SORT_TYPE {
      ORDER = 0,
      FOUND = 1,
      NAME = 2,
    }

    var MENU_STATUS_PAGES_LENGTH: number;

    var SELL_PAGES: Array<{
      lang: string;
      type: sc.ITEMS_TYPES;
      equipType: sc.ITEMS_EQUIP_TYPES;
    }>;

    enum MENU_QUEST_HUB_TABS {
      OPEN = 0,
      ACTIVE = 1,
      FINISHED = 2,
    }

    enum MENU_ARENA_TABS {
      SOLO = 0,
      TEAM = 1,
    }

    var MAX_STAMPS_MAX: number;
    var MAX_MOD_VAL: number;

    enum TOGGLE_SET_TYPE {
      SINGLE = 'SINGLE',
      MULTI = 'MULTI',
    }

    namespace MenuModel {
      interface ShopCartEntry {
        id: sc.ItemID;
        amount: number;
        price: number;
      }
    }
    namespace MenuModel {
      type BackCallback = () => void;
      type HotkeyCallback = () => sc.ButtonGui;
    }
    interface MenuModel extends ig.GameAddon, sc.Model {
      previousMenu: sc.MENU_SUBMENU;
      buttonInteract: ig.ButtonInteractEntry;
      backCallbackStack: sc.MenuModel.BackCallback[];
      hotkeysCallbacks: sc.MenuModel.HotkeyCallback;
      currentBackCallback: sc.MenuModel.BackCallback;
      shopID: Nullable<string>;
      shopPage: number;
      shopCart: sc.MenuModel.ShopCartEntry[];
      shopSellMode: boolean;
      statusElement: sc.ELEMENT;
      statusDiff: boolean;

      addHotkey(this: this, callback: sc.MenuModel.HotkeyCallback, commit?: Nullable<boolean>): void;
      commitHotkeys(this: this, a?: boolean): void;
      updateHotkeys(this: this): void;
      removeHotkeys(this: this): void;
      pushBackCallback(this: this, callback: sc.MenuModel.BackCallback): void;
      popBackCallback(this: this): void;
      pushMenu(this: this, menu: sc.MENU_SUBMENU): void;
      popMenu(this: this): void;
      setDirectMode(direct?: Nullable<boolean>, menu?: Nullable<sc.MENU_SUBMENU>): void;
      exitMenu(this: this): void;
      moveLeaSprite(this: this, x: number, y: number, state: sc.MENU_LEA_STATE, skip?: boolean): void;
      setInfoText(this: this, text: sc.TextLike, fade?: boolean): void;
      setBuffText(this: this, text: sc.TextLike, fade?: boolean, id?: sc.ItemID): void;
      setShopPage(this: this, page: number): void;
      updateCart(this: this, itemID: sc.ItemID, amount: number, price: number): void;
      getTotalCost(this: this): number;
      getItemQuantity(this: this, itemID: sc.ItemID, price: number): number;
      sortList(this: this, button: ig.FocusGui): void;
      isStart(this: this): boolean;
      isSkills(this: this): boolean;
      isEquipment(this: this): boolean;
      isStatus(this: this): boolean;
      isSynopsis(this: this): boolean;
      isMap(this: this): boolean;
      isSave(this: this): boolean;
      isOptions(this: this): boolean;
      isShop(this: this): boolean;
      isButtonInteractActive(this: this): boolean;
    }
    interface MenuModelConstructor extends ImpactClass<MenuModel> {
      new (): MenuModel;
    }
    var MenuModel: MenuModelConstructor;
    var menu: sc.MenuModel;

    enum MENU_EVENT {
      INFO_TEXT_CHANGED = 0,
      TOP_BAR_CHANGED = 1,
      TOP_BAR_UPDATE = 2,
      ENTER_MENU = 3,
      LEAVE_MENU = 4,
      EXIT_MENU = 5,
      LEA_STATE_CHANGED = 6,
      ITEM_INFO_CHANGED = 7,
      SELECTED_BODYPART = 8,
      EQUIP_CHANGED = 9,
      SKILL_TREE_SELECT = 10,
      SKILL_CURSOR_FOCUS_NODE = 11,
      SKILL_CURSOR_UNFOCUS_NODE = 12,
      SKILL_NODE_SELECT = 13,
      SKILL_NODE_EXIT = 14,
      SKILL_ENTER_SWAP_BRANCHES = 15,
      SKILL_LEAVE_SWAP_BRANCHES = 16,
      SKILL_TOGGLED_INPUT_MODE = 17,
      SKILL_ENSURE_GAMEPAD_FOCUS = 18,
      ITEM_CHANGED_TAB = 19,
      MAP_CHANGED_FLOOR = 20,
      OPTION_CHANGED_TAB = 21,
      SORT_LIST = 22,
      ITEM_RESET_INFO = 23,
      SET_BUFF_INFO = 24,
      QUEST_CHANGED_TAB = 25,
      QUEST_SET_INFO = 26,
      QUEST_ENTER_DEAILS = 27,
      QUEST_LEAVE_DEAILS = 28,
      MAP_WORLDMAP_STATE = 29,
      MAP_FOCUS_AREA = 30,
      MAP_FOCUS_MAP = 31,
      MAP_UNFOCUS = 32,
      MAP_ENSURE_FOCUS = 33,
      MAP_AREA_LOAD = 34,
      MAP_AREA_LOAD_DONE = 35,
      SAVE_NEW_SLOT = 36,
      SAVE_UPDATE_SLOT = 37,
      SAVE_DELETE_SLOT = 38,
      SYNO_CHANGED_TAB = 39,
      SYNOP_SET_INFO = 40,
      SYNOP_SWITCH_PAGE = 41,
      SYNOP_BUTTON_PRESS = 42,
      SKILL_SWAP_FOCUS = 43,
      SKILL_SWAP_UNFOCUS = 44,
      SKILL_SWAP_ENSURE = 45,
      SHOP_STATE_CHANGED = 46,
      SHOP_PAGE_CHANGED = 47,
      SHOP_CART_CHANGED = 48,
      SHOP_OPEN_QUANTITY = 49,
      SHOP_OPEN_CHECKOUT = 50,
      TRADE_TOGGLE_DETAILS = 51,
      STATUS_SET_PAGE = 52,
      STATUS_SET_ELEMENT = 53,
      DROP_COMPLETED = 54,
      REMOVE_HOTKEYS = 55,
      EQUIP_ENSURE_CURRENT_VALUES = 56,
      MAP_OPEN_STAMPS = 57,
      MAP_UPDATE_STAMP = 58,
      SYNOP_FOCUS = 59,
      OPTION_LANG_POP_UP = 60,
      SKILL_SHOW_EFFECT = 61,
      CIRCUIT_FOCUS_CAM = 62,
      SKILL_SHOW_EFFECT_SWAP = 63,
      POST_EXIT = 99,
      FULL_MENU_ENTER = 100,
    }

    namespace MenuHelper {
      function drawLevel(
        level: number,
        width: number,
        height: number,
        numberGfx: ig.Image,
        isScalable: boolean,
      ): void;
    }
  }
}
