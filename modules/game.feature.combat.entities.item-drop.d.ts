// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface ItemDropType {
      preCollect?: Optional<boolean>;
      fly?: Optional<boolean>;
    }
    interface ITEM_DROP_TYPE {
      ENEMY: sc.ItemDropType;
      PROP: sc.ItemDropType;
      EVENT_PROP: sc.ItemDropType;
      CHEST: sc.ItemDropType;
    }
    var ITEM_DROP_TYPE: ITEM_DROP_TYPE;

    interface ItemDropEntity extends ig.AnimatedEntity {}
    interface ItemDropEntityConstructor extends ImpactClass<ItemDropEntity> {
      spawnDrops(
        entity: ig.Entity,
        align: ig.ENTITY_ALIGN,
        target: ig.Entity,
        item: sc.ItemID,
        amount: number,
        dropType: sc.ItemDropType,
      ): void;
    }
    var ItemDropEntity: ItemDropEntityConstructor;
  }
}
