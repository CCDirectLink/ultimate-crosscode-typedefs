// requires impact.base.game
// requires game.config
// requires game.features
// requires game.beta

export {};

declare global {
  namespace sc {
    enum START_MODE {
      STORY = 0,
      GRINDING = 1,
      PUZZLE = 2,
    }

    interface CrossCode extends ig.Game {
      effects: Record<"dust" | "teleport" | "npc" | "death" | "speedlines" | "drops", ig.EffectSheet>;

      onGameLoopStart(this: this): void;
      addTeleportMessage(this: this, message: string): void;
      start(this: this, startMode?: sc.START_MODE, transitionTime?: number): void;
    }
    interface CrossCodeConstructor extends ImpactClass<CrossCode> {}
    var CrossCode: CrossCodeConstructor;
  }

  namespace ig {
    var game: sc.CrossCode;
  }

  function startCrossCode(): void;
}
