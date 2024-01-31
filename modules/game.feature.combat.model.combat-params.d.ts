// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    enum ELEMENT {
      NEUTRAL = 0,
      HEAT = 1,
      COLD = 2,
      SHOCK = 3,
      WAVE = 4,
    }

    enum COMBAT_PARAM_MSG {
      HP_CHANGED = 1,
      SP_CHANGED = 2,
      STATS_CHANGED = 3,
      BUFF_ADDED = 4,
      BUFF_REMOVED = 5,
      RESET_STATS = 6,
      MAX_SP_CHANGED = 7,
      SP_CONSUME = 8,
      BUFFS_CLEARED = 9,
    }

    enum ATTACK_TYPE {
      NONE = 0,
      LIGHT = 1,
      MEDIUM = 2,
      HEAVY = 3,
      MASSIVE = 4,
      BREAK = 5,
    }

    var ELEMENT_MAX: number;
    var ELEMENT_COUNTER: Record<ELEMENT, ELEMENT>;
    var SP_REGEN_SPEED: { [maxSp: number]: number };
    var SP_REGEN_FACTOR: number;
    var HP_LOW_WARNING: number;

    namespace CombatParams {
      interface Params {
        hp: number;
        attack: number;
        defense: number;
        focus: number;
        
        elemFactor: number[];
        statusInflict: number[];
        statusEffect: number[];
      }
      type ParamName = keyof sc.CombatParams.Params;

      interface BaseParams extends Params {
      }

      interface DamageResult {
        damage: number;
        defReduced: number;
        offensiveFactor: number;
        baseOffensiveFactor: number;
        elementalDef: number;
        defensiveFactor: number;
        critical: number;
        status: number;
      }
    }
    interface CombatParams extends ig.Class, sc.Model {
      combatant: ig.ENTITY.Combatant;
      baseParams: sc.CombatParams.BaseParams;
      modifiers: Record<keyof sc.MODIFIERS, number>;
      buffs: sc.StatChange[];
      currentHp: number;
      maxSp: number;
      currentSp: number;
      spHoldTimer: number;
      currentItemBuffs: number;
      tmpElemFactor: number[];
      tmpStatusInflict: number[];
      damageFactor: number;
      ballFactor: number;
      defeated: boolean;
      statusStates: sc.CombatStatusBase[];
      hpRegTime: number;
      hpHealTimer: number;
      criticalDmgFactor: number;

      getStat<K extends sc.CombatParams.ParamName>(
        this: this,
        key: K,
        noHack?: Nullable<boolean>,
      ): sc.CombatParams.Params[K];
      getModifier(this: this, modifier: keyof sc.MODIFIERS): number;
      setCombatant(this: this, combatant: ig.ENTITY.Combatant): void;
      setModifiers(this: this, modifiers: sc.ModifierList): void;
      reset(this: this, maxSp: number): void;
      setMaxSp(this: this, maxSp: number): void;
      setBaseParams(this: this, baseParams: sc.CombatParams.BaseParams): void;
      getDamage(
        this: this,
        attackInfo: sc.AttackInfo,
        damageFactorMod: number,
        combatant: ig.ENTITY.Combatant,
        shieldResult?: sc.SHIELD_RESULT,
        hitIgnore?: boolean
      ): CombatParams.DamageResult;
      getHealAmount(this: this, healInfo: sc.HealInfoType): number;
      setCritical(this: this): void;
      increaseHp(this: this, amount: number): void;
      getHpFactor(this: this): number;
      addSp(this: this, spAdd: number, maxSp?: number): void;
      setRelativeSp(this: this, factor: number): void;
      consumeSp(this: this, sp: number): void;
      setRelativeHp(this: this, ratio: number): void;
      getSp(this: this): number;
      getRelativeSp(this: this): number;
      notifySpConsume(this: this, sp: number): void;
      isDefeated(this: this): boolean;
      addBuff(this: this, buff: sc.StatChange): true;
      removeBuff(this: this, buff: sc.StatChange): void;
      removeAllBuffs(this: this): void;
      update(this: this, inCombat: boolean): void;
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {}
    var CombatParams: CombatParamsConstructor;

    interface AttackInfo extends ig.Class {
      type: sc.ATTACK_TYPE;
      attackerParams: sc.CombatParams;
      ballDamage: boolean;
      damageFactor: number;
      defenseFactor: number;
      statusInflict: number;
      element: sc.ELEMENT;
      critFactor: number;
      spFactor: number;

      hasHint(this: this, hint: string): boolean
    }
    interface AttackInfoConstructor extends ImpactClass<AttackInfo> {}
    var AttackInfo: AttackInfoConstructor;

    namespace HealInfo {
      interface Settings {
        value: number,
        absolute?: boolean
      }
    }
    interface HealInfo extends ig.Class {
      healerParams: sc.CombatParams;
      value: number;
      absolute: boolean;
      clone (this: this): sc.HealInfo;
    }
    interface HealInfoConstructor extends ImpactClass<HealInfo> {
      new (params: sc.CombatParams, settings: HealInfo.Settings): sc.HealInfo;
    }
    var HealInfo: HealInfoConstructor;
    //in any situation where the game expects sc.HealInfo, a normal object that can work as well.
    //in fact, the devs used this property quite a bit.
    type HealInfoType = sc.HealInfo | sc.HealInfo.Settings;
  }
}
