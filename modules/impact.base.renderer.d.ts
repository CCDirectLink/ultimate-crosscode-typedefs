// requires impact.base.image
// requires impact.base.sprite

export { }

declare global {
    namespace ig {
        interface Renderer2d extends ig.Class {
            drawPostLayerSprites(this: this): void
        }
        interface Renderer2dConstructor extends ImpactClass<Renderer2d> {
            new(): Renderer2d
        }
        var Renderer2d: Renderer2dConstructor
    }
}
