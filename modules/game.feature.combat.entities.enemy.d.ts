// requires game.feature.combat.entities.combatant
// requires game.feature.combat.model.enemy-type
// requires game.feature.combat.model.enemy-annotation
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace sc {
    enum ENEMY_HP_BAR {
      AUTO = 0,
      VISIBLE = 1,
      HIDDEN = 2
    }
    enum ENEMY_BOOSTER_STATE {
      NONE = 0,
      BOOSTABLE = 1,
      BOOSTED = 2,
    }
  }

  namespace ig.ENTITY {
    namespace Enemy {
      interface Settings extends ig.Entity.Settings {
        enemyInfo: sc.EnemyInfo.Settings;
      }

      interface Level {
        override: number | null;
        setting: number | null;
      }
    }

    interface Enemy extends ig.ENTITY.Combatant {
      enemyName: string
      enemyType: sc.EnemyType;
      enemyGroup: string
      currentState: string;
      boosterState: sc.ENEMY_BOOSTER_STATE;
      level: Enemy.Level;
      visibility: { analyzable: boolean, hpBar: sc.ENEMY_HP_BAR }

      setLevelOverride(this: this, newLevel?: Nullable<number>): void;
      getLevel(this: this): number;
      changeState(this: this, state: string, immediate?: Nullable<boolean>, switchStateConfig?: boolean): void;
    }
    interface EnemyConstructor extends ImpactClass<Enemy> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Enemy.Settings): ig.ENTITY.Enemy
    }
    var Enemy: EnemyConstructor;
  }
}
