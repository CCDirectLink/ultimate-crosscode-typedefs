// requires impact.feature.interact.interact

export { }

declare global {
    namespace sc {
        enum SKIP_INTERACT_MSG {
            ENABLED = 1,
            DISABLED = 2,
            SKIPPED = 3,
        }
        interface SkipInteractEntry extends ig.Class {
            handler: sc.XenoDialogIcon | sc.SideMessageHudGui
            order: number

            isActive(this: this): boolean
        }
        interface SkipInteractEntryConstructor extends ImpactClass<SkipInteractEntry> {
            new(): SkipInteractEntry
        }
        var SkipInteractEntry: SkipInteractEntryConstructor

    }
}
