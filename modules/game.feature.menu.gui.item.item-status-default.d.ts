// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum MENU_BAR_TYPE {
      HP = 0,
      EXP = 1,
      SP = 2,
      BUFF = 3,
    }

    interface ItemStatusDefaultBar extends ig.GuiElementBase {
      type: sc.MENU_BAR_TYPE;
      maxValue: number;
      currentValue: number;
      targetValue: number;
      maxNumber: sc.NumberGui;
      currentNumber: sc.NumberGui;
      barHeight: number;      
    }
    interface ItemStatusDefaultBarConstructor extends ImpactClass<ItemStatusDefaultBar> {
      new (
        text: string,
        type: sc.MENU_BAR_TYPE,
        buff: unknown,
        width: number,
        barHeight: number,
        position: number,
      ): ItemStatusDefaultBar;
    }
    var ItemStatusDefaultBar: ItemStatusDefaultBarConstructor;

    interface ItemStatusDefault extends sc.MenuPanel {
      menuGfx: ig.Image;
      level: sc.NumberGui;
    }
    interface ItemStatusDefaultConstructor extends ImpactClass<ItemStatusDefault> {
      new (): ItemStatusDefault;
    }
    var ItemStatusDefault: ItemStatusDefaultConstructor;
  }
}
