// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.map-interact
// requires game.feature.msg.gui.msg-skip-hud

export { }

declare global {
    namespace sc {
        interface XenoDialogIcon extends ig.BoxGui {
            ninepatch: ig.NinePatch
            textGui: sc.TextGui
            skipGui: sc.MsgSkipGui
            xenoDialog: ig.ENTITY.XenoDialog
            skipEntry: sc.SkipInteractEntry
        }
        interface XenoDialogIconConstructor extends ImpactClass<XenoDialogIcon> {
            new(): XenoDialogIcon
        }
        var XenoDialogIcon: XenoDialogIconConstructor

    }
}
