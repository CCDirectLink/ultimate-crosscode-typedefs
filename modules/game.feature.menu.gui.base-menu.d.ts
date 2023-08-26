// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface BaseMenu extends ig.GuiElementBase {
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
  }
}
