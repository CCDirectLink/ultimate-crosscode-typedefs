// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface KeyBinderGui extends ig.ColorGui {
      box: sc.BlackWhiteBox;
      button: sc.ButtonGui;
      back: sc.ButtonGui;

      show(
        this: this,
        finishCallback: (keyCode: number | null, isAlternative: boolean, unbind: boolean) => void,
        forAction: string,
        isAlternative: boolean,
      ): void;
    }
    interface KeyBinderGuiConstructor extends ImpactClass<KeyBinderGui> {
      new (): KeyBinderGui;
    }
    var KeyBinderGui: KeyBinderGuiConstructor;

    interface OptionFocusSlider extends ig.FocusGui {
      snap: boolean;
      clickSound: ig.Sound;
      _hasKeyboardFocus: boolean;
      changeCallback: (value: number) => void

      setPreferredThumbSize(this: this, width: number, height: number): void;
      setSize(this: this, x: number, y: number): void;
      setSize(this: this, x: number, y: number, sliderHeight: number): void;
      setValue(this: this, value: number): void;
      setMinMaxValue(this: this, min: number, max: number): void;
    }
    interface OptionFocusSliderConstructor extends ImpactClass<OptionFocusSlider> {
      new (changeCallback: (value: number) => void, snap?: boolean, fill?: boolean): OptionFocusSlider;
    }
    var OptionFocusSlider: OptionFocusSliderConstructor
  }
}
