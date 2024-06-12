// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action

export {};

declare global {
  namespace ig.EVENT_STEP {
    interface PLAY_SOUND extends ig.EventStepBase {
      sound: ig.Sound;
      position: Vec2;
      loop: boolean;
      settings: { offset: number; startTime: number; speed: number };
      name: string;
      speed: null;
    }
    interface PLAY_SOUNDConstructor extends ImpactClass<PLAY_SOUND> {
      new (settings: {
        sound: string;
        volume?: number;
        variance?: number;
        position?: Vec2;
        name?: string;
        loop?: boolean;
        offset?: number;
        startTime?: number;
        speed?: number;
      }): PLAY_SOUND;
    }
    var PLAY_SOUND: PLAY_SOUNDConstructor;
  }
}
