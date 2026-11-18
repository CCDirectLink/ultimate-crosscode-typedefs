// requires game.feature.common-event.common-event
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace TRIGGER_COMMON_EVENTS {
        interface Settings {
          commonEventType: keyof typeof sc.COMMON_EVENT_TYPE;
        }
      }
      interface TRIGGER_COMMON_EVENTS extends ig.EventStepBase {
        commonEventType: keyof typeof sc.COMMON_EVENT_TYPE;
        _wm: ig.Config;
      }
      interface TRIGGER_COMMON_EVENTS_CONSTRUCTOR extends ImpactClass<TRIGGER_COMMON_EVENTS> {
        new (settings: ig.EVENT_STEP.TRIGGER_COMMON_EVENTS.Settings): TRIGGER_COMMON_EVENTS;
      }
      var TRIGGER_COMMON_EVENTS: TRIGGER_COMMON_EVENTS_CONSTRUCTOR;

      namespace CALL_EVENT {
        interface Settings {
          callEvent: string;
        }
      }
      interface CALL_EVENT extends ig.EventStepBase {
        callEvent: string;
        _wm: ig.Config;
      }
      interface CALL_EVENT_CONSTRUCTOR extends ImpactClass<CALL_EVENT> {
        new (settings: ig.EVENT_STEP.CALL_EVENT.Settings): CALL_EVENT;
      }
      var CALL_EVENT: CALL_EVENT_CONSTRUCTOR;

      namespace CALL_EVENT_INLINE {
        interface Settings {
          callEvent: string;
        }
      }
      interface CALL_EVENT_INLINE extends ig.EventStepBase {
        callEvent: string;
        _wm: ig.Config;

        getInlineEvent(this: this): ig.Event;
        getInlineEventInput(this: this): ig.EventCall.Input;
      }
      interface CALL_EVENT_INLINE_CONSTRUCTOR extends ImpactClass<CALL_EVENT_INLINE> {
        new (settings: ig.EVENT_STEP.CALL_EVENT_INLINE.Settings): CALL_EVENT_INLINE;
      }
      var CALL_EVENT_INLINE: CALL_EVENT_INLINE_CONSTRUCTOR;

      namespace CANCEL_COMMON_EVENTS {
        interface Settings {
          commonEventType: keyof typeof sc.COMMON_EVENT_TYPE;
        }
      }
      interface CANCEL_COMMON_EVENTS extends ig.EventStepBase {
        _wm: ig.Config;
        commonEventType: keyof typeof sc.COMMON_EVENT_TYPE;
      }
      interface CANCEL_COMMON_EVENTS_CONSTRUCTOR extends ImpactClass<CANCEL_COMMON_EVENTS> {
        new (settings: ig.EVENT_STEP.CANCEL_COMMON_EVENTS.Settings): CANCEL_COMMON_EVENTS;
      }
      var CANCEL_COMMON_EVENTS: CANCEL_COMMON_EVENTS_CONSTRUCTOR;
    }
  }
}
