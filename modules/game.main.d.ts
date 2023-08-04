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
      NEW_GAME_PLUS = 3,
    }

    interface CrossCode extends ig.Game {
      onGameLoopStart(this: this): void;
      start(this: this, startMode?: sc.START_MODE, transitionTime?: number): void;
      transitionEnded(this: this): void;
    }
    interface CrossCodeConstructor extends ImpactClass<CrossCode> {}
    var CrossCode: CrossCodeConstructor;
  }

  namespace ig {
    var game: sc.CrossCode;
  }

  function startCrossCode(): void;
}
