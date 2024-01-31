// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    interface CombatShield extends ig.Class {
      isActive(
        this: this,
        combatant: sc.PlayerBaseEntity,
        attackingEntity: sc.BasicCombatant.DamagingEntity,
        attackInfo: sc.AttackInfo,
        receivingPart: Nullable<sc.BasicCombatant.DamagingEntity>,
        isPerfect: boolean,
      ): boolean;
    }
    interface CombatShieldConstructor extends ImpactClass<CombatShield> {}
    var CombatShield: CombatShieldConstructor;

    interface CombatantShieldConnection extends ig.Class {
      perfectGuardTime: number;

      resetPerfectGuardTime(this: this): void;
    }
    interface CombatantShieldConnectionConstructor extends ImpactClass<CombatantShieldConnection> {
      new (
        combatant: ig.ENTITY.Combatant,
        shield: sc.CombatShield,
        perfectGuardTime?: Nullable<number>,
      ): CombatantShieldConnection;
    }
    var CombatantShieldConnection: CombatantShieldConnectionConstructor;

    namespace COMBAT_SHIELDS {
      interface DIRECTIONAL extends sc.CombatShield {}
      interface DIRECTIONAL_CONSTRUCTOR extends ImpactClass<DIRECTIONAL> {}
      var DIRECIONAL: DIRECTIONAL_CONSTRUCTOR;

      interface PLAYER extends sc.COMBAT_SHIELDS.DIRECTIONAL {
        noShieldDamage: boolean;
      }
      interface PLAYER_CONSTRUCTOR extends ImpactClass<PLAYER> {}
      var PLAYER: PLAYER_CONSTRUCTOR;
    }
  }
}
