// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.combat
// requires game.feature.quick-menu.gui.quick-misc

export {}

declare global {
    namespace sc {
        enum ANALYSIS_COLORS { RED = 0, BLUE = 1, GREEN = 2, ORANGE = 3, YELLOW = 4, GREY = 5, PURPLE = 6 }

        enum SHOW_TYPE { DEFAULT = 0, INSTANT = 1 }

        interface QuickMenuTypesBase extends ig.FocusGui {
            type: string
            entity: ig.Entity
            screen: sc.QuickFocusScreen
            focusable: boolean
            showType: sc.SHOW_TYPE
            color: sc.ANALYSIS_COLORS
            typeIcon: ig.ImageGui

            isMouseOver(this: this): boolean
            setIconColor(this: this, color: sc.ANALYSIS_COLORS): void
            show(this: this, stateTransition?: string): void
            hide(this: this, stateTransition?: string): void
            alignGuiPosition(this: this, x?: number, y?: number): void
            onAnalysisEnter(this: this): void
            onAnalysisExit(this: this): void
        }
        interface QuickMenuTypesBaseSettings {
            type: keyof typeof sc.QUICK_MENU_TYPES
            entity: ig.Entity
            displayName?: string
            displayTrigger?: unknown
            randomName?: string
            disabled?: boolean
            color?: sc.ANALYSIS_COLORS
            showType?: sc.SHOW_TYPE
            text?: string
        }
        interface QuickMenuTypesBaseConstructor extends ImpactClass<sc.QuickMenuTypesBase> {
            new (type: string, settings: Omit<QuickMenuTypesBaseSettings, 'entity'>, screen: sc.QuickFocusScreen): sc.QuickMenuTypesBase
        }
        var QuickMenuTypesBase: sc.QuickMenuTypesBaseConstructor


        namespace QUICK_MENU_TYPES {
            interface Analyzable extends sc.QuickMenuTypesBase {
                nameGui: sc.QuickArrowBox
                displayNameAllTime: boolean
            }
            interface AnalyzableConstructor extends ImpactClass<Analyzable> {
                new (type: string, settings: sc.QuickMenuTypesBaseSettings, screen: sc.QuickFocusScreen): Analyzable
            }
            var Analyzable: AnalyzableConstructor

            interface NPC extends sc.QuickMenuTypesBase {
                nameGui: sc.QuickArrowBox
                displayNameAllTime: boolean
            }
            interface NPCConstructor extends ImpactClass<NPC> {
                new (type: string, settings: sc.QuickMenuTypesBaseSettings, screen: sc.QuickFocusScreen): NPC 
            }
            var NPC: NPCConstructor

            interface Enemy extends sc.QuickMenuTypesBase {
                level: sc.QuickBorderArrowLevelBox
            }
            interface EnemyConstructor extends ImpactClass<Enemy> {
                new (type: string, settings: sc.QuickMenuTypesBaseSettings, screen: sc.QuickFocusScreen): Enemy
            }
            var Enemy: EnemyConstructor
        }
    }
}
