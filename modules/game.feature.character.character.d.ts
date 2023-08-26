// requires game.feature.character.abstract-face

export {};

declare global {
  namespace sc {
    interface Character extends ig.JsonLoadable {}
    interface CharacterConstructor extends ImpactClass<Character> {}
    let Character: Character;

    interface CharacterExpression extends ig.Cacheable {}
    interface CharacterExpressionConstructor extends ImpactClass<CharacterExpression> {}
    var CharacterExpression: CharacterExpressionConstructor;
  }
}
