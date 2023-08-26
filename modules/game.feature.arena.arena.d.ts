// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.arena.entities.arena-spawn
// requires game.feature.arena.arena-loadable
// requires game.feature.combat.combat
// requires game.feature.arena.arena-bonus-objectives
// requires game.feature.arena.arena-score-types
// requires game.feature.arena.arena-challenges
// requires game.feature.arena.arena-cheer

export {};

declare global {
  namespace sc {
    enum ARENA_MEDALS_TROPHIES {
      BRONZE = 1,
      SILVER = 2,
      GOLD = 3,
      PLATIN = 4,
      TRUE_PLATIN = 5,
    }

    enum ARENA_BASE_TYPE {
      SOLO_CUP = 'SOLO_CUP',
      TEAM_CUP = 'TEAM_CUP',
      SOLO_CUSTOM = 'SOLO_CUSTOM',
      TEAM_CUSTOM = 'TEAM_CUSTOM',
    }

    enum ARENA_ROUND_MODE {
      DEFAULT = 'DEFAULT',
    }

    var ARENA_CHAIN_MAX_TIME: number;

    enum ARENA_SORT_TYPES {
      ORDER = 0,
    }

    var ARENA_SILVER_MEDAL_QUOTA: number;
    var ARENA_RUSH_COIN_QUOTA: number;
    var ARENA_TROPHY_QUOTA: number;
    var ARENA_MAX_CHAIN_HITS: number;
    var ARENA_MAX_CHAIN_MULTIPLIER: number;

    enum ARENA_PAUSE_ACTIONS {
      NONE = 0,
      RESTART = 1,
      LOBBY = 2,
    }

    namespace Arena {
      interface CupOptions {
        order?: number;
        id?: string;
      }

      interface Cup {
        order: number;
        name: ig.LangLabel.Data;
        condition?: string;
        noRush?: boolean;
        progress: Arena.CupProgress;
      }

      namespace CupData {
        interface CupCore {
          name: ig.LangLabel.Data;
          info: ig.LangLabel.Data;
          difficulty: number;
          level: number;
          creator: ig.LangLabel.Data;
          music: string;
          rushMusic: string;
          noRush?: boolean;
          condition?: string;
          type: sc.ARENA_BASE_TYPE;
        }

        interface ArenaRound {}
      }

      interface CupData {
        core: CupData.CupCore;
      }

      interface CupProgress {
        rush: RushProgress;
        rounds: RoundProgress[];
      }

      interface RoundProgress {
        medal: number;
        points: number;
        time: number;
        cleared: number;
      }

      interface RushProgress extends RoundProgress {
        chain: number;
      }

      interface ArenaBonusObjective {
        _type: 'Integer' | 'EMPTY';
        _prefix?: 'seconds' | 'value' | 'target';
        order: number;
        displayRangePoints: boolean;

        // TODO
        init(a: any, b: any): void;
        check(a: any): boolean;
        getText(a: string, b: any, c: boolean): string;
        getPoints?(a: any, b: any): number;
      }

      interface KnownCupAttributes {
        noRush: boolean;
        name: ig.LangLabel.Data;
        condition: string;
        type: sc.ARENA_BASE_TYPE;
      }

      interface Runtime {
        score: number;
        prevScore: number;
        timer: number;
        chain: number;
        rushChain: number;
        rushChainMax: number;
        chainTimer: number;
        roundKills: number;
        currentWave: number;
        waveKillsNeeded: number;
        rush: boolean;
        roundStarted: boolean;
        currentRound: number;
      }
    }

    interface Arena extends ig.GameAddon, ig.Vars.Accessor, sc.Model.Observer {
      active: boolean;
      runtime: sc.Arena.Runtime
      coins: number;
      coinsSpend: number;
      cups: Record<string, sc.Arena.Cup>;
      partyStash: string[];
      effects: ig.EffectSheet;
      _pauseBlock: boolean;
      _endRoundEnd: boolean;
      _exitCup: boolean;
      _pauseAction: number;
      _isFinalHit: boolean;
      _partySettingBehaviour: null | keyof sc.PARTY_STRATEGY.BehaviourStrategies;
      _hasCustomCups: boolean;

      registerCup(
        this: this,
        cupName: string,
        cupOptions: Arena.CupOptions,
        isExtension?: boolean,
      ): void;
      onPreDamageApply(
        this: this,
        combatant: ig.ENTITY.Combatant,
        damageResult: sc.CombatParams.DamageResult,
        shieldResult: sc.SHIELD_RESULT,
        attacker: ig.ENTITY.Combatant,
        attackInfo: sc.AttackInfo,
      ): void;
      addScore(this: this, scoreType: keyof sc.ARENA_SCORE_TYPES, points?: number): void;
      getTotalArenaCompletion(this: this): number;
      getCupCompletion(this: this, cupName: string): number;
      getTotalDefaultTrophies(this: this, a: number, c: boolean): number;
      getCupTrophy(this: this, cupName: string): sc.ARENA_MEDALS_TROPHIES | -1;
      isCupUnlocked(this: this, cupName: string): boolean;
      getTotalDefaultCups(this: this, sorted: boolean): { [key: string]: { order: number } };
      isCupCustom(this: this, cupName: string): boolean;
      isEnemyBlocked(this: this, entity: ig.ENTITY.Enemy): boolean;
      onCombatantHeal(this: this, entity: ig.ENTITY.Combatant, healAmount: number): void;
      startRound(this: this): void;
      endRound(this: this): void;
      initMetaData(this: this, cupName: string): void;
      onLevelLoadStart(this: this): void;
      getCupRounds(this: this, cupName: string): sc.Arena.CupData.ArenaRound[];
      getCupCoreAttrib<K extends keyof Arena.KnownCupAttributes>(
        this: this,
        cupName: string,
        attribute: K,
      ): Arena.KnownCupAttributes[K];
      onEnemyBreak(this: this, enemy: ig.ENTITY.Enemy): void;
      hasChallenge(this: this, challenge: keyof sc.ARENA_CHALLENGES): boolean;
    }
    interface ArenaConstructor extends ImpactClass<Arena> {
      new (): Arena;
    }
    var Arena: ArenaConstructor;
    var arena: Arena;

    interface ARENA_BONUS_OBJECTIVE {
      NO_DAMAGE_TAKEN: sc.Arena.ArenaBonusObjective;
      NO_ITEMS_USED: sc.Arena.ArenaBonusObjective;
      PVP_FLAWLESS: sc.Arena.ArenaBonusObjective;
      EFFECTIVE_DAMAGE: sc.Arena.ArenaBonusObjective;
      HIT_COUNTER: sc.Arena.ArenaBonusObjective;
      TIME: sc.Arena.ArenaBonusObjective;
      COMBAT_ARTS_USED: sc.Arena.ArenaBonusObjective;
      CHAIN: sc.Arena.ArenaBonusObjective;
      ITEMS_USED: sc.Arena.ArenaBonusObjective;
    }
    var ARENA_BONUS_OBJECTIVE: ARENA_BONUS_OBJECTIVE;
  }
}
