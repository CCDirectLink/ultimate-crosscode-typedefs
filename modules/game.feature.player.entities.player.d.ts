// requires impact.feature.env-particles.env-particles
// requires game.feature.combat.entities.ball
// requires game.feature.player.entities.player-base
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.entities.player-pet
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace ig.ENTITY {
    namespace Player {
      interface PlayerState {
        startState: number;
        guarding: boolean;
        applyCharge: boolean;
        isCharging: boolean;
        redashReady: boolean;
      }

      interface PlayerInput {
        thrown: boolean;
        melee: boolean;
        aim: boolean;
        autoThrow: boolean;
        attack: boolean;
        guard: boolean;
        charge: boolean;
        dashX: number;
        dashY: number;
        switchMode: boolean;
        relativeVel: number;
        moveDir: Vec2;
      }

      namespace Charging {
        interface Type {
          actionKey: string;
        }
      }

      interface Charging {
        time: number;
        cancelTime: number;
        swapped: boolean;
        maxLevel: number;
        block: number;
        prefDir: Vec2;
        type: Charging.Type;
        executeLevel: number;
      }

      interface ActionKey {
        actionKey: 'ATTACK_SPECIAL' | 'THROW_SPECIAL' | 'GUARD_SPECIAL' | 'DASH_SPECIAL';
      }

      interface Gui {
        crosshair: ig.ENTITY.Crosshair
      }
    }
    interface Player extends sc.PlayerBaseEntity {
      proxies: Record<string, sc.ProxySpawnerBase>;
      perfectGuardCooldown: number;
      dashPerfect: boolean;
      stunEscapeDash: boolean;
      regenFactor: number;
      model: sc.PlayerModel;
      attackCounter: number;
      dashCount: number;
      dashAttackCount: number;
      maxDash: number;
      jumpPoint: Vec2;
      jumpForwardDir: Vec2;
      gui: Player.Gui;
      dashTimer: number;
      dashBlock: number;
      charging: ig.ENTITY.Player.Charging;
      isPlayer: true;
      
      updateSkinAura(this: this): void;
      updateModelStats(this: this, a: boolean): void;
      showChargeEffect(this: this, level: number): void;
      getMaxChargeLevel(this: this, actionKey: Player.ActionKey): 0 | 1 | 2 | 3;
      getChargeAction(this: this, chargeType: ig.ENTITY.Player.Charging.Type, level: number): string;
      gatherInput(this: this): ig.ENTITY.Player.PlayerInput;
      handleStateStart(
        this: this,
        playerState: ig.ENTITY.Player.PlayerState,
        inputState: ig.ENTITY.Player.PlayerInput,
      ): void;
      onPerfectDash(this: this): void;
      onHeal(this: this, healInfo: sc.HealInfo.Settings | sc.HealInfo, amount: number): void
    }
    interface PlayerConstructor extends ImpactClass<Player> {}
    var Player: PlayerConstructor;
  }
}
