// requires impact.base.entity
// requires impact.feature.base.entities.object-layer-view

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace OLPlatform {
                interface Settings { }
            }
            interface OLPlatform extends ig.Entity { }
            interface OLPlatformConstructor extends ImpactClass<OLPlatform> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.OLPlatform.Settings): OLPlatform
            }
            var OLPlatform: OLPlatformConstructor
        }
    }
}
