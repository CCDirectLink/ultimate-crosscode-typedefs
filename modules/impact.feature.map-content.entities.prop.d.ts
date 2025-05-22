// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace PropSheet {
      interface Data {
        DOCTYPE: 'PROP_SHEET';
        props: PropData[];
      }
      // not full or complete or 100% correct
      interface PropData {
        name: string;
        terrain: keyof typeof ig.TERRAIN;
        size: Vec3;
        collType: keyof typeof ig.COLLTYPE;
        anims: ig.AnimationSheet.Settings;
        fix?: {
          gfx: string;
          x: number;
          y: number;
          w: number;
          h: number;
          offY?: number;
          shape?: keyof typeof ig.ANIM_SHAPE_TYPE;
          flipX?: number;
        };
      }
    }
    interface PropSheet extends ig.JsonLoadable {
      props: Record<string, ig.PropSheet.PropData>;

      handlePropEntry(this: this, propData: ig.PropSheet.PropData): void;
      getProp(this: this, name: string): ig.PropSheet.PropData;
    }
    interface PropSheetConstructor extends ImpactClass<PropSheet> {
      new (item: string): PropSheet;
    }
    var PropSheet: PropSheetConstructor;

    namespace ENTITY {
      namespace Prop {
        interface Settings extends ig.Entity.Settings {}
      }
      interface Prop extends ig.AnimatedEntity {
        terrain: ig.TERRAIN;
        face: Vec2;
        propSet: unknown;
        propName: string;
        propAnim: string;
        nudging: {
          active: boolean;
          timer: number;
          variance: number;
          onFall: boolean;
        };
        collideSound: ig.Sound;
        condAnims: unknown;
        touchVar: string;
        _triggered: boolean;
        shuffleAnims: boolean;
        interact?: sc.PropInteract;
        currentInteract: unknown;
        ballKill: { fx?: ig.EffectHandle };
        hideManager?: ig.EntityHideManager;
      }
      interface PropConstructor extends ImpactClass<Prop> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Prop.Settings): Prop;
      }
      var Prop: PropConstructor;
    }
  }
}
