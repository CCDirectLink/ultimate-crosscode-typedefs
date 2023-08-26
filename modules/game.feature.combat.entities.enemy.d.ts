// requires game.feature.combat.entities.combatant
// requires game.feature.combat.model.enemy-type
// requires game.feature.combat.model.enemy-annotation
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace sc {
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
      enemyType: sc.EnemyType;
      currentState: string;
      boosterState: sc.ENEMY_BOOSTER_STATE;
      level: Enemy.Level;

      setLevelOverride(this: this, newLevel?: Optional<number>): void;
      getLevel(this: this): number;
      changeState(this: this, state: string, immediate?: Optional<boolean>): void;
    }
    interface EnemyConstructor extends ImpactClass<Enemy> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Enemy.Settings): ig.ENTITY.Enemy
    }
    var Enemy: EnemyConstructor;
  }
}
