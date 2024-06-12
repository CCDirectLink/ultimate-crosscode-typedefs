// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace Blocker {
                interface Settings {
                    blockerType: sc.BLOCKER_TYPE
                }
            }
            interface Blocker extends ig.AnimatedEntity {
                active: boolean
                maxHeight: number
                minHeight: number
                variable: string
                condition: ig.VarCondition
            }
            interface BlockerConstructor extends ImpactClass<Blocker> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.Blocker.Settings): Blocker
            }
            var Blocker: BlockerConstructor
        }
    }
    namespace sc {
        interface BLOCKER_TYPE_ENTRY {
            size: Vec3
            collShape: ig.COLLSHAPE
            minHeight: number
            anims: unknown
        }
        interface BLOCKER_TYPE {
            diagonalNW: BLOCKER_TYPE_ENTRY
            diagonalNE: BLOCKER_TYPE_ENTRY
            diagonalSE: BLOCKER_TYPE_ENTRY
            diagonalSW: BLOCKER_TYPE_ENTRY
        }
    }
}

