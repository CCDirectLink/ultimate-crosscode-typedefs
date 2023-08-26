// requires impact.base.game
// requires impact.feature.effect.effect-sheet
// requires impact.feature.database.database
// requires impact.feature.navigation.navigation
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    enum COMBATANT_PARTY {
      PLAYER = 1,
      ENEMY = 2,
      OTHER = 3,
    }

    namespace Combat {
      interface Effects {
        hit: ig.EffectSheet;
        guard: ig.EffectSheet;
        combat: ig.EffectSheet;
        combatant: ig.EffectSheet;
        throw: ig.EffectSheet;
        mode: ig.EffectSheet;
        heal: ig.EffectSheet;
        cooldownHandle: ig.EffectSheet; // never actually used and is set to null
      }

      interface ActionAttached {
        onActionEndDetach(this: this): void;
      }
    }
    interface Combat extends ig.GameAddon {
      enemyDataList: Record<string, sc.EnemyType>;
      effects: sc.Combat.Effects;
      active: boolean;

      canShowBoostedEntry(this: this, enemyName: string, isBoss: boolean): boolean;
      showHitEffect(this: this, entity: ig.Entity, hitPos: Vec3, hitDegree: sc.ATTACK_TYPE, hitElement: sc.ELEMENT, shielded: boolean, critical: boolean, ignoreSounds: boolean): ig.ENTITY.Effect;
      showPerfectDashEffect(this: this, target: ig.ActorEntity): void;
      getElementMode(this: this, combatant: ig.ENTITY.Combatant): sc.ELEMENT;
      isInCombat(this: this, combatant: ig.ENTITY.Combatant): boolean;
      onCombatantDeathHit(this: this, attacker: ig.ENTITY.Combatant, victim: ig.ENTITY.Combatant): void;
      showModeChange(this: this, combatant: ig.ENTITY.Combatant, element: sc.ELEMENT): ig.ENTITY.Effect;
      showModeAura(this: this, combatant: ig.ENTITY.Combatant, element: sc.ELEMENT): void;
      clearModeAura(this: this, combatant: ig.ENTITY.Combatant): void;
      showModeDash(this: this, combatant: ig.ENTITY.Combatant, element: sc.ELEMENT): void;
    }
    interface CombatConstructor extends ImpactClass<Combat> {}
    var Combat: CombatConstructor;
    var combat: Combat;
  }
}
