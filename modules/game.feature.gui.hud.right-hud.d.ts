// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image
// requires game.feature.gui.base.boxes

export {};

declare global {
    namespace sc {
        interface RightHudBoxGui extends sc.SideBoxGui {}
        interface RightHudBoxGuiConstructor extends ImpactClass<RightHudBoxGui> {}
        let RightHudBoxGui: RightHudBoxGuiConstructor;
    }
}