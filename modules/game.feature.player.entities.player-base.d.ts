// requires game.feature.combat.entities.ball
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption

export {};

declare global {
  namespace sc {
    namespace PlayerBaseEntity {
      interface Guard {
        damage: number;
        timer: number;
        fxSheet: ig.EffectSheet;
        fxHandle: ig.ENTITY.Effect;
        currentKey: string;
      }
    }
    interface PlayerBaseEntity extends ig.ENTITY.Combatant {
      configs: {
        normal: ig.ActorConfig;
        aiming: ig.ActorConfig;
      };
      maxJumpHeight: number;
      guard: PlayerBaseEntity.Guard;

      damageShield(this: this, damage: number): boolean;
    }
    interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {
      new(x: number, y: number, z: number, settings: ig.Entity.Settings): PlayerBaseEntity
    }
    var PlayerBaseEntity: PlayerBaseEntityConstructor;
  }
}
