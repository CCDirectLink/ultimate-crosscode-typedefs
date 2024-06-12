// requires impact.base.actor-entity

export { }

declare global {
    namespace ig {
        interface EntityHideManager extends ig.Class {
            hideCondition: ig.VarCondition
            hideTimer: number
            hidden: boolean
            efficentMode: boolean

            isBusy(this: this): number
        }
        interface EntityHideManagerConstructor extends ImpactClass<EntityHideManager> {
            new(condition: string): EntityHideManager
        }
        var EntityHideManager: EntityHideManagerConstructor
    }
}
