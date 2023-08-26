// requires game.feature.npc.entities.sc-actor
// requires game.feature.combat.model.proxy
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.combat-poi

export {};

declare global {
    namespace sc {
        namespace CombatProxyEntity {
            namespace Settings {
                interface Data {
                    startAnim?: string;
                }
            }
            interface Settings {
                data: Settings.Data;
            }
        }
        interface CombatProxyEntity extends sc.BasicCombatant {
            hp: number;
            maxHp: number;
            combatant: sc.BasicCombatant;
            sourceEntity: sc.BasicCombatant;
            party: sc.COMBATANT_PARTY;
            animSheet: ig.AnimationSheet;

            initAnimations(this: this): void;
        }
        interface CombatProxyEntityConstructor extends ImpactClass<CombatProxyEntity> {
            new (x: number, y: number, z: number, settings: CombatProxyEntity.Settings): CombatProxyEntity;
        }
        var CombatProxyEntity: CombatProxyEntityConstructor;
    }
}