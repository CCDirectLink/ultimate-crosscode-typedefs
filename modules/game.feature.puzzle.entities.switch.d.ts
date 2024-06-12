// requires impact.base.entity

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace Switch {
                interface Settings {}
            }
            interface Switch extends ig.AnimatedEntity {
                variable: string
                isOn: boolean
            }
            interface SwitchConstructor extends ImpactClass<Switch> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.Switch.Settings): Switch
            }
            var Switch: SwitchConstructor
        }
    }
}
