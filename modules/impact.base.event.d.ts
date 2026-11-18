// requires impact.base.steps

export {};

declare global {
  namespace ig {
    enum EventRunType {
      INTERRUPTABLE = 0,
      PARALLEL = 1,
      BLOCKING = 2,
    }

    interface EventManager extends ig.Class {
      runningEventCalls: ig.EventCall[];
      blockingEventCall: Nullable<ig.EventCall>;
      blockedEventCallQueue: ig.EventCall[];

      callEvent(
        this: this,
        event: ig.Event,
        runType: ig.EventRunType,
        onStart?: Nullable<() => void>,
        onEnd?: Nullable<() => void>,
        input?: Nullable<ig.EventCall.Input>,
        callEntity?: ig.Entity,
        data?: unknown,
      ): ig.EventCall;
      getBlockingEventCall(this: this): ig.EventCall;
      getBlockingEventCallHint(this: this, hint: string): Nullable<boolean>;
      isInterruptible(this: this): boolean;
      update(this: this): void;
      clearQueue(this: this): void;
      clear(this: this): void;
      _startEventCall(this: this, event: ig.EventCall): void;
      _endEventCall(this: this, event: ig.EventCall): void;
    }
    interface EventManagerConstructor extends ImpactClass<EventManager> {
      new (): EventManager;
    }
    let EventManager: EventManagerConstructor;

    namespace EventCall {
      interface StackEntry {
        event: ig.Event;
        currentStep: Nullable<ig.EventStepBase>;
        stepData: Record<any, any>;
        vars: ig.Event.Vars;
      }

      interface EventAttached {
        onEventEndDetach(this: this, eventCall: ig.EventCall): void;
      }

      type Input = Record<string, any>;
    }
    interface EventCall extends ig.Class {
      runType: ig.EventRunType;
      done: boolean;
      blocked: boolean;
      stack: ig.EventCall.StackEntry[];
      eventAttached: ig.EventCall.EventAttached[];
      pauseParallel: boolean;
      onStart?: Nullable<() => void>;
      onEnd?: Nullable<() => void>;
      callEntity?: ig.Entity;
      data?: unknown;

      hasHint(this: this, hint: string): boolean;
      callInlineEvent(
        this: this,
        event: ig.Event,
        input: ig.EventCall.Input,
      ): ig.EventCall.StackEntry;
      addEventAttached(this: this, eventAttached: ig.EventCall.EventAttached): void;
      setDone(this: this): void;
      isBlocked(this: this): boolean;
      isRunning(this: this): boolean;
      performStep(this: this, stackEntry: ig.EventCall.StackEntry): ig.EventCall.StackEntry;
      update(this: this): boolean;
    }
    interface EventCallConstructor extends ImpactClass<EventCall> {
      new (
        event: ig.Event,
        input: ig.EventCall.Input | undefined,
        runType: ig.EventRunType,
        onStart?: Nullable<() => void>,
        onEnd?: Nullable<() => void>,
        callEntity?: ig.Entity,
        data?: unknown,
      ): ig.EventCall;
    }
    var EventCall: EventCallConstructor;

    namespace EventStepBase {
      type Settings = {
        [TYPE in keyof typeof ig.EVENT_STEP]: {
          type: TYPE;
        } & ConstructorParameters<(typeof ig.EVENT_STEP)[TYPE]>[0];
      }[keyof typeof ig.EVENT_STEP];
    }
    interface EventStepBase extends ig.StepBase {
      _nextStep: Nullable<ig.EventStepBase>;
      branches: Record<string, ig.EventStepBase> | null | undefined;

      start(this: this, data?: unknown, eventCall?: ig.EventCall): void;
      run(this: this, data?: unknown): boolean;
      getNext(this: this, data?: unknown): Nullable<ig.EventStepBase>;
      getInlineEvent?(this: this): ig.Event;
      getInlineEventInput?(this: this): ig.EventCall.Input;
    }
    interface EventStepBaseConstructor extends ImpactClass<EventStepBase> {}
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}

    namespace Event {
      /* incomplete */
      type InputSignature = Record<
        string,
        {
          _type:
            | 'StringExpression'
            | 'String'
            | 'BooleanExpression'
            | 'Boolean'
            | 'NumberExpression'
            | 'Number'
            | 'Vec2'
            | 'Vec3'
            | 'VarName'
            | 'Entity'
            | 'LangLabel';
        }
      >;

      interface Settings {
        name?: string;
        input?: ig.Event.InputSignature;
        steps: ig.EventStepBase.Settings[];
      }

      interface VarObject {
        indirect?: string;
        varName?: string;
      }

      type VarExpression<T = ig.VarValue> = T | VarObject;

      type VariableExpression = string | { indirect?: string };
      type NumberExpression = VarExpression<number>;
      type BooleanExpression = VarExpression<boolean>;
      type StringExpression = VarExpression<string>;

      interface Vec2ExpressionVarObject extends VarObject {}
      type Vec2Expression = Vec2 | Vec2ExpressionVarObject;

      interface Vec3ExpressionVarObject extends VarObject {}
      type Vec3Expression = (Vec2 | Vec3ExpressionVarObject) & {
        z?: number;
        lvl?: Nullable<number | string>;
      };

      type NumberVary = number | { base: number; vary?: number };

      type GetEntity =
        | ig.Entity
        | {
            player?: boolean;
            self?: boolean;
            name?: string;
            varName?: string;
            party?: string;
          };

      type Vars = Record<string, any>;
    }
    interface Event extends ig.Class {
      name: string;
      rootStep: ig.EventStepBase;
      labeledSteps: Record<string, ig.EventStepBase>;
      hints: string[];
      /* not complete */
      inputSignature: ig.Event.InputSignature;

      addHint(this: this, hint: string): void;
      hasHint(this: this, hint: string): void;
      clearCached(this: this): void;
      setupInput(this: this, input: ig.EventCall.Input): ig.Event.Vars;
    }
    interface EventConstructor extends ImpactClass<Event> {
      new (settings: ig.Event.Settings): Event;

      getNumberVary(numberVary: Nullable<ig.Event.NumberVary> | undefined): number;
      getEntity(
        entity: Nullable<ig.Event.GetEntity> | undefined,
        eventCall?: ig.EventCall,
      ): Nullable<ig.Entity>;
      registerEntityFetchType(
        name: string,
        fetchFunction: (obj: unknown) => Nullable<ig.Entity> | undefined,
        wmInfo?: { _type: string; _info: string },
      ): void;
      getVec2(input: Nullable<ig.Event.Vec2Expression> | undefined, dest: Vec2): Vec2;
      getVec3(input: Nullable<ig.Event.Vec3Expression> | undefined, dest: Vec3): Vec3;
      getVarName(varName: Nullable<ig.Event.VariableExpression> | undefined): string | null;
      getExpressionValue<T>(expression: Nullable<ig.Event.VarExpression<T>> | undefined): T;
    }
    var Event: EventConstructor;
  }
}
