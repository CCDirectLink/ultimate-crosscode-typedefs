// requires impact.base.game
// requires game.feature.skills.skills

export {};

declare global {
    namespace sc {
        var SKILLS_DISTANCE_MULTIPLIER: number;
        enum SKILLS_DIRECTION {
            STRAIGHT = 0,
            CW_45 = 1,
            CW_90 = 2,
            CW_135 = 3,
            CCW_45 = 4,
            CCW_90 = 5,
            CCW_135 = 6
        }

        interface SkillTree extends ig.SingleLoadable {
            version: number;
            skills: sc.BaseSkill[]
        }
    }
}