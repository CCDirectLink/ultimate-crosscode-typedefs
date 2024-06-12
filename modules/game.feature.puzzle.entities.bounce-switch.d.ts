// requires impact.base.entity
// requires impact.base.game
// requires impact.feature.effect.effect-sheet

export { }

declare global {
    namespace sc {
        namespace BounceSwitchGroups {
            interface Group {
                endSwitch: null,
                variable: string,
                blocks: unknown[],
                blockHitCount: number,
                finalHit: boolean,
                currentBall: null,
                cameraHandle: null,
                overrideHandle: null
            }
        }
        interface BounceSwitchGroups extends ig.GameAddon {
            groups: Record<string, sc.BounceSwitchGroups.Group>

            isGroupBallConflict(this: this, groupName: string, entity: ig.Entity): boolean
            getGroup(this: this, groupName: string): sc.BounceSwitchGroups.Group
        }
        interface BounceSwitchGroupsConstructor extends ImpactClass<BounceSwitchGroups> {
            new (): BounceSwitchGroups
        }
        var BounceSwitchGroups: BounceSwitchGroupsConstructor
        var bounceSwitchGroups: BounceSwitchGroups
    }
    namespace ig {
        namespace ENTITY {
            namespace BounceSwitch {
                interface Settings {}
            }
            interface BounceSwitch extends ig.AnimatedEntity {
                effects: ig.EffectSheet
                group: string
                isOn: boolean

                ballHit(this: this, entity: ig.Entity | ig.ENTITY.Ball): boolean
                onGroupResolve(this: this): void
            }
            interface BounceSwitchConstructor extends ImpactClass<BounceSwitch> {
                new (x: number, y: number, z: number, settings: ig.ENTITY.BounceSwitch.Settings): BounceSwitch
            }
            var BounceSwitch: BounceSwitchConstructor
            
            namespace BounceBlock {
                interface Settings {}
            }
            interface BounceBlock extends ig.AnimatedEntity {
                effects: ig.EffectSheet
                group: string
                blockState: 0 | 1 | 2
                timer: ig.WeightTimer
                ballTime: number

                onGroupResolve(this: this, hide?: boolean): void
            }
            interface BounceBlockConstructor extends ImpactClass<BounceBlock> {
                new (x: number, y: number, z: number, settings: ig.ENTITY.BounceBlock.Settings): BounceBlock
            }
            var BounceBlock: BounceBlockConstructor
        }
    }
}
