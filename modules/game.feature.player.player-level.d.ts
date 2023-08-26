export {};

declare global {
    namespace sc {
        interface LevelCurve {
            getFactor(playerLevel: number, otherLevel: number): number;
            ignorePartyCount?: boolean;
        }
        interface LEVEL_CURVES {
            REGULAR: LevelCurve;
            STATIC_REGULAR: LevelCurve;
            QUEST: LevelCurve;
        }
        let LEVEL_CURVES: LEVEL_CURVES;

        //note: not an impact class!
        interface PlayerLevelTools {
            computeBaseParams(params: sc.CombatParams.BaseParams, stats: sc.PlayerConfig.Stats, level: number): void;
            computerExp(exp: number, playerLevel: number, enemyLevel: number, bonus: number, zeroEXP: boolean, levelCurve: sc.LevelCurve): number;
            updateEquipStats(equip: sc.PlayerModel.Equip, equipParams: sc.CombatParams.BaseParams, equipModifiers: Record<keyof sc.MODIFIERS, number>): void;
            autoequip(model: sc.PlayerModel, equipSequence: sc.PlayerConfig.AutoEquip, prevEquipLevel: number, playerLevel: number, addItem: boolean, ignoreConditions: boolean): number;
            equip(dest: sc.PlayerModel.Equip, bodypart: keyof typeof sc.MENU_EQUIP_BODYPART, itemID: number): number;
        }
        let PlayerLevelTools: PlayerLevelTools;
    }
}