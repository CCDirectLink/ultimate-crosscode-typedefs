// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface Modifier {
      icon: number;
      order: number;
      noPercent?: boolean;
    }

    interface MODIFIERS {
      AIM_SPEED: Modifier;
      AIM_STABILITY: Modifier;
      AIMING_MOVEMENT: Modifier;
      KNOCKBACK: Modifier;
      RANGED_DMG: Modifier;
      MELEE_DMG: Modifier;
      CRITICAL_DMG: Modifier;
      BREAK_DMG: Modifier;
      SPIKE_DMG: Modifier;
      ASSAULT: Modifier;
      CROSS_COUNTER: Modifier;
      BERSERK: Modifier;
      MOMENTUM: Modifier;
      DASH_INVINC: Modifier;
      DASH_STEP: Modifier;
      GUARD_STRENGTH: Modifier;
      GUARD_SP: Modifier;
      GUARD_AREA: Modifier;
      PERFECT_GUARD_WINDOW: Modifier;
      PERFECT_GUARD_RESET: Modifier;
      STUN_THRESHOLD: Modifier;
      OVERHEAT_REDUCTION: Modifier;
      HP_REGEN: Modifier;
      SP_REGEN: Modifier;
      ITEM_GUARD: Modifier;
      ONCE_MORE: Modifier;
      XP_PLUS: Modifier;
      DROP_CHANCE: Modifier;
      MONEY_PLUS: Modifier;
      XP_ZERO: Modifier;
      RANK_PLANTS: Modifier;
      ITEM_BOOST: Modifier;
      APPETITE: Modifier;
      COND_HEALING: Modifier;
      COND_EFFECT_HEAT: Modifier;
      COND_EFFECT_COLD: Modifier;
      COND_EFFECT_SHOCK: Modifier;
      COND_EFFECT_WAVE: Modifier;
      COND_EFFECT_ALL: Modifier;
      COND_GUARD_HEAT: Modifier;
      COND_GUARD_COLD: Modifier;
      COND_GUARD_SHOCK: Modifier;
      COND_GUARD_WAVE: Modifier;
      SPIDER_SLOW_DOWN_GUARD: Modifier;
      BEGONE_ICE: Modifier;
    }
    var MODIFIERS: MODIFIERS;

    type ModifierList = Partial<Record<keyof sc.MODIFIERS, number>>
  }
}
