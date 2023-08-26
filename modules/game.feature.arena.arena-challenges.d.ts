// requires impact.base.game

export {}

declare global {
    namespace sc {
        interface ArenaChallengeBase extends ig.Class {
            state: boolean;
            icon: number;
            callback?: () => void;
            toggle(this: this, state?: boolean): void;
        }
        interface ArenaChallengeBaseConstructor extends ImpactClass<ArenaChallengeBase> {
            new (icon: number, callback?: (state?: boolean) => void): ArenaChallengeBase;
        }
        var ArenaChallengeBase: ArenaChallengeBaseConstructor;

        interface ArenaChallengePlayerBase extends sc.ArenaChallengeBase {
            core: keyof typeof sc.PLAYER_CORE;
            onToggle(this: this): void;
        }
        interface ArenaChallengePlayerBaseConstructor extends ImpactClass<ArenaChallengePlayerBase> {
            new (core: keyof typeof sc.PLAYER_CORE, icon: number): ArenaChallengePlayerBase;
        }
        var ArenaChallengePlayerBase: sc.ArenaChallengePlayerBaseConstructor;

        interface ARENA_CHALLENGES {
            NO_MELEE: sc.ArenaChallengePlayerBase;
            NO_RANGED: sc.ArenaChallengePlayerBase;
            NO_DASH: sc.ArenaChallengePlayerBase;
            NO_GUARD: sc.ArenaChallengePlayerBase;
            NO_COMBAT_ARTS: sc.ArenaChallengePlayerBase;

            NO_HP_REGEN: sc.ArenaChallengeBase;
            NO_ITEMS: sc.ArenaChallengeBase;
            LEA_MUST_DIE: sc.ArenaChallengeBase;
            ENVIRO_HAZARD: sc.ArenaChallengeBase;
            PVP_BATTLE: sc.ArenaChallengeBase;
            WEAPON_ADJUST: sc.ArenaChallengeBase;
        }

        var ARENA_CHALLENGES: ARENA_CHALLENGES;
    }
}