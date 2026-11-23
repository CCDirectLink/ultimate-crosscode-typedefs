// requires impact.base.loader
// requires impact.base.animation
// requires impact.feature.effect.entities.effect
// requires impact.feature.effect.entities.effect-particle

export {};

declare global {
  namespace ig {
    interface EffectConfig<T = unknown> extends ig.Config<T> {
      _data: T;

      copy(this: this): this;
    }
    interface EffectConfigConstructor<T = unknown> extends ImpactClass<EffectConfig<T>> {
      new (data: T): EffectConfig<T>;
      loadParticleData(
        animSheet: ig.AnimationSheet,
        settings: ig.EffectStepBase.Settings,
        cacheKey: Nullable<string>,
      ): ig.ParticleData;
    }
    var EffectConfig: EffectConfigConstructor;

    interface ParticleData {
      anim: ig.SingleDirAnimationSet;
      followUpAnim?: Nullable<ig.SingleDirAnimationSet>;
      postAnim?: Nullable<ig.SingleDirAnimationSet>;
      state: ig.ParticleState;
      moveWithTarget: number;
      particleDuration: number;
      particleDurVariance: number;
      angleVary: number;
      randFlip: boolean;
      cancelable: boolean;
      light?: ig.LIGHT_SIZE;
    }

    interface ParticleState extends ig.Class {
      initSprite(this: this, sprite: ig.CubeSprite, angle: number, flipX?: boolean): void;
    }
    interface ParticleStateConstructor extends ImpactClass<ParticleState> {}
    var ParticleState: ParticleStateConstructor;

    namespace EffectSheet {
      interface EventCallback {
        onEffectEvent(this: this, effect: ig.ENTITY.Effect): void;
      }

      interface SpawnSettings {
        target2?: Nullable<ig.Entity>;
        target2Point?: Nullable<Vec3>;
        target2Align?: Nullable<ig.ENTITY_ALIGN>;
        target2Offset?: Nullable<Vec3>;
        noMultiGroup?: Nullable<boolean>;
        spriteFilter?: Nullable<number[]>;
        offset?: Nullable<Vec3>;
        rotOffset?: Nullable<Vec2>;
        align?: Nullable<keyof typeof ig.ENTITY_ALIGN | ig.ENTITY_ALIGN>;
        angle?: Nullable<number>;
        flipX?: Nullable<boolean>;
        rotateFace?: Nullable<number>;
        flipLeftFace?: Nullable<boolean>;
        duration?: Nullable<number>;
        group?: Nullable<string>;
        callback?: Nullable<EventCallback>;
      }
    }
    interface EffectSheet extends ig.JsonLoadable {
      animSheet: Nullable<ig.AnimationSheet>;
      faceAnimSheet: Nullable<ig.AnimationSheet>;
      effects: Record<string, ig.Effect>;

      spawnOnTarget(
        this: this,
        name: string,
        target: ig.Entity,
        settings?: Nullable<ig.EffectSheet.SpawnSettings>,
      ): Nullable<ig.ENTITY.Effect>;
      spawnFixed(
        this: this,
        name: string,
        x: number,
        y: number,
        z: number,
        target: ig.Entity,
        settings?: Nullable<ig.EffectSheet.SpawnSettings>,
      ): ig.ENTITY.Effect | null;
    }
    interface EffectSheetConstructor extends ImpactClass<EffectSheet> {
      new (pathOrData: string | unknown): ig.EffectSheet;
      cache: Record<string, ig.EffectSheet>;
    }
    var EffectSheet: EffectSheetConstructor;

    interface Effect extends ig.Class {
      id: string;
      steps: ig.EffectStepBase[];
      loopStartIdx: number;
      loopStartTime: number;
      loopEndIdx: number;
      loopEndTime: number;
      maxTime: number;

      clearCached(this: this): void;
      update(this: this, effect: ig.ENTITY.Effect): void;
      isEnding(this: this, effect: ig.ENTITY.Effect): boolean;
      isDone(this: this, effect: ig.ENTITY.Effect): boolean;
      getRemainingTime(this: this, effect: ig.ENTITY.Effect): number;
    }
    interface EffectConstructor extends ImpactClass<Effect> {
      new (sheet: ig.EffectSheet, effectName: string, data: unknown[]): Effect;
    }
    var Effect: EffectConstructor;

    namespace EffectStepBase {
      interface Settings {
        anim: string;
        followUpAnim?: Nullable<string>;
        postAnim?: Nullable<string>;
        pAlpha?: Nullable<number>;
        pScale?: Nullable<number>;
        pRotate?: Nullable<number>;
        angleVary?: Nullable<number>;
        randFlip?: Nullable<boolean>;
        moveWithTarget?: Nullable<number>;
        pLight?: keyof typeof ig.LIGHT_SIZE | null;
        particleDuration?: Nullable<number>;
        particleDurVariance?: Nullable<number>;
        cancelable?: Nullable<boolean>;
      }
    }
    interface EffectStepBase extends ig.StepBase {
      _nextStep: Nullable<ig.EffectStepBase>;
      branches: Nullable<Record<string, ig.EffectStepBase>>;

      start(this: this, entity: ig.ENTITY.Effect): unknown | void;
      run(this: this, entity: ig.ENTITY.Effect): boolean;
      getNext(this: this, entity: ig.ENTITY.Effect): ig.EffectStepBase;
      getDuration(): number;
      update?(
        this: this,
        entity: ig.ENTITY.Effect,
        lastParticle: number,
        currentParticle: number,
        data: unknown,
      ): void;
      finish?(this: this, entity: ig.ENTITY.Effect, data: unknown): void;
      cancel?(this: this, entity: ig.ENTITY.Effect, timer: number, data: unknown): void;
    }
    interface EffectStepBaseConstructor extends ImpactClass<EffectStepBase> {}
    var EffectStepBase: EffectStepBaseConstructor;

    namespace EffectHandle {
      interface Settings {
        sheet: string;
        name: string;
      }
    }
    interface EffectHandle extends ig.Class {
      effectSheet: ig.EffectSheet;
      name: string;
      externalSheet: boolean;

      clearCached(this: this): void;
      spawnOnTarget(
        this: this,
        target: ig.Entity,
        settings?: Nullable<ig.EffectSheet.SpawnSettings>,
      ): Nullable<ig.ENTITY.Effect>;
      spawnFixed(
        this: this,
        x: number,
        y: number,
        z: number,
        target: ig.Entity,
        settings?: Nullable<ig.EffectSheet.SpawnSettings>,
      ): ig.ENTITY.Effect;
    }
    interface EffectHandleConstructor extends ImpactClass<EffectHandle> {
      new (settings: EffectHandle.Settings): ig.EffectHandle;
    }
    let EffectHandle: EffectHandleConstructor;

    interface EffectRunnerBase extends ig.Class {
      step: ig.EffectStepBase;
      data: unknown;
      duration: number;
      _timer: number;

      update(this: this, effect: ig.ENTITY.Effect): boolean;
      cancel(this: this, effect: ig.ENTITY.Effect, checkDuration?: boolean): boolean;
    }

    interface EffectTimeRunner extends EffectRunnerBase {}
    interface EffectTimeRunnerConstructor extends ImpactClass<EffectTimeRunner> {
      new (step: ig.EffectStepBase, data: unknown): EffectTimeRunner;
    }
    var EffectTimeRunner: EffectTimeRunnerConstructor;

    interface EffectParticleRunner extends EffectRunnerBase {
      totalParticles: number;
      currentParticle: number;
    }
    interface EffectParticleRunnerConstructor extends ImpactClass<EffectParticleRunner> {
      new (step: ig.EffectStepBase, data: unknown): EffectParticleRunner;
    }
    var EffectParticleRunner: EffectParticleRunnerConstructor;
  }
}
