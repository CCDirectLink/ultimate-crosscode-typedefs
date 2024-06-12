// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.options.options-misc
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace OPTION_GUIS_DEFS {
      interface BUTTON_GROUP extends ig.GuiElementBase {}
      interface BUTTON_GROUP_CONSTRUCTOR extends ImpactClass<BUTTON_GROUP> {}

      interface ARRAY_SLIDER extends ig.GuiElementBase {
        slider: sc.OptionFocusSlider;
        _lastVal: number;
        scale: number;
        stepSize: number;

        onLeftRight(this: this, direction: boolean): void;
      }
      interface ARRAY_SLIDER_CONSTRUCTOR extends ImpactClass<ARRAY_SLIDER> {}

      interface OBJECT_SLIDER extends ig.GuiElementBase {
        slider: sc.OptionFocusSlider;
        _lastVal: number;
        currentNumber: sc.TextGui | sc.NumberGui;

        onLeftRight(this: this, direction: boolean): void;
      }
      interface OBJECT_SLIDER_CONSTRUCTOR extends ImpactClass<OBJECT_SLIDER> {}

      interface CHECKBOX extends ig.GuiElementBase {
        button: sc.CheckboxGui;
        onPressed(this: this, checkbox: sc.CheckboxGui): void;
      }
      interface CHECKBOX_CONSTRUCTOR extends ImpactClass<CHECKBOX> {}

      interface CONTROLS extends ig.GuiElementBase {}
      interface CONTROLS_CONSTRUCTOR extends ImpactClass<CONTROLS> {}

      interface LANGUAGE extends ig.GuiElementBase {
          onLanguageSelected(this: this, focusLost: boolean, lang: sc.LANGUAGE): void
      }
      interface LANGUAGE_CONSTRUCTOR extends ImpactClass<LANGUAGE> {}
    }
    var OPTION_GUIS: {
      [sc.OPTION_TYPES.BUTTON_GROUP]: sc.OPTION_GUIS_DEFS.BUTTON_GROUP_CONSTRUCTOR;
      [sc.OPTION_TYPES.ARRAY_SLIDER]: sc.OPTION_GUIS_DEFS.ARRAY_SLIDER_CONSTRUCTOR;
      [sc.OPTION_TYPES.OBJECT_SLIDER]: sc.OPTION_GUIS_DEFS.OBJECT_SLIDER_CONSTRUCTOR;
      [sc.OPTION_TYPES.CHECKBOX]: sc.OPTION_GUIS_DEFS.CHECKBOX_CONSTRUCTOR;
      [sc.OPTION_TYPES.CONTROLS]: sc.OPTION_GUIS_DEFS.CONTROLS_CONSTRUCTOR;
      [sc.OPTION_TYPES.LANGUAGE]: sc.OPTION_GUIS_DEFS.LANGUAGE_CONSTRUCTOR;
    };

    interface OptionInfoBox extends ig.GuiElementBase {
      text: sc.TextGui;
      box: sc.CenterBoxGui;
    }
    interface OptionInfoBoxConstructor extends ImpactClass<OptionInfoBox> {
      new (option: sc.OptionDefinition.INFO, width: number): OptionInfoBox;
    }
    var OptionInfoBox: OptionInfoBoxConstructor;

    interface OptionRow extends ig.GuiElementBase {
      row: number;
      optionName: string;
      option: sc.OptionDefinition;
      optionDes: string;
      local: boolean;
      divider: boolean;
      nameGui: sc.TextGui;
      typeGui:
        | sc.OPTION_GUIS_DEFS.BUTTON_GROUP
        | sc.OPTION_GUIS_DEFS.ARRAY_SLIDER
        | sc.OPTION_GUIS_DEFS.OBJECT_SLIDER
        | sc.OPTION_GUIS_DEFS.CHECKBOX
        | sc.OPTION_GUIS_DEFS.CONTROLS
        | sc.OPTION_GUIS_DEFS.LANGUAGE;
      _hasEntered: boolean;
      _rowGroup: sc.RowButtonGroup;
    }
    interface OptionRowConstructor extends ImpactClass<OptionRow> {
      new (
        option: string,
        row: number,
        rowGroup: sc.RowButtonGroup,
        local?: boolean,
        width?: number,
        height?: number,
      ): OptionRow;
    }
    var OptionRow: OptionRowConstructor;
  }
}
