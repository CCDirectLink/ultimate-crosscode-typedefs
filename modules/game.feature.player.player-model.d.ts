// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model
// requires game.feature.player.player-level
// requires game.feature.inventory.inventory

export {};

declare global {
  namespace sc {
    var ITEM_USE_TIMER: number;
    var ITEM_MAX_FAVS: number;

    enum PLAYER_MSG {
      ELEMENT_MODE_CHANGE = 1,
      CREDIT_CHANGE = 2,
      EXP_CHANGE = 3,
      LEVEL_CHANGE = 4,
      EQUIP_CHANGE = 5,
      CP_CHANGE = 6,
      SKILL_CHANGED = 7,
      SKILL_BRANCH_SWAP = 8,
      RESET_PLAYER = 9,
      ITEM_OBTAINED = 10,
      SET_PARAMS = 11,
      CONFIG_CHANGED = 12,
      ITEM_USED = 13,
      STATS_CHANGED = 14,
      ITEM_REMOVED = 15,
      ITEM_BLOCK_FINISH = 16,
      ITEM_FAVORITES_CHANGED = 17,
      ITEM_EQUIP_UPDATE = 18,
      ITEM_CONSUME_START = 19,
      ITEM_CONSUME_END = 20,
      CORE_CHANGED = 21,
      ITEM_TOGGLED = 22,
    }

    enum PLAYER_CORE {
      MOVE = 1,
      CHARGE = 2,
      DASH = 3,
      CLOSE_COMBAT = 4,
      GUARD = 5,
      CREDITS = 6,
      MENU = 7,
      ELEMENT_NEUTRAL = 8,
      ELEMENT_HEAT = 9,
      ELEMENT_COLD = 10,
      ELEMENT_SHOCK = 11,
      ELEMENT_WAVE = 12,
      QUICK_MENU = 13,
      THROWING = 14,
      ELEMENT_LOAD = 15,
      ELEMENT_CHANGE = 16,
      SPECIAL = 17,
      COMBAT_RANK = 18,
      QUEST_SWITCH = 19,
      EXP = 20,
      MENU_CIRCUIT = 21,
      MENU_SYNOPSIS = 22,
      MENU_SOCIAL = 23,
      MENU_SOCIAL_INVITE = 24,
      MENU_BOTANICS = 25,
      ITEMS = 26,
      MONEY = 27,
      MODIFIER = 28,
    }

    var EXP_PER_LEVEL: number;
    var EXP_MAX_LEVEL: number;
    var MAX_SP: number;
    var SP_LEVEL: number[];

    namespace PlayerModel {
      interface LevelUpDelta {
        level: number;
        cp: number;
        hp: number;
        attack: number;
        defense: number;
        focus: number;
      }
      interface Equip {
        head: number;
        leftArm: number;
        rightArm: number;
        torso: number;
        feet: number;
      }
      
      type ActionKey = sc.PLAYER_ACTION | keyof typeof sc.PLAYER_ACTION;

      interface Data {
        playerConfig: string
        credit: number
        level: number
        exp: number
        currentElementMode: sc.ELEMENT
        elementLoad: number
        hasOverload: boolean
        hp: number
        core: sc.PlayerModel['core']
        skills: Nullable<boolean>[]
        chapter: number
        skillPoints: sc.PlayerModel['skillPoints']
        skillPointsExtra: sc.PlayerModel['skillPointsExtra']
        items: sc.PlayerModel['items']
        equip: sc.PlayerModel['equip']
        levelUpDelta: sc.PlayerModel['levelUpDelta']
        spLevel: number
        itemFavs: sc.PlayerModel['itemFavs']
        itemNew: sc.PlayerModel['itemNew']
        itemToggles: sc.PlayerModel['itemToggles']
        skillVersion: number
      }
    }

    interface PlayerModel extends ig.Class, ig.Vars.Accessor, sc.Model, ig.Storage.Listener {
      core: Record<sc.PLAYER_CORE, boolean>;
      config: sc.PlayerConfig;
      loadedConfig: sc.PlayerConfig | null;
      equip: PlayerModel.Equip;
      items: number[];
      itemFavs: number[];
      itemNew: number[];
      itemToggles: Record<sc.ItemID, boolean>;
      animSheet: ig.AnimationSheet;
      stats: sc.PlayerConfig.Stats;
      baseParams: sc.CombatParams.BaseParams;
      equipParams: sc.CombatParams.Params;
      equipModifiers: Record<keyof sc.MODIFIERS, number>;
      params: sc.CombatParams;
      name: string;
      character: sc.Character;
      credit: number;
      level: number;
      exp: number;
      skills: sc.BaseSkill[];
      skillPoints: number[];
      skillPointsExtra: Record<sc.ELEMENT, number>;
      chapter: number;
      spLevel: number;
      baseConfig: sc.PlayerSubConfig;
      elementConfigs: Record<sc.ELEMENT, sc.PlayerSubConfig>;
      elementScrollDelay: number;
      levelUpDelta: PlayerModel.LevelUpDelta;
      currentElementMode: sc.ELEMENT;
      elementLoad: number;
      elementLoadTimer: number;
      hasOverload: boolean;
      itemBlockTimer: number;
      chapters: ig.Database.Chapter[];
      toggleSets: Record<string, ig.Database.ToggleSet>;
      
      setConfig(this: this, config: sc.PlayerConfig): void;
      updateChapter(this: this, unlock?: boolean): void;
      reset(this: this): void;
      updateLoop(this: this, inCombat: boolean): void;
      addElementLoad(this: this, delta: number): void;
      setElementLoad(this: this, load: number): void;
      enterElementalOverload(this: this): void;
      onTargetHit(this: this, target: ig.ENTITY.Combatant, attackInfo: sc.AttackInfo, damageResult: sc.CombatParams.DamageResult): void;
      increaseActionHeat(this: this, actionType: sc.PLAYER_ACTION): void;
      getCharacterName(this: this): string;
      switchBranch(this:this, startUID: number, startSide: boolean, newUID: number): void;
      learnSkill(this:this, id: number): void;
      unlearnSkill(this:this, id: number): void;
      hasSkill(this: this, id: number): sc.BaseSkill;
      hasSkillPoints(this: this, skillId: number): boolean;
      addSkillPoints(this: this, points: number, element: sc.ELEMENT, all: boolean, addExtra: boolean): void;
      resetSkillTree(this: this, element: sc.ELEMENT): void;
      setSpLevel(this: this, level: number): void;
      addItem(this: this, item: sc.ItemID, amount: number, hideEffect?: boolean): void;
      startItemConsume(this: this): void;
      endItemConsume(this: this): void;
      useItem(this: this, id: number): boolean;
      getItemBlockTime(this: this): number;
      getTotalItemsUsed(this: this, b?: boolean): number;
      removeItem(
        this: this,
        item: sc.ItemID,
        amount: number,
        skipNotification?: Nullable<boolean>,
        includeEquip?: Nullable<boolean>,
      ): boolean;
      setLevel(this: this, level: number, dontResetSkillTree?: boolean): void;
      getItemAmount(this: this, item: sc.ItemID): number;
      hasItem(this: this, item: sc.ItemID): boolean;
      getItemAmountWithEquip(this: this, item: sc.ItemID): number;
      toggleItem(this: this, item: sc.ItemID, toggleType: ig.Database.ToggleSet): boolean;
      forceToggleState(this: this, item: sc.ItemID, state: boolean): void;
      getToggleItemState(this: this, id: sc.ItemID): boolean;
      hasAnySetItem(this: this, set: ig.Database.ToggleSet): boolean;
      hasToggleSetCompleted(this: this, set: ig.Database.ToggleSet): boolean;
      hasAnyToggleItems(this: this): boolean;
      getItemSubList(this: this, type: keyof typeof sc.ITEMS_TYPES, sort: sc.SORT_TYPE, includeFavs?: boolean): number[];
      getNewItemList(this: this): number[];
      getEquipSubList(this: this, equipType: sc.ITEMS_EQUIP_TYPES, addEquipped?: boolean, sort?: sc.SORT_TYPE): number[];
      sortItemList(this: this, list: sc.ItemID[], sortType: sc.SORT_TYPE, includeFavorites?: boolean): sc.ItemID[];
      _addNewItem(this: this, item: sc.ItemID): void;
      _removeIDFromNewList(this: this, item: sc.ItemID): void;
      _sortOrderFavorite(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      _sortName(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      _sortAmount(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      _sortRarity(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      _sortLevel(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      _sortStat(this: this, item1: sc.ItemID, item2: sc.ItemID): number;
      canAddFavorite(this: this): boolean;
      isFavorite(this: this, item: sc.ItemID): boolean;
      updateFavorite(this: this, item: sc.ItemID): boolean;
      setEquipment(this: this, bodypart: sc.MENU_EQUIP_BODYPART, itemID: sc.ItemID): void;
      isEquipped(this: this, itemID: sc.ItemID): void;
      getAvgEquipLevel(this: this): number;
      setCore(this: this, core: sc.PLAYER_CORE, state: boolean): void;
      setCoreAll(this: this, ): boolean;
      getCore(this: this, core: sc.PLAYER_CORE): boolean;
      getCombatCooldownTime(this: this): number;
      hasElement(this: this, element: sc.ELEMENT): boolean;
      setLevel(this: this, level: number, dontResetSkillTree?: boolean): void;
      addExperience(
        this: this,
        exp: number,
        baseLevel: number,
        bonus: number,
        ignoreModifier: boolean,
        levelCurve: sc.LevelCurve
      ): number;
      addCredit(this: this, amount: number): void;
      removeCredit(this: this, amount: number): void;
      getRawExpGain(this: this, exp: number, baseLevel: number, ignoreGlobalLevelCurve: boolean): number;
      regenerate(this: this): void;
      setElementMode(
        this: this,
        element: sc.ELEMENT,
        force?: Nullable<boolean>,
        skipEffect?: Nullable<boolean>,
      ): boolean;
      scrollElementMode(this: this, a: number, force: boolean, skipEffect: boolean): boolean;
      getCurrentElementMode(this: this): sc.PlayerSubConfig;
      getCombatArt(this: this, element: sc.ELEMENT, actionType: sc.PLAYER_ACTION): ig.Action;
      getCombatArtName(this: this, actionType: PlayerModel.ActionKey): string;
      getActiveCombatArt(this: this, element: sc.ELEMENT, actionType: PlayerModel.ActionKey): ig.Action;
      getAction(this: this, action: sc.PLAYER_ACTION): ig.Action;
      getActionByElement(this: this, element: sc.ELEMENT, actionType: PlayerModel.ActionKey): ig.Action;
      getBalls(this: this): Record<string, sc.ProxySpawnerBase>;
      getOptionFace(this: this): string;
      updateStats(this: this): void;
      getCombatArtLevel(this: this, type: sc.SpecialSkill.SkillType, element?: sc.ELEMENT): number;
      getTopCombatArtElement(this: this, type: sc.SpecialSkill.SkillType): sc.ELEMENT | undefined;
      hasLevelUp(this: this): boolean;
      clearLevelUp(this: this): void;
      getParamAvg(this: this): number;
      getParamAvgLevel(this: this, level: number): number;
      usedSkillPoints(this: this): boolean;
      getMaxSkillPoints(this: this, element: sc.ELEMENT): number;
      getSaveData(this: this): sc.PlayerModel.Data
      checkBodyPart(this: this, id: sc.ItemID): boolean;
    }
    interface PlayerModelContructor extends ImpactClass<PlayerModel> {
      new (): PlayerModel;
    }
    var PlayerModel: PlayerModelContructor;
  }
}
