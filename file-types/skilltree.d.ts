export type SkillTreeFileData = Record<string, SkillNode[]>

export type SkillNode = SkillNodeSkill | SkillNodeOr

export interface SkillNodeBase {
    distance: number;
    direction: SkillDirection;
    children: SkillNode[]
    id: number;
}

export interface SkillNodeSkill extends SkillNodeBase {
    level: number;
    skill: Skill;
}

export interface SkillNodeOr extends SkillNodeBase {
    orBranch: OrBranch;
}

export interface Skill {
    type: string
}

export interface OrBranch {
    direction:  SkillDirection;
    levels: number[]
    left: Skill[]
    right: Skill[]
}

export type SkillDirection = "STRAIGHT" | "CW_45" | "CW_90" | "CW_135" | "CCW_45" | "CCW_90" | "CCW_135";