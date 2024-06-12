// requires impact.base.loader
// requires game.config

export {};

declare global {
  namespace ig {
    namespace Database {
      interface Data {
        areas: { [name: string]: sc.MapModel.Area };
        enemies: { [id: string]: EnemyData };
        leawords: string[]
        lore: Record<string, LoreData>
        shops: { [id: string]: ShopData };
        traders: { [id: string]: sc.TradeModel.Trader };
        chapters: Chapter[];
        toggleSets: { [name: string]: ToggleSet }
      }

      interface EnemyData {
        name: ig.LangLabel.Data;
        species: ig.LangLabel.Data;
        descriptions: EnemyDescriptionBlock[];
        boostedLevel: number;
        boss: boolean;
        track?: boolean
      }

      interface LoreData {
        title: ig.LangLabel.Data
        order: number
        category: 'STORY' | 'CHARACTERS' | 'CROSS_LORE' | 'EARTH_LORE'
        content: Record<string, {
          content: ig.LangLabel.Data
          switchPage?: boolean
          image?: { src: string, offX: number, offY: number, width: number, height: number }
          options?: { allgn: string, wrap: boolean }
          condition?: string
          hr?: boolean
          altContent?: {
            content: ig.LangLabel.Data
            condition: string
          }
        }>
        parent?: string
        extension?: string
      }

      interface EnemyDescriptionBlock {
        text: ig.LangLabel.Data;
        condition?: Nullable<string>;
      }

      interface ShopData {
        name: ig.LangLabel.Data;
        shopType: keyof typeof sc.MENU_SHOP_TYPES;
        sellScale: number;
        maxOwn?: number;
        content?: unknown[][];
        pages: ShopPage[];
      }

      interface ShopPage {
        title: ig.LangLabel.Data;
        content: ShopItem[];
      }

      interface ShopItem {
        item: sc.ItemID;
        condition?: string;
        price?: number;
      }

      interface Chapter {
        name: ig.LangLabel;
        plotline: number;
        prefix?: ig.LangLabel;
        // this is not used in any capacity, but it is present
        condition?: string;
      }

      interface ToggleSet {
        type: "SINGLE" | "MULTI";
        name: ig.LangLabel.Data;
        order: number;
        color: string;
        items: sc.ItemID[];
      }
    }
    interface Database extends ig.SingleLoadable {
      data: ig.Database.Data;

      get<K extends keyof ig.Database['data']>(this: this, key: K): ig.Database['data'][K];
      get(this: this, key: string): unknown;
      onload(this: this, data: ig.Database.Data): void;
    }
    interface DatabaseConstructor extends ImpactClass<Database> {
      new (): Database;
    }
    var Database: DatabaseConstructor;
    var database: Database;
  }
}
