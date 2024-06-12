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

    interface OptionSlider extends sc.Slider {
      fill: boolean
      focus: boolean
    }
    interface OptionSliderConstructor extends ImpactClass<OptionSlider> {
      new (a: unknown, b: unknown, c: unknown, d: unknown): OptionSlider
    }
    var OptionSlider: OptionSliderConstructor;

    interface OptionFocusSlider extends ig.FocusGui {
      slider: sc.OptionSlider
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

    interface OptionLangPopUp extends ig.BoxGui {
        buttongroup: sc.ButtonGroup
        buttons: Record<sc.LANGUAGE, sc.ButtonGui>
        active: boolean

        createButtons(this: this): void
        show(this: this, anchor: sc.OPTION_GUIS_DEFS.LANGUAGE, callback?: () => void): void
    }
    interface OptionLangPopUpConstructor extends ImpactClass<OptionLangPopUp> {
      new (): OptionLangPopUp;
    }
    var OptionLangPopUp: OptionLangPopUpConstructor;
  }
}
