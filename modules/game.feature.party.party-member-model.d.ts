// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    enum PARTY_MEMBER_MSG {
      ELEMENT_MODE_CHANGE = 1,
      //skipping 2 is intentional
      EXP_CHANGE = 3,
      LEVEL_CHANGE = 4,
      STATS_CHANGED = 5
    }
    namespace PartyMemberModel {
      interface Healing {
        sandwich: number[];
        cooldown: number;
        needRestock: boolean;
      }
    }
    interface PartyMemberModel extends ig.Class, sc.Model {
      config: sc.PlayerConfig;
      params: sc.CombatParams;
      elementConfigs: Record<sc.ELEMENT, sc.PlayerSubConfig>;
      healing: PartyMemberModel.Healing;
      currentElementMode: sc.ELEMENT;

      getHeadIdx(this: this): number;
      updateStats(this: this): void;
      revive(this: this): void;
      setTemporary(this: this, a: boolean): void;
      setNoDie(this: this, a: boolean): void;
      update(this: this): void;
      reset(this: this): void;
    }
    interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {
      new (name: string): PartyMemberModel;
    }
    var PartyMemberModel: PartyMemberModelConstructor;
  }
}
