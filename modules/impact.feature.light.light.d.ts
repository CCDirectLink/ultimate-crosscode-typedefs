// requires impact.base.game
// requires game.config

export {};

declare global {
  namespace ig {
    enum LIGHT_SIZE {
      XXXXL = 1,
      XXXL = 2,
      XXL = 3,
      XL = 4,
      L = 5,
      M = 6,
      S = 7,
      XS = 8,
      NONE = 9,
    }
    interface LightMetric {
      x: number;
      y: number;
      w: number;
      h: number;
    }
    let LIGHT_METRIC: Record<ig.LIGHT_SIZE, LightMetric>;

    interface LightHandle extends ig.Class, ig.Entity.Attachable, sc.Combat.ActionAttached {
      targetEntity: ig.Entity;
      lastPos: Vec3;
      size: ig.LIGHT_SIZE;
      fadeIn: number;
      fadeOut: number;
      duration: number;
      maxAlpha: number;
      glow: boolean;
      timer: number;
      offset?: Nullable<Vec3>;

      setOffset(this: this, x: number, y: number, z: number): void;
      stop(this: this): void;
      update(this: this): void;
      draw(this: this, baseAlpha: number, sizeOffset: number): void;
    }
    interface LightHandleConstructor extends ImpactClass<LightHandle> {
      new(
        entity: ig.Entity,
        size?: ig.LIGHT_SIZE,
        fadeIn?: Nullable<number>,
        fadeOut?: Nullable<number>,
        duration?: Nullable<number>,
        maxAlpha?: Nullable<number>,
        glow?: Nullable<boolean>
      ): LightHandle;
    }
    let LightHandle: LightHandleConstructor;

    interface DarknessHandle extends ig.Class {}
    interface DarknessHandleConstructor extends ImpactClass<DarknessHandle> {
      new (useActualTick: boolean): DarknessHandle;
    }
    let DarknessHandle: DarknessHandleConstructor;

    interface ScreenFlashHandle extends ig.Class {}
    interface ScreenFlashHandleConstructor extends ImpactClass<ScreenFlashHandle> {}
    let ScreenFlashHandle: ScreenFlashHandleConstructor;
  
    interface GlowColor extends ig.Class {}
    interface GlowColorConstructor extends ImpactClass<GlowColor> {}
    let GlowColor: GlowColorConstructor;

    interface CondLights extends ig.Class {}
    interface CondLightsConstructor extends ImpactClass<CondLights> {}
    let CondLights: CondLightsConstructor;

    namespace Light {
      interface ShadowProvider {
        shadowOrder: number;
      }
    }
    interface Light extends ig.GameAddon {
      addDarknessHandle(this: this, darknessHandle: ig.DarknessHandle): void;
      removeDarknessHandle(this: this, darknessHandle: ig.DarknessHandle): void;
      addScreenFlashHandle(this: this, screenFlashHandle: ig.ScreenFlashHandle): void;
      removeScreenFlashHandle(this: this, screenFlashHandle: ig.ScreenFlashHandle): void;
      addLightHandle(this: this, lightHandle: ig.LightHandle): void;
      addShadowProvider(this: this, shadowProvider: ig.Light.ShadowProvider): void;
      removeShadowProvider(this: this, shadowProvider: ig.Light.ShadowProvider): void;
    }
    interface LightConstructor extends ImpactClass<Light> {}
    let Light: LightConstructor;
    let light: ig.Light;
  }
}
