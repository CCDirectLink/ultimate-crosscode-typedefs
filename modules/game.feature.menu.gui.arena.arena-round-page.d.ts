// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.gui.base.misc

export {}

declare global {
    namespace sc {
        interface ArenaChallengeEntry extends ig.GuiElementBase {
            gfx: ig.Image;
            icon: number;
            text: sc.TextGui;
            tiny: boolean;
            global: boolean;
        }
        interface ArenaChallengeEntryConstructor extends ImpactClass<ArenaChallengeEntry> {
            new (challengeName: string, width: number, tiny: boolean, global: boolean): ArenaChallengeEntry
        }
        var ArenaChallengeEntry: ArenaChallengeEntryConstructor;
    }
}