// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export { };

declare global {
    namespace sc {
        interface DESTRUCTIBLE_TYPE_BASE {
            hitCount: number
            size: Vec3
            preBoom?: { sheet: string, name: string }
            boom?: { sheet: string, name: string }
            debris?: { sheet: string, name: string }
            debrisAngle?: number
            hitSide?: [number, number, number, number]
            collType?: ig.COLLTYPE
            onlyPerma?: boolean
            noBlinking?: boolean
            terrain?: ig.TERRAIN
            keyConsume?: string
            range?: { key: string, delay: number, padding: number, startDelay: number }
            hitSound?: ig.Sound
            anims: unknown

            hitCondition?(): boolean
        }
        var DESTRUCTIBLE_TYPE: {
            boxMedium: sc.DESTRUCTIBLE_TYPE_BASE
            boxMedNorth: sc.DESTRUCTIBLE_TYPE_BASE
            boxMedEast: sc.DESTRUCTIBLE_TYPE_BASE
            boxMedSouth: sc.DESTRUCTIBLE_TYPE_BASE
            boxMedWest: sc.DESTRUCTIBLE_TYPE_BASE
            boxLarge: sc.DESTRUCTIBLE_TYPE_BASE
            iceBlock: sc.DESTRUCTIBLE_TYPE_BASE
            bombBlock: sc.DESTRUCTIBLE_TYPE_BASE
            bombWallEast: sc.DESTRUCTIBLE_TYPE_BASE
            bombWallWest: sc.DESTRUCTIBLE_TYPE_BASE
            bombWallNorth: sc.DESTRUCTIBLE_TYPE_BASE
            keyWallNorth: sc.DESTRUCTIBLE_TYPE_BASE
            keyPillar: sc.DESTRUCTIBLE_TYPE_BASE
            keyPillarAR: sc.DESTRUCTIBLE_TYPE_BASE
            masterKeyWallColdDungeon: sc.DESTRUCTIBLE_TYPE_BASE
            masterKeyWallHeatDungeon: sc.DESTRUCTIBLE_TYPE_BASE
            masterKeyWallTreeDungeon: sc.DESTRUCTIBLE_TYPE_BASE
            masterKeyWallFinalDungeon: sc.DESTRUCTIBLE_TYPE_BASE
            autumnWall: sc.DESTRUCTIBLE_TYPE_BASE
            autumnWall2: sc.DESTRUCTIBLE_TYPE_BASE
            autumnWall3: sc.DESTRUCTIBLE_TYPE_BASE
        }
    }
    namespace ig.ENTITY {
        namespace Destructible {
            interface Settings extends ig.Entity.Settings {
                permaDestruct?: boolean
                onDestructIncrease?: string
                onPreDestructIncrease?: string
                desType: keyof typeof sc.DESTRUCTIBLE_TYPE
                enemyInfo?: sc.EnemyInfo
                blockNavMap?: boolean
            }
        }
        interface Destructible extends ig.AnimatedEntity {
            enemyInfo?: sc.EnemyInfo
            permaDestruct: boolean
            onDestructIncrease: string | null
            onPreDestructIncrease: string | null
            hitSide: [number, number, number, number]
            hitCount: number
            conditionFunction: unknown
        }
        interface DestructibleConstructor extends ImpactClass<Destructible> {
            new(x: number, y: number, z: number, settings: ig.ENTITY.Destructible.Settings): Destructible
        }
        var Destructible: DestructibleConstructor
    }
}
