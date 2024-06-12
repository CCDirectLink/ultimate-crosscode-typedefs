// requires impact.base.game

export { }

declare global {
    namespace ig {
        interface NavPath extends ig.Class {
            mapVersion: number
            searcher: unknown
            startRelativeVel: number
            targetEntity: ig.Entity
            targetPos: Vec3
            retargetPos: Vec3
            retargetNode: unknown
            maxDistance: number
            precise: boolean
            options: unknown
            path: unknown
            pathIdx: number
            pathLength: number
            nextNodeData: { startPos: Vec2, endPos: Vec2, jump: boolean, height: number },
            overNodePass: boolean
            pathComplete: boolean
            triedNodePassChange: boolean
            triedRandom: number
            doBackUp: boolean
            triedBackUp: number
            avoidTarget: Vec2
            avoidTarget2: Vec2
            firstMovement: boolean
            targetDir: Vec2
            targetDist: number
            failCount: number
            wrongNodeTimer: number
            lastSideWayDir: Vec2
        }
        interface NavPathConstructor extends ImpactClass<NavPath> {
            new(searcher: unknown): NavPath
        }
        var NavPath: NavPathConstructor
    }
}
