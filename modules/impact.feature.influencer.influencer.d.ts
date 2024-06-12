export { }

declare global {
    namespace ig {
        interface Influencer extends ig.Class {
            entity: ig.Entity
            entries: unknown[]
            callbacks: unknown[]

            onUpdate(this: this): void
        }
        interface InfluencerConstructor extends ImpactClass<Influencer> {
            new(entity: ig.Entity): Influencer
        }
        var Influencer: InfluencerConstructor
    }
}
