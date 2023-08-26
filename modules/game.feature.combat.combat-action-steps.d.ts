// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.combat.entities.drop
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.entities.combat-proxy
// requires impact.feature.effect.effect-steps
// requires game.feature.combat.combat-sweep

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace SET_TEMP_TARGET {
        interface Settings {
          kind:
            | 'PLAYER'
            | 'PARTY_0'
            | 'PARTY_1'
            | 'COLLAB_ENTITY'
            | 'COLLAB_LABELED_ENTITY'
            | 'CLOSEST_ENEMY'
            | 'GUARDED_ATTACKER'
            | 'FIRST_HIT'
            | 'PROXY_OWNER'
            | 'ENEMY_OWNER'
            | 'ENEMY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC'
            | 'ACTION_PROXY'
            | 'PROXY'
            | 'PROXY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC_ACTION_PROXY'
            | 'NAMED_ENTITY'
            | 'ATTRIB_ENTITY'
            | 'THREAT'
            | 'ENTITY_VIA_ID'
            | 'PART_TARGET_ROOT';
          key: string;
        }

        type TargetFunction = (combatant: sc.BasicCombatant, key?: string) => sc.BasicCombatant;
      }
      interface SET_TEMP_TARGET extends ig.ActionStepBase {
        kind: SET_TEMP_TARGET.TargetFunction;
      }
      interface SET_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_TEMP_TARGET> {
        new (settings: SET_TEMP_TARGET.Settings): SET_TEMP_TARGET;
      }
      var SET_TEMP_TARGET: SET_TEMP_TARGET_CONSTRUCTOR;

      namespace SET_CLOSE_TEMP_TARGET {
        interface Settings {
          searchType?: string;
          distance?: number;
          ignoreCurrentTarget?: boolean;
          prevHitBehavior?: string;
        }

        interface SearchType {
          angle: number;
          radius: number;
          facePriority?: boolean;
        }
      }
      interface SET_CLOSE_TEMP_TARGET extends ig.ActionStepBase {
        searchType: SET_CLOSE_TEMP_TARGET.SearchType;
      }
      interface SET_CLOSE_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_CLOSE_TEMP_TARGET> {
        new (settings: SET_CLOSE_TEMP_TARGET.Settings): SET_CLOSE_TEMP_TARGET;
      }
      var SET_CLOSE_TEMP_TARGET: SET_CLOSE_TEMP_TARGET_CONSTRUCTOR;

      type TargetFunction = (entity: ig.ENTITY.Combatant) => ig.ENTITY.Combatant | null;

      namespace ADD_ACTION_BUFF {
        interface Settings {
          target: string;
          stats: string[];
          name?: string;
          hacked?: boolean;
        }
      }
      interface ADD_ACTION_BUFF extends ig.ActionStepBase {
        target: TargetFunction;
        stats: string[];
        name?: string;
        hacked?: boolean;
      }
      interface ADD_ACTION_BUFF_CONSTRUCTOR extends ImpactClass<ADD_ACTION_BUFF> {
        new (settings: ADD_ACTION_BUFF.Settings): ADD_ACTION_BUFF;
      }
      var ADD_ACTION_BUFF: ADD_ACTION_BUFF_CONSTRUCTOR;
    }
  }
}
