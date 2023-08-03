// requires impact.base.game
// requires impact.feature.interact.press-repeater
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface Control extends ig.Class {
      autoControl: sc.AutoControl;

      moveDir(
        this: this,
        destVec: Vec2,
        lastRelativeVel: number,
        ignoreLastDir?: Optional<number>,
      ): number;
      autoThrown(this: this): boolean;
      menuScrollUp(this: this): boolean;
      menuScrollDown(this: this): boolean;
      getMouseX(this: this): number;
      getMouseY(this: this): number;
      menuHotkeyHelp(this: this): boolean;
      menuHotkeyHelp2(this: this): boolean;
      menuHotkeyHelp3(this: this): boolean;
      menuBack(this: this): boolean;
    }
    interface ControlConstructor extends ImpactClass<Control> {
      new (): Control;
    }
    var Control: ControlConstructor;
    var control: Control;
  }
}
