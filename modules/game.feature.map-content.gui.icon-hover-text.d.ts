// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.map-interact

export { }

declare global {
    namespace sc {
        interface IconHoverTextGui extends ig.BoxGui {
            showOnNear: boolean

            setIconState(this: this, state: sc.INTERACT_ENTRY_STATE): void
            isActive(this: this, state: sc.INTERACT_ENTRY_STATE): boolean
            remove(this: this): void
        }
        interface IconHoverTextGuiConstructor extends ImpactClass<IconHoverTextGui> {
            new(text: ig.LangLabel, yOffset: number, showOnNear: boolean, title?: string): IconHoverTextGui
        }
        var IconHoverTextGui: IconHoverTextGuiConstructor
    }
}
