// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    var BUTTON_DEFAULT_WIDTH: number;
    var BUTTON_SOUND: { [name: string]: ig.Sound };

    namespace ButtonGui {
      interface Type {
        alignXPadding?: number;
        height: number;
      }
    }
    interface ButtonGui extends ig.FocusGui {
      text: sc.TextLike;
      buttonType: sc.ButtonGui.Type;
      textChild: sc.TextGui;
      data?: unknown;
      submitSound: ig.Sound;

      setWidth(this: this, width: number): void;
      setText(this: this, text: sc.TextLike, ignoreWidth?: boolean): void;
      getButtonText(this: this): string;
    }
    interface ButtonGuiConstructor extends ImpactClass<ButtonGui> {
      new (
        text: sc.TextLike,
        width?: number,
        active?: boolean,
        type?: sc.ButtonGui.Type,
        submitSound?: ig.Sound,
        keepPressed?: boolean,
        blockedSound?: ig.Sound,
      ): ButtonGui;
    }
    var ButtonGui: ButtonGuiConstructor;

    interface CheckboxGui extends sc.ButtonGui {
      hookGui: ig.ImageGui;
    }
    interface CheckboxGuiConstructor extends ImpactClass<CheckboxGui> {
      new (initValue: boolean, width?: number, active?: boolean): sc.CheckboxGui
    }
    var CheckboxGui: CheckboxGuiConstructor;

    var BUTTON_TYPE: { [type: string]: ButtonGui.Type };
  }
}
