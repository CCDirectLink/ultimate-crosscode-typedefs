// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum LIST_COLUMNS {
      ONE = 1,
      TWO = 2,
    }

    interface ButtonListBox extends sc.ScrollPane {
      buttonGroup: sc.ButtonGroup;
      contentPane: ig.GuiElementBase;

      activate(buttonInteract?: ig.ButtonInteractEntry | null): void;
      addButton(
        button: ig.GuiElementBase,
        skipButtonGroup: true,
        xOffset?: number | null,
        yOffset?: number | null,
      ): void;
      addButton(
        button: ig.FocusGui,
        skipButtonGroup?: false | null,
        xOffset?: number | null,
        yOffset?: number | null,
      ): void;
      clear(this: this, skip?: boolean | null): void;
      scrollToY(this: this, y: number, b: boolean): void;
    }
    interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {}
    var ButtonListBox: ButtonListBoxConstructor;

    interface ItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      clear(this: this, skip?: boolean | null): void;
      addButton(this: this, gui: ig.FocusGui): void;
      getChildren(this: this): ig.FocusGui[];
    }
    interface ItemListBoxConstructor extends ImpactClass<ItemListBox> {}
    var ItemListBox: ItemListBoxConstructor;

    interface MultiColumnItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      addButton(this: this, button: sc.ListBoxButton): void;
      buttonGroup(this: this): sc.ButtonGroup;
      clear(this: this, refocus: boolean): void;
    }
    interface MultiColumnItemListBoxConstructor extends ImpactClass<MultiColumnItemListBox> {
      new (b: number, a: number, columns: sc.LIST_COLUMNS, c: number): sc.MultiColumnItemListBox;
    }
    var MultiColumnItemListBox: MultiColumnItemListBoxConstructor;
  }
}
