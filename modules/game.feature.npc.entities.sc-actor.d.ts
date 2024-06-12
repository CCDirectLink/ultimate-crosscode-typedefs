// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export { };

declare global {
    namespace sc {
        interface ACTOR_SOUND_BASE {
            jump?: ig.Sound
            land?: ig.Sound
            step1?: ig.Sound
            step2?: ig.Sound
            stepFx?: string
            stepFaceAlign?: boolean
            cancelOnChange?: boolean
        }
        var ACTOR_SOUND: {
            none: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
            }
            default: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
                [ig.TERRAIN.CARDBOARD]: ACTOR_SOUND_BASE
                [ig.TERRAIN.EARTH]: ACTOR_SOUND_BASE
                [ig.TERRAIN.GRASS]: ACTOR_SOUND_BASE
                [ig.TERRAIN.WOOD]: ACTOR_SOUND_BASE
                [ig.TERRAIN.STONE]: ACTOR_SOUND_BASE
                [ig.TERRAIN.METALSOLID]: ACTOR_SOUND_BASE
                [ig.TERRAIN.METAL_HOLLOW]: ACTOR_SOUND_BASE
                [ig.TERRAIN.SNOW]: ACTOR_SOUND_BASE
                [ig.TERRAIN.ICE]: ACTOR_SOUND_BASE
                [ig.TERRAIN.SAND]: ACTOR_SOUND_BASE
                [ig.TERRAIN.QUICKSAND]: ACTOR_SOUND_BASE
                [ig.TERRAIN.SHALLOW_WATER]: ACTOR_SOUND_BASE
                [ig.TERRAIN.LASER]: ACTOR_SOUND_BASE
                [ig.TERRAIN.CRYSTAL]: ACTOR_SOUND_BASE
                [ig.TERRAIN.BEACH_SAND]: ACTOR_SOUND_BASE
                [ig.TERRAIN.BEACH_WATER]: ACTOR_SOUND_BASE
            }
            defaultQuiet: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
            }
            giantMashine: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
            }
            colDngBoss: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
            }
            slime: {
                [ig.TERRAIN.NORMAL]: ACTOR_SOUND_BASE
            }
        }
        enum ACTOR_DUST {
            NONE = 0,
            DEFAULT = 1,
        }
        interface ActorEntity extends ig.ActorEntity {
            soundType: 'default'
            dustType: sc.ACTOR_DUST
            stepFx: { frames: number[], lastFrame: number, effects: ig.EffectSheet, prevTerrain: Nullable<ig.TERRAIN>, prevEffect: Nullable<ig.ENTITY.Effect> }
            nav: { path: ig.NavPath, failTimer: number, lastFailCount: number }
            tooHighToFall: boolean
            stepStats: { terrain: ig.TERRAIN, centerTerrain: number }
            influencer: ig.Influencer

            onTerrainUpdate(this: this): void
            onMoveEffect(this: this, type: string): void
            onJump(this: this, addedHeight: number, ignoreSounds?: boolean): void
            onNavigationFailed(this: this, failTimer: number): void
        }
        interface ActorEntityConstructor extends ImpactClass<ActorEntity> {
            new(x: number, y: number, z: number, settings: ig.Entity.Settings): sc.ActorEntity
        }
        var ActorEntity: ActorEntityConstructor
    }
}
