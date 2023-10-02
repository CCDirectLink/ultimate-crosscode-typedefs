// requires impact.base.timer
// requires impact.base.image
// requires impact.base.vars

export {};

declare global {
  namespace ig {
    interface System extends ig.Class {
      width: number;
      height: number;
      contextWidth: number;
      contextHeight: number;
      realWidth: number;
      realHeight: number;
      screenWidth: number;
      screenHeight: number;
      zoom: number;
      scale: number;
      contextScale: number;
      systemFontScale: number;
      tick: number;
      actualTick: number;
      ingameTick: number;
      context: CanvasRenderingContext2D;

      getScreenFromMapPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      getMapFromScreenPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      setFocusLost(this: this): void;
      regainFocus(this: this): void;
      addFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      removeFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      getBufferContext(this: this, buffer: HTMLCanvasElement): CanvasRenderingContext2D;
      error(this: this, error: Error): never;
      hasFocusLost(this: this): boolean;
    }
    interface SystemConstructor extends ImpactClass<System> {}
    var System: SystemConstructor;
    var system: ig.System;
  }
}
