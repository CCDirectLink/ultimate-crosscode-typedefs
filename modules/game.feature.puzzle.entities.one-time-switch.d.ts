// requires impact.base.entity

export { }

declare global {
    namespace sc { 
        interface ONE_TIME_SWITCH_TYPE_BASE {
            size: Vec3
            padding: Vec2
            activeZHeight: number
            useStyleSheet: string
            anims: any

            hitCondition(a: unknown, b: unknown): void
        }
        var ONE_TIME_SWITCH_TYPE: {
            default: sc.ONE_TIME_SWITCH_TYPE_BASE
            "turret-switch": sc.ONE_TIME_SWITCH_TYPE_BASE
            propeller: sc.ONE_TIME_SWITCH_TYPE_BASE
            steamPipe: sc.ONE_TIME_SWITCH_TYPE_BASE
            teslaSwitch: sc.ONE_TIME_SWITCH_TYPE_BASE
            arSwitch: sc.ONE_TIME_SWITCH_TYPE_BASE
            waveSwitch: sc.ONE_TIME_SWITCH_TYPE_BASE
            ferroSwitch: sc.ONE_TIME_SWITCH_TYPE_BASE
        }
    }
    namespace ig {
        namespace ENTITY {
            namespace OneTimeSwitch {
                interface Settings {
                    switchType: keyof typeof sc.ONE_TIME_SWITCH_TYPE
                    variable?: string
                    addValue?: string
                    activeTime?: number
                    fixCount?: number
                    fastMode?: boolean
                }
            }
            interface OneTimeSwitch extends ig.AnimatedEntity {
                hitCondition: string
                ballDestroyer: boolean
                timer: number
                filZHeight: number
                variable: string
                isOn: boolean
                switchType: keyof typeof sc.ONE_TIME_SWITCH_TYPE
                data: sc.ONE_TIME_SWITCH_TYPE_BASE
                fastMode: boolean
                addValue: string
                activeTime: number
                fixCount: number
            }
            interface OneTimeSwitchConstructor extends ImpactClass<OneTimeSwitch> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.OneTimeSwitch.Settings): OneTimeSwitch
            }
            var OneTimeSwitch: OneTimeSwitchConstructor
        }
    }
}
