// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    var BUTTON_DEFAULT_WIDTH: number;
    var BUTTON_MENU_WIDTH: number;
    var BUTTON_TOP_MENU_WIDTH: number;
    var BUTTON_SOUND: { [name: string]: ig.Sound };

    interface ButtonHighlightGui extends ig.GuiElementBase {
      focusWeight: number;
      gfx: ig.Image;
      pattern: ig.ImagePattern;
      flipped: boolean;
      highlight: sc.ButtonGui.Highlight;
    }
    interface ButtonHighlightGuiConstructor extends ImpactClass<ButtonHighlightGui> {
      new (width: number, type: sc.ButtonGui.Type): ButtonHighlightGui;
    }
    var ButtonHighlightGui: ButtonHighlightGuiConstructor;

    interface ButtonBgGui extends ig.BoxGui {}
    interface ButtonBgGuiConstructor extends ImpactClass<ButtonBgGui> {
      new (width: number, type: sc.ButtonGui.Type): ButtonBgGui;
    }
    var ButtonBgGui: ButtonBgGuiConstructor;

    namespace ButtonGui {
      interface Highlight {
        startX: number;
        endX: number;
        leftWidth: number;
        rightWidth: number;
        offsetY: number;
        gfx: ig.Image;
        pattern: ig.ImagePattern;
      }

      interface Type {
        alignXPadding?: number;
        highlight?: Highlight | null;
        height: number;
      }
    }
    interface ButtonGui extends ig.FocusGui {
      text: sc.TextLike;
      bgGui: sc.ButtonBgGui;
      buttonType: sc.ButtonGui.Type;
      submitSound?: ig.Sound;
      data?: unknown;
      textChild: sc.TextGui;

      setWidth(this: this, width: number): void;
      setHeight(this: this, height: number): void;
      setText(this: this, text: sc.TextLike, ignoreWidth?: boolean): void;
      resetText(this: this): void
      unsetFocus(this: this): void
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
