// requires impact.base.game
// requires game.feature.model.base-model
// requires impact.feature.storage.storage

export { }

declare global {
    namespace sc {
        interface LoreModel extends ig.GameAddon {
            observers: unknown[]
            lories: ig.Database.Data['lore']
            unlockedLories: Record<keyof ig.Database.Data['lore'], Record<string, boolean>>

            unlockLoreAll(this: this): void
        }
        interface LoreModelConstructor extends ImpactClass<LoreModel> {
            new(): LoreModel
        }
        var LoreModel: LoreModelConstructor
        var lore: LoreModel
    }
}
