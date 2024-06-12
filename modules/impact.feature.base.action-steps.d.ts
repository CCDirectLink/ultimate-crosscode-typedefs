// requires impact.base.action
// requires impact.base.actor-entity

export {};

declare global {
  namespace ig.ACTION_STEP {
    namespace SET_SHADOW {
      interface Settings {
        size: number;
        shadowType?: ig.COLL_SHADOW_TYPE;
        shadowScaleY?: number;
      }
    }
    interface SET_SHADOW extends ig.EffectStepBase {
      size: number;
      shadowType?: ig.COLL_SHADOW_TYPE;
      shadowScaleY?: number;
    }
    interface SET_SHADOW_CONSTRUCTOR extends ImpactClass<SET_SHADOW> {
      new (settings: SET_SHADOW.Settings): SET_SHADOW;
    }
    let SET_SHADOW: SET_SHADOW_CONSTRUCTOR;

    interface PLAY_SOUND extends ig.ActionStepBase {
      sound: ig.Sound;
      global: boolean;
      loop: boolean;
      settings: { speed: number; fadeDuration: number };
    }
    interface PLAY_SOUNDConstructor extends ImpactClass<PLAY_SOUND> {
      new (settings: {
        sound: string;
        volume?: number;
        variance?: number;
        global?: boolean;
        loop?: boolean;
        radius?: number;
        speedVar?: number;
        speedVarFactor?: number;
        fadeDuration?: number;
      }): PLAY_SOUND;
    }
    var PLAY_SOUND: PLAY_SOUNDConstructor;
  }
}
