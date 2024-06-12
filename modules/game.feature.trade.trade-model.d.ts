// requires impact.base.game
// requires impact.base.loader
// requires impact.feature.interact.button-interact
// requires impact.feature.database.database
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    namespace TradeModel {
      interface FoundTrader {
        characterName: string;
        map: ig.LangLabel;
        area: ig.LangLabel;
        time: number;
      }

      interface TradeItem {
        id: sc.ItemID;
        amount: number;
      }

      interface TradeOption {
        get: TradeItem[];
        require: TradeItem[];
        scale?: number;
        cost?: number;
      }

      interface Trader {
        name: ig.LangLabel.Data;
        order: number;
        area: string;
        noTrack?: boolean;
        options: TradeOption[];
        upgradeTo?: string;
        child?: string;
      }
    }

    interface TradeModel extends ig.GameAddon, sc.Model {
      traders: Record<string, sc.TradeModel.Trader>;

      onStoragePreLoad(this: this, save: ig.SaveSlot.Data): void
      getFoundTrader(this: this, key: string): sc.TradeModel.FoundTrader;
    }
    interface TradeModelConstructor extends ImpactClass<TradeModel> {
      new (): TradeModel;
    }
    var TradeModel: TradeModelConstructor;
    var trade: sc.TradeModel;
  }
}
