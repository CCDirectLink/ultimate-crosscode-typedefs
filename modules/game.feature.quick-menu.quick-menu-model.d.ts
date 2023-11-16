// requires impact.base.game
// requires impact.feature.interact.button-interact
// requires impact.feature.database.database
// requires game.feature.model.base-model

export {}

declare global {
    namespace sc {
        enum QUICK_MENU_STATE {
            NONE = 0,
            ITEMS = 1,
            CHECK = 2,
            PARTY = 3,
            MAP = 4,
        }
        interface QuickMenuModel extends ig.GameAddon {
            currentState: sc.QUICK_MENU_STATE
            previousState: sc.QUICK_MENU_STATE
            cursorMoved: boolean
            cursor: Vec2

            enterQuickMenu(this: this): void
            exitQuickMenu(this: this): void
        }

        interface QuickMenuModelConstructor extends ImpactClass<QuickMenuModel> { new (): QuickMenuModel }
        var QuickMenuModel: QuickMenuModelConstructor
        var quickmodel: QuickMenuModel
    }
}
