export {};

declare global {
  namespace sc {
    interface PlayerLevelNotifier extends ig.Class {
      levelUpSound: ig.Sound;

      runLevelUpScene(
        this: this,
        player: ig.ENTITY.Player,
        model: sc.PlayerModel,
        isEventParallel?: boolean,
      ): void;
      onLevelUpEventStart(this: this): void;
      onLevelUpEventEnd(this: this): void;
      getLevelUpEvent(this: this, player: ig.ENTITY.Player, model: sc.PlayerModel): ig.Event;
    }
    interface PlayerLevelNotifierConstructor extends ImpactClass<PlayerLevelNotifier> {
      new (): PlayerLevelNotifier;
    }
    var PlayerLevelNotifier: PlayerLevelNotifierConstructor;
  }
}
