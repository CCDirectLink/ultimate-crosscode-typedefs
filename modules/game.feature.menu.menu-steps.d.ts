// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action
// requires game.feature.menu.menu-model
// requires game.feature.menu.map-model
// requires game.feature.menu.lore-model

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace OPEN_SHOP {
        interface Settings {
          shop: string;
        }
      }
      interface OPEN_SHOP extends ig.EventStepBase {
        shop: string;
        start(this: this): void
      }
      interface OPEN_SHOP_CONSTRUCTOR extends ImpactClass<OPEN_SHOP> {
        new (settings: OPEN_SHOP.Settings): OPEN_SHOP;
      }
      var OPEN_SHOP: OPEN_SHOP_CONSTRUCTOR;
    }
  }
}
