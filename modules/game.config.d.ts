export {};

declare global {
  namespace ig {
    interface LangOptions {
      systemFont?: string;
      useFor?: string;
      commaDigits?: boolean;
      fixedMsgWidth?: boolean;
      newlineAnywhere?: boolean;
      newlineException?: string[];
      newlineAfter?: string[];
      metrics?: typeof ig.SYSTEM_FONT_METRICS;
    }

    var LANG_DETAILS: { [locale: string]: ig.LangOptions };

    var SYSTEM_FONT_METRICS: { size: number[]; baseLine: number[] };

    enum TERRAIN {
      NORMAL = 1,
      METAL = 2,
      CARDBOARD = 3,
      EARTH = 4,
      GRASS = 5,
      WATER = 6,
      WOOD = 7,
      STONE = 8,
      METALSOLID = 9,
      SNOW = 10,
      ICE = 11,
      NOTHING = 12,
      QUICKSAND = 13,
      SHALLOW_WATER = 14,
      SAND = 15,
      COAL = 16,
      HOLE = 17,
      LASER = 18,
      METAL_HOLLOW = 19,
      SPIDERWEB = 20,
      HIGHWAY = 21,
      CRYSTAL = 22,
      BEACH_WATER = 23,
      BEACH_SAND = 24,
    }
    var TERRAIN_DEFAULT: ig.TERRAIN.NORMAL
  }
}
