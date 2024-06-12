// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.quick-menu.gui.quick-screen-types
// requires game.feature.menu.gui.menu-misc
// requires game.feature.quick-menu.gui.quick-misc

export { }

declare global {
    namespace sc {
        interface QuickMenuAnalysisCursor extends ig.GuiElementBase {
            moveTo(this: this, x: number, y: number, setPos?: boolean, c?: unknown): void
        }
        interface QuickMenuAnalysisCursorConstructor extends ImpactClass<QuickMenuAnalysisCursor> {
            new(): QuickMenuAnalysisCursor
        }
        var QuickMenuAnalysisCursor: QuickMenuAnalysisCursorConstructor
        interface QuickMenuAnalysis extends ig.GuiElementBase {
            buttonGroup: sc.MouseButtonGroup
            entities: sc.QuickMenuTypesBase[]
            _cursorPos: Vec2
            cursor: sc.QuickMenuAnalysisCursor
            iconContainer: ig.GuiElementBase
            focusContainer: sc.QuickFocusScreen

            show(this: this): void
            hide(this: this): void
            enter(this: this): void
            exit(this: this): void
        }
        interface QuickMenuAnalysisConstructor extends ImpactClass<QuickMenuAnalysis> {
            new(): QuickMenuAnalysis
        }
        var QuickMenuAnalysis: QuickMenuAnalysisConstructor
    }
}
