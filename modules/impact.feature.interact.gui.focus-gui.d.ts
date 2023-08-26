// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface FocusGui extends ig.GuiElementBase {
      focus: boolean;
      active: boolean;
      keepPressed: boolean;
      pressed: boolean;
      keepMouseFocus: boolean;

      focusGained(this: this): void;
      focusLost(this: this): void;
      invokeButtonPress(this: this): void;
      onButtonPress(this: this): void;
      canPlayFocusSounds(this: this): boolean;
      setPressed(this: this, pressed: boolean): void;
      setActive(this: this, active: boolean): void;
      isSameAs(this: this, other: ig.FocusGui): boolean;      
    }
    interface FocusGuiConstructor extends ImpactClass<FocusGui> {
      new (active?: boolean, keepPressed?: boolean): ig.FocusGui;
    }
    var FocusGui: FocusGuiConstructor;
  }
}
