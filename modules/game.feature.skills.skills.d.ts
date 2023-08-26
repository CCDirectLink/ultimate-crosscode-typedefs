// requires impact.base.game
// requires game.feature.combat.model.combat-params

export {};

declare global {
    namespace sc {
        enum SKILL_STATES {
            NORMAL = 0,
            OR_BRANCH = 1,
            OR_BRANCH_FIRST = 2,
        }

        interface BaseSkill extends ig.Class {
            id: number;
            level: number;
            element: sc.ELEMENT;
            type: sc.SKILL_STATES;
            skillKey: string;
            icon: number;

            applyOnConfig(this: this, elementConfig: Record<sc.ELEMENT, sc.PlayerSubConfig>): void;
            getName(this: this): string;
            getDescription(this: this): string;
            getCPCost(this: this): number;
            _getElementConfig(this: this, elementConfigs: Record<sc.ELEMENT, sc.PlayerSubConfig>): sc.PlayerSubConfig;
        }
        interface BaseSkillConstructor extends ImpactClass<BaseSkill> {}
        var BaseSkill: BaseSkillConstructor;

        interface StatSkill extends sc.BaseSkill {
            statType: sc.CombatParams.ParamName;
        }
        interface StatSkillConstructor extends ImpactClass<StatSkill> {}
        var StatSkill: StatSkillConstructor;

        interface ElementSkill extends sc.BaseSkill {
            counter: boolean;
        }
        interface ElementSkillConstructor extends ImpactClass<ElementSkill> {}
        var ElementSkill: ElementSkillConstructor;

        namespace SpecialSkill {
            type SkillType = "ATTACK" | "THROW" | "GUARD" | "DASH";
            type BranchType = "A" | "B"
        }
        interface SpecialSkill extends sc.BaseSkill {
            skillType: SpecialSkill.SkillType;
            branchType: SpecialSkill.BranchType;

            getCombatArtLevel(this: this, type: SpecialSkill.SkillType, element: sc.ELEMENT): number;
            _getElementName(this: this): keyof typeof sc.ELEMENT;
        }
        interface SpecialSkillConstructor extends ImpactClass<SpecialSkill> {}
        var SpecialSkill: SpecialSkillConstructor;
    }
}