// requires impact.base.loader
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.model.combat-condition
// requires impact.base.animation
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.combat-target-event

export {}

declare global {
    namespace sc {
        namespace EnemyReactionBase {
            interface Data {
                type: string;
                action?: string;
                postSwitchState?: string;
                restartPrevAction?: boolean;
            }
        }

        //note: there is no defined sc.EnemyReactionBase, it exists just as a local variable
        interface EnemyReactionBase extends ig.Class {
            name: string;
            type: string;
            action?: string;
            postSwitchState?: string;
            ignoreStun: boolean;
            restartPrevAction: boolean;

            onActivate(entity: ig.ENTITY.Enemy): void;
            preApply(entity: ig.ENTITY.Enemy): void;
            apply(entity: ig.ENTITY.Enemy): void;
            check?(entity: ig.ENTITY.Enemy): boolean;
        }
        interface EnemyReactionBaseConstructor extends ImpactClass<EnemyReactionBase> {
            new(name: string, data: EnemyReactionBase.Data): EnemyReactionBase;
        }

        namespace ENEMY_REACTION {
            namespace COLLAB {
                interface Data extends EnemyReactionBase.Data {
                    collabKey: string;
                    conditions: unknown[];
                }
            }
            interface COLLAB extends EnemyReactionBase {}
            interface COLLAB_CONSTRUCTOR extends ImpactClass<COLLAB> {
                new (name: string, data: ENEMY_REACTION.COLLAB.Data): COLLAB;
            }
            let COLLAB: COLLAB_CONSTRUCTOR;

            interface GUARD_COUNTER extends EnemyReactionBase {
                onGuardCountered(this: this, entity: ig.ENTITY.Enemy, guardingEntity: ig.ENTITY.Combatant): void;
            }
            interface GUARD_COUNTER_CONSTRUCTOR extends ImpactClass<GUARD_COUNTER> {}
            let GUARD_COUNTER: GUARD_COUNTER_CONSTRUCTOR;
        }
    }
}