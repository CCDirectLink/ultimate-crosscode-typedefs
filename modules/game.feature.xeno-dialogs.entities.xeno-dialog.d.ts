// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace XenoDialog {
                interface Settings {
                    once: boolean
                    ignoreZ: number
                    dialog: {
                        entitySource: unknown
                        text: string
                        event?: unknown // event steps
                        entity: unknown
                    }[]
                }
            }
            interface XenoDialog extends ig.Entity {
                dialog: {
                    entitySource: unknown
                    text: ig.LangLabel
                    event: ig.Event
                    entity: ig.ENTITY.NPC
                    timePadding: number
                }[]
                members: ig.ENTITY.NPC[]
                running: boolean
                blockTimer: number
                padTimer: number
                currentTextIndex: number
                currentEntity?: ig.ENTITY.NPC
                currentText: string
                currentEvent: ig.Event
                fx: { sheet: ig.EffectSheet, handle: unknown }
                once: boolean
                hasRunOnce: boolean
                ignoreZ: boolean
            }
            interface XenoDialogConstructor extends ImpactClass<XenoDialog> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.XenoDialog.Settings): XenoDialog
            }
            var XenoDialog: XenoDialogConstructor
        }
    }
}
