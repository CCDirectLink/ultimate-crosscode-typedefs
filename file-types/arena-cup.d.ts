export interface ArenaFileData {
    core: Core;
    rounds: Round[];
}

export interface Core {
    type: "SOLO_CUP" | "TEAM_CUP" | "SOLO_CUSTOM" | "TEAM_CUSTOM";
    name: ig.LangLabel.Data;
    info: ig.LangLabel.Data;
    creator: ig.LangLabel.Data;
    condition?: string;
    difficulty: "1" | "2" | "3" | "4" | "5" | "6";
    music: string;
    rushMusic: string;
    noRush?: boolean;
    level: number;
    mods?: string[];
    banner: Banner;
}

export interface Round {
    name: ig.LangLabel.Data;
    objective: ig.LangLabel.Data;
    customCode?: boolean;
    points: number;
    platPoints: number;
    coins: number;
    camFocus: string;
    roundFocus: string;
    map: string;
    spawn: string;
    music?: string;
    bonuses?: Bonus[];
    waves?: Wave[];
    medal: number;
    speed?: number;
    //i am pretty sure these properties are not used - but better to have them than not.
    featuring?: ig.LangLabel.Data[];
    description?: ig.LangLabel.Data;
}


export interface Banner {
    src: string;
    offX: number;
    offY: number;
    width: number;
    height: number;
}

export type Bonus = {
    type: string;
} & {
    [objectives: string]: number;
}

export interface Wave {
    enemies: Enemy[];
    camFocus?: string;
}

export interface Enemy {
    group: string;
    party: string;
    face: string;
    marker: string;
    type: string;
    attribs: Record<string, any>;
    state?: string;
    level?: number;
}

export interface EnemyAlign {
    alignX: "LEFT" | "CENTER" | "RIGHT";
    alignY: "TOP" | "CENTER" | "BOTTOM";
    offset: EnemyOffset;
}

export interface EnemyOffset {
    x: number;
    y: number;
    z: number;
}