// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface BaseMenu extends ig.GuiElementBase {
      gfx: ig.Image;
      visible: boolean;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this, previousMenu?: sc.BaseMenu, prevSubmenu?: sc.MENU_SUBMENU): void;
      hideMenu(this: this, afterMenu?: sc.BaseMenu, nextSubmenu?: sc.MENU_SUBMENU): void;
      exitMenu(this: this): void;
    }
    interface BaseMenuConstructor extends ImpactClass<BaseMenu> {
      new (): BaseMenu;
    }
    var BaseMenu: BaseMenuConstructor;

    interface ListInfoMenu extends sc.BaseMenu, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeySort: sc.ButtonGui;
      helpGui: sc.HelpScreen;
      list: sc.ListTabbedPane;
      info?: ig.BoxGui;
      sortMenu: sc.SortMenu;

      createHelpGui(this: this): void;
    }
    interface ListInfoMenuConstructor extends ImpactClass<ListInfoMenu> {
      new (list: sc.ListTabbedPane, info?: ig.BoxGui, disableSorting?: boolean): ListInfoMenu;
    }
    var ListInfoMenu: ListInfoMenuConstructor;
  }
}
