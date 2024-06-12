// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Prop {
        interface Settings extends ig.Entity.Settings {
        }
      }
      interface Prop extends ig.AnimatedEntity {
          terrain: ig.TERRAIN;
          face: Vec2
          propSet: unknown
          propName: string
          propAnim: string
          nudging: {
              active: boolean
              timer: number
              variance: number
              onFall: boolean
          }
          collideSound: ig.Sound
          condAnims: unknown
          touchVar: string
          _triggered: boolean
          shuffleAnims: boolean
          interact: ig.PROP_INTERACT_CLASS
          currentInteract: unknown
          ballKill: { fx?: ig.EffectHandle }
          hideManager?: ig.EntityHideManager
      }
      interface PropConstructor extends ImpactClass<Prop> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Prop.Settings): Prop;
      }
      var Prop: PropConstructor;
    }
  }
}
