// requires impact.base.entity

export { }

declare global {
    namespace sc {
        interface MULTI_HIT_SWITCH_TYPE_BASE {
            size: Vec3
            padding: Vec2
            activeZHeight: number
            hitCount: number
            decreaseDelay: number
            decreaseRepeat: number
            useStyleSheet: boolean
            anims: any

            hitCondition(a: unknown, b: unknown): void
        }
        var MULTI_HIT_SWITCH_TYPE: {
            default: MULTI_HIT_SWITCH_TYPE_BASE
            arSwitch: MULTI_HIT_SWITCH_TYPE_BASE
            old: MULTI_HIT_SWITCH_TYPE_BASE
        }
    }
    namespace ig {
        namespace ENTITY {
            namespace MultiHitSwitch {
                interface Settings {
                    switchType: keyof typeof sc.MULTI_HIT_SWITCH_TYPE
                    variable?: string
                    addValue?: string
                }
            }
            interface MultiHitSwitch extends ig.AnimatedEntity {
                hitCondition: string
                ballDestroyer: boolean
                activeZHeight: number
                variable: string
                isOn: boolean
                hitsToActive: number
                currentHits: number
                decreaseDelay: number
                decreaseRepeat: number
                timerUntilDecrease: number
                timerDecreaseStep: number
                hitSound: ig.Sound
                countSound: ig.Sound
                activateSound: ig.Sound
                addValue?: string
            }
            interface MultiHitSwitchConstructor extends ImpactClass<MultiHitSwitch> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.MultiHitSwitch.Settings): MultiHitSwitch
            }
            var MultiHitSwitch: MultiHitSwitchConstructor
        }
    }
}
