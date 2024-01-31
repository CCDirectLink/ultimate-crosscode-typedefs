// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-status-default

export {};

declare global {
  namespace sc {
    interface ItemStatusTrade extends sc.HeaderMenuPanel {
      gfx: ig.Image;
      content: ig.GuiElementBase;

      _setTradeInfo(this: this, itemID: number): void;
    }
    interface ItemStatusTradeConstructor extends ImpactClass<ItemStatusTrade> {
      new (): ItemStatusTrade;
      BaseEntryType: sc.ItemStatusTrade.BaseEntryTypeConstructor;
    }
    var ItemStatusTrade: ItemStatusTradeConstructor;

    namespace ItemStatusTrade {
      interface BaseEntryType extends ig.GuiElementBase {
        gfx: ig.Image;
        tradeGfx: ig.Image;
        type: string;
        itemID: number;
        textEntry: sc.TextGui;
        subEntry: sc.TextGui;
        tradeIcon: ig.ImageGui;
      }
      interface BaseEntryTypeConstructor extends ImpactClass<BaseEntryType> {
        new (
          itemSource: sc.Inventory.ItemSource,
          itemID: number,
          hasSubText?: Nullable<boolean>,
          noMaxWidth?: Nullable<boolean>,
        ): BaseEntryType;
      }
    }
  }
}
