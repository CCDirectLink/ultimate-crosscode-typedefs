// requires game.feature.combat.combat
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace EnemyCounter {
      interface Settings extends ig.Entity.Settings {
        enemyGroup: string;
        enemyCount: number;
        preVariable?: string;
        postVariable?: string;
        countVariable?: string;
        shuffleCondition?: string;
      }
    }
    interface EnemyCounter extends ig.AnimatedEntity {
      enemyGroup: string;
      enemyCount: number;
      preCount: number;
      postCount: number;
      preVariable: string;
      postVariable: string;
      done: boolean;
      shuffleCondition: ig.VarCondition;
      timer: number;
      MAX_FLASH_TIME: number;
      sounds: { count: ig.Sound; done: ig.Sound };
      effects: { sheet: ig.EffectSheet; hideHandle: ig.ENTITY.Effect };

      decreaseCount(this: this): void;
    }
    interface EnemyCounterConstructor extends ImpactClass<EnemyCounter> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.EnemyCounter.Settings,
      ): EnemyCounter;
    }
    var EnemyCounter: EnemyCounterConstructor;
  }
}
