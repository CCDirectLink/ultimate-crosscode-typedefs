// requires impact.feature.interact.gui.focus-gui
// requires impact.feature.gui.gui

export { }

declare global {
    namespace sc {
        interface SlopeLine_Color {
            WHITE: Vec2
            BLUE: Vec2
            ORANGE: Vec2
            GREY: Vec2
            DARK_GREY: Vec2
        }
        interface SlopeLine extends ig.GuiElementBase {
            pixel: number
            right: boolean
            down: boolean
            _tempPixel: number
            color: sc.SlopeLine_Color
        }
        interface SlopeLineConstructor extends ImpactClass<SlopeLine> {
            new(pixel: number, right?: boolean, down?: boolean, color?: sc.SlopeLine_Color): SlopeLine
        }
        var SlopeLine: SlopeLineConstructor
    }
}
