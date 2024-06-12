// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.item.item-list
// requires game.feature.menu.gui.options.options-types

export {};

declare global {
  namespace sc {
    namespace OptionsTabBox {
      interface Tabs {
        general: sc.ItemTabbedBox.TabButton;
        interface: sc.ItemTabbedBox.TabButton;
        video: sc.ItemTabbedBox.TabButton;
        audio: sc.ItemTabbedBox.TabButton;
        controls: sc.ItemTabbedBox.TabButton;
        assists: sc.ItemTabbedBox.TabButton;
        arena: sc.ItemTabbedBox.TabButton;
      }
    }
    interface OptionsTabBox extends ig.GuiElementBase {
      tabs: OptionsTabBox.Tabs;
      tabArray: sc.ItemTabbedBox.TabButton[];
      rows: (sc.OptionInfoBox | sc.OptionRow)[];

      showMenu(this: this): void
      _createOptionList(this: this, tabIndex: number): void
      _rearrangeTabs(this: this): void;
      _createTabButton(
        this: this,
        name: string,
        x: number,
        type: sc.OPTION_CATEGORY,
      ): sc.ItemTabbedBox.TabButton;
      _createOptionList(this: this, tabIndex: number): void
    }
    interface OptionsTabBoxConstructor extends ImpactClass<OptionsTabBox> {
      new (isLocal: boolean): OptionsTabBox;
    }
    var OptionsTabBox: OptionsTabBoxConstructor;
  }
}
