// requires game.feature.inventory.inventory

export {}

declare global {
    namespace sc {
        interface ItemConsumption extends ig.Class {
            runHealChange(this: this, settings: sc.StatChangeSettings): void;
        }
        interface ItemConsumptionConstructor extends ImpactClass<ItemConsumption> {
            new (): void;
        }
        var ItemConsumption: ItemConsumptionConstructor;
    }
}