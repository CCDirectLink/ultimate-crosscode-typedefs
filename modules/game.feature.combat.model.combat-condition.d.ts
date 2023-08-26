// requires game.feature.combat.model.combat-params

export {}

declare global {
    namespace sc {
        interface CombatCondition {
            check(this: this, entity: ig.ENTITY.Combatant, random?: number): boolean;
        }

        namespace COMBAT_CONDITION {
            interface RANDOM extends ig.Class, CombatCondition {
                value: number;
                check(this: this, entity: ig.ENTITY.Combatant, random: number): boolean;
            }
            interface RANDOM_CONSTRUCTOR extends ImpactClass<RANDOM> {}

            interface HAS_SP extends ig.Class, CombatCondition {
                min: number;
            }
            interface HAS_SP_CONSTRUCTOR extends ImpactClass<HAS_SP> {}
        }
        interface COMBAT_CONDITION {
            RANDOM: COMBAT_CONDITION.RANDOM_CONSTRUCTOR;
            HAS_SP: COMBAT_CONDITION.HAS_SP_CONSTRUCTOR;
        }
        let COMBAT_CONDITION: COMBAT_CONDITION;
    }
}