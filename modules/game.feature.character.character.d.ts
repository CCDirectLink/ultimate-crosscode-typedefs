// requires game.feature.character.abstract-face

export {};

declare global {
  namespace sc {
    namespace Character {
      interface Data {
        name: ig.LangLabel
        size: Vec3
        animSheet: string
        walkAnimSet: {
          normal: Record<string, string>
        }
        shadow: number
        configs: {
          normal: {
            walkAnims: string
          }
        }
        face: {
          subImages: Record<string, string>
          width: number
          height: number
          centerX: number
          centerY: number
          src: string
          parts: Record<string, {
            srcX: number
            srcY: number
            width: number
            height: number
            destX: number
            destY: number
            subX?: number
            subY?: number
            img?: string
          }>[]
          expressions: Record<string, {
            faces: string[][]
            time?: number
            anim?: number[]
            repeat?: number
          }>
        }
      }
    }
    interface Character extends ig.JsonLoadable {
      cacheType: 'Character'
      data: sc.Character.Data
      name: string
      faceImage: ig.Image
    }
    interface CharacterConstructor extends ImpactClass<Character> {}
    let Character: Character;

    interface CharacterExpression extends ig.Cacheable {
      cacheType: 'CHAR_EXPRESSION'
      character: sc.Character
      expression: string
      expressionImages: Record<string, ig.Image>
    }
    interface CharacterExpressionConstructor extends ImpactClass<CharacterExpression> {
      new (character: string, expression: string): CharacterExpression
    }
    var CharacterExpression: CharacterExpressionConstructor;
  }
}
