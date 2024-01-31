// requires impact.feature.storage.storage
// requires impact.base.event
// requires game.feature.menu.map-model
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    enum PARTY_MSG {
      PARTY_CHANGED = 1,
      DUNGEON_BLOCK_CHANGED = 2,
    }
    var PARTY_MAX_MEMBERS: number;
    var PARTY_OPTIONS: string[];
    enum PARTY_SORT_TYPE {
      STATUS = 0,
      NAME = 1,
      LEVEL = 2,
    }
    enum PARTY_MEMBER_TYPE {
      UNKNOWN = 0,
      CONTACT = 1,
      FRIEND = 2,
    }

    namespace PARTY_STRATEGY {
      interface TargetStrategy {
        others: boolean;
        same: boolean;
      }
      interface BehaviourStrategy {
        dodgeMin: number;
        dodgeMax: number;
        noAttack?: boolean;
        doNothing?: boolean;
        onlyTargetPlayer?: boolean;
      }
      interface ArtsStrategy {
        factor: number;
      }

      interface TargetStrategies {
        WHATEVER: TargetStrategy;
        MY_ENEMY: TargetStrategy;
        OTHERS: TargetStrategy;
      }
      interface BehaviourStrategies {
        OFFENSIVE: BehaviourStrategy;
        DEFENSIVE: BehaviourStrategy;
        DO_NOTHING: BehaviourStrategy;
      }
      interface ArtsStrategies {
        NORMAL: ArtsStrategy;
        OFTEN: ArtsStrategy;
        NEVER: ArtsStrategy;
      }

      interface StrategyType {
        TARGET: TargetStrategy;
        BEHAVIOUR: BehaviourStrategy;
        ARTS: ArtsStrategy;
      }
    }
    interface PARTY_STRATEGY {
      TARGET: PARTY_STRATEGY.TargetStrategies;
      BEHAVIOUR: PARTY_STRATEGY.BehaviourStrategies;
      ARTS: PARTY_STRATEGY.ArtsStrategies;
    }
    var PARTY_STRATEGY: PARTY_STRATEGY;

    enum SOCIAL_ACTION {
      PARTY_JOIN = 1,
      PARTY_LEAVE = 2,
      CONTACT = 3,
    }

    namespace PartyModel {
      interface Contact {
        status: sc.PARTY_MEMBER_TYPE;
        online: boolean;
        locked: boolean;
      }
      interface StrategyKeys {
        TARGET: keyof sc.PARTY_STRATEGY.TargetStrategies;
        BEHAVIOUR: keyof sc.PARTY_STRATEGY.BehaviourStrategies;
        ARTS: keyof sc.PARTY_STRATEGY.ArtsStrategies;
      }
      interface AI {
        battle: number;
        targeting: number;
        aggressive: number;
      }
    }
    interface PartyModel extends ig.GameAddon, sc.Model, ig.Vars.Accessor, ig.Storage.Listener {
      models: Record<string, sc.PartyMemberModel>;
      currentParty: string[];
      partyEntities: Record<string, sc.PartyMemberEntity>;
      contacts: { [name: string]: sc.PartyModel.Contact };
      dungeonBlocked: boolean;
      lastAreaDungeon: boolean;
      _deferredEntityUpdate: boolean;
      keepDistance: boolean;
      strategyKeys: PartyModel.StrategyKeys;
      ai: PartyModel.AI;
      getStrategy<K extends keyof sc.PARTY_STRATEGY>(this: this, strategy: K): sc.PARTY_STRATEGY.StrategyType[K];
      updatePartyStrategy<K extends keyof sc.PARTY_STRATEGY>(this: this, strategy: K, key: keyof sc.PARTY_STRATEGY[K]): void;
      getStrategyKey<K extends keyof sc.PARTY_STRATEGY>(this: this, strategy: K, index: number): keyof sc.PARTY_STRATEGY[K] | void;
      setContactType(this: this, name: string, type: sc.PARTY_MEMBER_TYPE): void;
      setOnlineStatus(this: this, name: string, online: boolean): void;
      setLocked(this: this, name: string, locked: boolean): void;
      addPartyOption(this: this, name: string): void;
      initParty(this: this, partyString: string): void;
      addPartyMember(
        this: this,
        name: string,
        npc?: Nullable<ig.ENTITY.NPC>,
        noEntityUpdate?: Nullable<boolean>,
        skipEffect?: Nullable<boolean>,
        temporary?: Nullable<boolean>
      ): void;
      removePartyMember(this: this, name: string, npc?: ig.ENTITY.NPC, skipEffect?: boolean): void;
      reviveAllPartyMembers(this: this): void;
      reviveAllPartyMemberModels(this: this): void;
      revivePartyMemberEntity(this: this, name: string): void;
      onMemberDefeat(this: this, name: string): void;
      keepMapDungeon(this: this): void;
      onMapEnter(this: this): void;
      respawnMembers(this: this): void;
      isDungeonBlocked(this: this): boolean;
      isPartyMember(this: this, name: string): boolean;
      isFriend(this: this, name: string): boolean;
      isPartyMemberLocked(this: this, name: string): boolean;
      isPartyMemberOnline(this: this, name: string): boolean;
      isDefeated(this: this): boolean;
      getCurrentPartyIndex(this: this, name: string): number;
      getPartySize(this: this): number;
      getPartySizeAlive(this: this, a?: boolean): number;
      getDmgFactor(this: this): number;
      getPartyMemberModel(this: this, name: string): sc.PartyMemberModel;
      getPartyMemberEntity(this: this, name: string): sc.PartyMemberEntity;
      getPartyMemberEntityByIndex(this: this, index: number): sc.PartyMemberEntity;
      getPartyMemberIndex(this: this, name: string): number;
      getPartyMemberModelByIndex(this: this, index: number): sc.PartyMemberModel;
      addExperience(this: this, exp: number, baseLevel: number, bonus: number, ignoreModifier: boolean, levelCurve: sc.LevelCurve): number;
      updateEquipment(this: this): void;
      resetMemberPos(this: this, name: string): void;
      resetAi(this: this): void;
      _getMemberPos(this: this, dest: Vec3, name: string, initSpawn?: number): Vec3;
      doDeferredEntityUpdate(this: this): void;
      //idx appears to be unused in modern versions
      _spawnPartyMemberEntity(this: this, name: string, showEffects: boolean, idx?: unknown, npc?: ig.ENTITY.NPC): void;
      _updateEntitiesOffset(this: this): void;
      _removePartyMemberEntity(this: this, name: string, npc: ig.ENTITY.NPC, d?: boolean): void;
      onReset(this: this): void;
    }
    interface PartyModelConstructor extends ImpactClass<PartyModel> {
      new (): PartyModel;
    }
    var PartyModel: PartyModelConstructor;
    var party: sc.PartyModel;
  }
}
