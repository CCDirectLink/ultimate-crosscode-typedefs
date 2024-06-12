// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball

export {};

declare global {
  namespace sc {
    var ASSAULT_PROJECTILES: Record<sc.ELEMENT, sc.BallInfo>;

    namespace AssaultTools {
      function spawn(
        entity: ig.ENTITY.Combatant,
        projectileType: keyof typeof sc.ASSAULT_PROJECTILES,
        multi: number,
      ): void;
    }
  }
}
