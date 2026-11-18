// requires impact.base.entity

export {};

declare global {
  namespace sc {
    //note: not an impact class!
    interface Cutscene {
      getLookAtEventSteps(
        eventSteps: ig.EventStepBase.Settings[],
        entity: ig.Entity,
      ): ig.EventStepBase.Settings[];
      _getLookAction(actor: ig.Event.GetEntity, entity: ig.Entity): ig.EventCall;
      startCutscene(
        event: ig.Event,
        input?: Nullable<ig.EventCall.Input>,
        callEntity?: ig.Entity,
      ): ig.EventCall;
      startCombatCutscene(
        event: ig.Event,
        input?: Nullable<ig.EventCall.Input>,
        callEntity?: ig.Entity,
      ): ig.EventCall;
      onEventStart(): void;
      onCombatEventStart(): void;
      onEventEnd(): void;
      startMenuEvent(event: ig.Event, input?: Nullable<ig.EventCall.Input>): ig.EventCall;
      onMenuEventStart(): void;
      onMenuEventEnd(): void;
      startAutoControlEvent(
        event: ig.Event,
        input?: Nullable<ig.EventCall.Input>,
        callEntity?: ig.Entity,
      ): ig.EventCall;
      onAutoControlStart(): void;
      onAutoControlEnd(): void;
      startEvent(
        type: ig.EVENT_TYPE,
        event: ig.Event,
        input?: Nullable<ig.EventCall.Input>,
        callEntity?: ig.Entity,
      ): ig.EventCall;
    }
    let Cutscene: Cutscene;
  }

  namespace ig {
    enum EVENT_TYPE {
      PARALLEL = 1,
      CUTSCENE = 2,
      INTERRUPTABLE = 3,
      AUTO_CONTROL = 4,
      COMBAT_CUTSCENE = 5,
    }

    enum EVENT_TRIGGER_TYPE {
      ALWAYS = 0,
      ONCE_PER_ENTRY = 1,
      ONCE = 2,
    }
    namespace ENTITY {
      namespace EventTrigger {
        interface Settings extends ig.Entity.Settings {
          eventType?: keyof typeof ig.EVENT_TYPE;
          startCondition?: string;
          endCondition?: string;
          triggerType?: keyof typeof ig.EVENT_TRIGGER_TYPE;
          loadCondition?: string;
          event?: any[];
        }
      }
      interface EventTrigger extends ig.Entity {
        eventType: ig.EVENT_TYPE;
        startCondition: ig.VarCondition;
        endCondition: ig.VarCondition;
        event: ig.Event;
        eventCall: Nullable<ig.EventCall>;
        triggerVar: string;
        _wm: ig.Config;

        varsChanged(this: this): void;
      }
      interface EventTriggerConstructor extends ImpactClass<EventTrigger> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.EventTrigger.Settings,
        ): EventTrigger;
      }
      var EventTrigger: EventTriggerConstructor;
    }
  }
}
