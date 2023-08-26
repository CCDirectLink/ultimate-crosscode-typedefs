// requires impact.base.loader
// requires game.config
// requires game.feature.inventory.item-level-scaling

export {};

declare global {
  namespace sc {
    enum ITEMS_TYPES {
      CONS = 'CONS',
      EQUIP = 'EQUIP',
      TRADE = 'TRADE',
      KEY = 'KEY',
      TOGGLE = 'TOGGLE',
    }

    enum ITEMS_EQUIP_TYPES {
      HEAD = 'HEAD',
      ARM = 'ARM',
      TORSO = 'TORSO',
      FEET = 'FEET',
    }

    enum ITEMS_RARITY {
      LOW = 0,
      NORMAL = 1,
      RARE = 2,
      LEGENDARY = 3,
      UNIQUE = 4,
      BACKER = 5,
      SCALE = 6,
    }

    enum SORT_TYPE {
      ORDER = 0,
      NAME = 1,
      AMOUNT = 2,
      RARITY = 3,
      HP = 4,
      ATTACK = 5,
      DEFENSE = 6,
      FOCUS = 7,
      LEVEL = 8,
    }

    type ItemID = string | number;

    namespace Inventory {
      interface Item {
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        type: sc.ITEMS_TYPES;
        icon: string; // TODO
        order: number;
        level: number;
        effect: ig.EffectHandle.Settings;
        rarity: sc.ITEMS_RARITY;
        cost: number;
        noTrack: boolean;
        sources: sc.Inventory.ItemSource[];
        equipType?: Optional<sc.ITEMS_EQUIP_TYPES>;
        isScalable?: Optional<boolean>;
        stats?: Optional<string[]>;
        time?: Optional<number>;
        isBuff?: boolean;
        foodSprite?: string;
        // TODO
      }

      type ItemSource =
        | { type: 'ENEMY'; value: string }
        | { type: 'TRADER'; value: string }
        | { type: 'PLANT'; value: string }
        | { type: 'QUEST'; value: string }
        | { type: 'CHEST'; value: string }
        | {
            type: 'OTHER';
            value: {
              text: ig.LangLabel.Data;
              icon: ItemSource['type'];
              subText?: Optional<ig.LangLabel.Data>;
              arrow: boolean;
            };
          };
    }
    interface Inventory extends ig.SingleLoadable {
      items: Inventory.Item[];
      scalable: number[];

      updateScaledEquipment(this: this, newLevel: number): void;
      getItem(id: sc.ItemID): Optional<sc.Inventory.Item>;
      getItemName(this: this, id: sc.ItemID): string;
      getBuffString(this: this, id: sc.ItemID, a?: boolean, statChangeSettings?: string[]): string | undefined;
      isBuffID(this: this, id: sc.ItemID): boolean
      getRaritySuffix(this: this, rarity: sc.ITEMS_RARITY): string;
      getItemNameWithIcon(this: this, id: sc.ItemID): string;
      getItemIcon(this: this, id: sc.ItemID): string;
    }
    interface InventoryConstructor extends ImpactClass<Inventory> {
      new (): Inventory;
    }
    var Inventory: InventoryConstructor;
    var inventory: Inventory;
  }
}
