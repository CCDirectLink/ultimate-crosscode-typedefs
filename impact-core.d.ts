export {};

declare global {
  interface Vec2 {
    x: number;
    y: number;
  }

  namespace Vec2 {
    function create(otherVec?: Nullable<Vec2>): Vec2;
    function createC(x?: Nullable<number>, y?: Nullable<number>): Vec2;
    function assign(v1: Vec2, v2: Vec2): Vec2;
    function assignC(v: Vec2, x?: Nullable<number>, y?: Nullable<number>): Vec2;
    function add(v1: Vec2, v2: Vec2, dest?: Nullable<Vec2>): Vec2;
    function addMulF(v1: Vec2, v2: Vec2, factor: number, dest?: Nullable<Vec2>): Vec2;
    function addC(v1: Vec2, x: number, y?: Nullable<number>, dest?: Nullable<Vec2>): Vec2;
    function sub(v1: Vec2, v2: Vec2, dest?: Nullable<Vec2>): Vec2;
    function subC(v1: Vec2, x: number, y?: Nullable<number>, dest?: Nullable<Vec2>): Vec2;
    function mul(v1: Vec2, v2: Vec2, dest?: Nullable<Vec2>): Vec2;
    function mulC(v: Vec2, x: number, y?: Nullable<number>, dest?: Nullable<Vec2>): Vec2;
    function mulF(v1: Vec2, f: number, dest?: Vec2): Vec2;
    function div(v1: Vec2, v2: Vec2, dest?: Nullable<Vec2>): Vec2;
    function divC(v: Vec2, x: number, y?: Nullable<number>, dest?: Nullable<Vec2>): Vec2;
    function dot(v1: Vec2, v2: Vec2): number;
    function dotR(v1: Vec2, v2: Vec2): number;
    //the length function behaves differently depending if newLength is passed in.
    function length(v: Vec2): number;
    function length(v: Vec2, newLength: number, dest?: Nullable<Vec2>): Vec2;
    function limit(v: Vec2, min: number, max: number, dest?: Nullable<Vec2>): Vec2;
    function normalize(v: Vec2, dest?: Nullable<Vec2>): Vec2;
    function clockangle(v: Vec2): number;
    function angle(v1: Vec2, v2: Vec2): number;
    function angle3Point(start: Vec2, dest1: Vec2, dest2: Vec2): number;
    function areClockwise(v1: Vec2, v2: Vec2): boolean;
    function isAngleInRange(testVec: Vec2, destVec: Vec2, startAngle: number, endAngle: number): boolean;
    function rotate(v: Vec2, angle: number, dest?: Vec2): Vec2;
    function rotate90CW(v: Vec2, dest?: Vec2): Vec2
    function rotate90CCW(v: Vec2, dest?: Vec2): Vec2
    function flip(v: Vec2, dest?: Vec2): Vec2; 
    function rotateToward(v1: Vec2, v2: Vec2, maxAngle: number): boolean;
    function equal(v1: Vec2, v2: Vec2): boolean;
    function epsilonEquals(v1: Vec2, v2: Vec2, epsilon: number): boolean;
    function distance(v1: Vec2, v2: Vec2): number;
    function lengthVec(v: Vec2): number;
    function distanceC(x1: number, y1: number, x2: number, y2: number): number
    function squareDistance(v1: Vec2, v2: Vec2): number;
    function lerp(v1: Vec2, v2: Vec2, i: number, dest?: Vec2): number;
    function isZero(v: Vec2): boolean
    function lengthVec(v: Vec2): number;
    function min(v1: Vec2, v2: Vec2, dest?: Vec2): Vec2;
    function minC(v: Vec2, x: number, y: number, dest?: Vec2): Vec2;
    function max(v1: Vec2, v2: Vec2, dest?: Vec2): Vec2;
    function maxC(v: Vec2, x: number, y: number, dest?: Vec2): Vec2;
    function print(x: number, y: number): string;
    function round(v: Vec2, maxAngle: number): Vec2;
  }

  interface Vec3 {
    x: number;
    y: number;
    z: number;
  }

  namespace Vec3 {
    function create(otherVec?: Nullable<Vec3>): Vec3;
    function createC(x?: number, y?: number, z?: number): Vec3;
    function assign(v1: Vec3, v2: Vec3): Vec3;
    function assignC(v: Vec3, x?: number, y?: number, z?: number): Vec3;
    function add(v1: Vec3, v2: Vec3, dest?: Vec3): Vec3
    function addMulF(v1: Vec3, v2: Vec3, factor: number, dest?: Vec3): Vec3;
    function addC(v1: Vec3, x?: number, y?: number, z?: number, dest?: Vec3): Vec3;
    function sub(v1: Vec3, v2: Vec3, dest?: Vec3): Vec3
    function subC(v1: Vec3, x?: number, y?: number, z?: number, dest?: Vec3): Vec3;
    function mul(v1: Vec3, v2: Vec3, dest?: Vec3): Vec3;
    function mulC(v1: Vec3, x?: number, y?: number, z?: number, dest?: Vec3): Vec3;
    function mulF(v1: Vec3, f: number, dest?: Vec3): Vec3;
    function div(v1: Vec3, v2: Vec3, dest?: Vec3): Vec3;
    function divC(v1: Vec3, x?: number, y?: number, z?: number, dest?: Vec3): Vec3;
    function dot(v1: Vec3, v2: Vec3): number;
    function length(v: Vec3, newLength?: number, dest?: Vec3): number;
    function normalize(v: Vec3, dest?: Vec3): void;
    function flip(v: Vec3, dest?: Vec3): Vec3; 
    function equal(v1: Vec3, v2: Vec3): boolean;
    function distance(v1: Vec3, v2: Vec3): number;
    function lerp(v1: Vec3, v2: Vec3, i: number, dest?: Vec3): number;
    function clockangle(a: Vec3): Vec3;
    function print(x: number, y: number, z: number): string;
    function isZero(v: Vec3): boolean;
  }

  interface KeySpline {
    get(t: number): number;
  }
  // note that `KeySpline` is not an impact class
  interface KeySplineConstructor {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    new (x1: number, y1: number, x2: number, y2: number): KeySpline;
  }
  var KeySpline: KeySplineConstructor;

  namespace KEY_SPLINES {
    var EASE_IN_OUT: KeySpline;
    var EASE_OUT: KeySpline;
    var EASE_IN: KeySpline;
    var EASE: KeySpline;
    var EASE_SOUND: KeySpline;
    var LINEAR: KeySpline;
    var JUMPY: KeySpline;
    var EASE_OUT_STRONG: KeySpline;
    var EASE_IN_STRONG: KeySpline;
  }

  namespace ig {
    var currentLang: string;

    namespace Resource {
      type LoadCallback = (type: string, path: string, success: boolean) => void;
    }
    interface Resource {
      cacheType: string;
      path: string;
      load(this: this, loadCallback?: ig.Resource.LoadCallback): void;
    }
    var resources: ig.Resource[];

    var ready: boolean;
    var loading: boolean;
    var baked: boolean;

    var nocache: number;
    var root: string;
    var lib: string;

    interface Module {
      name?: string;
      requires: string[];
      loaded: boolean;
      body: (() => void) | null;
    }
    var modules: Record<string, ig.Module>;
    var _current: ig.Module | null;
    var _waitForOnload: number;

    function $new<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    function $new(tagName: string): HTMLElement;

    function copy<T>(object: T): T;
    function merge<T, U>(original: T, extended: U, noArrayMerge?: Nullable<boolean>): T & U;

    function module(name: string): typeof ig;
    function requires(...names: string[]): typeof ig;
    function defines(body: () => void): void;

    function addResource(resource: ig.Resource): void;
    function getCacheSuffix(): string;

    function addGameAddon(callback: () => ig.GameAddon): void;
    function initGameAddons(): ig.GameAddon[];

    function _execModules(): void;
    function _loadScript(name: string, requirer?: string): void;

    interface Class {
      readonly classId: number;
    }
    interface ClassConstructor extends ImpactClass<Class> {
      new (): Class;
    }
    var Class: ClassConstructor;

    var langFileList: string[];

    function log(...args: unknown[]): void;
    function blog(arg: string): string;
    function debug(...args: unknown[]): void;
    function warn(...args: unknown[]): void;
    function info(...args: unknown[]): void;

    function error(...args: unknown[]): void;

    interface Config<T = unknown> extends ig.Class {
      _data: T;

      copy(this: this): this;
    }
    interface ConfigConstructor<T = unknown> extends ImpactClass<Config<T>> {
      new (data: T): Config<T>;
    }
    var Config: ConfigConstructor;

    enum PLATFORM_TYPES {
      UNKNOWN = 0,
      DESKTOP = 1,
      BROWSER = 2,
      MOBILE = 3,
      WIIU = 4,
    }

    var OS: string
    var platform: ig.PLATFORM_TYPES;
    function getPlatformName(platformId: ig.PLATFORM_TYPES): 'Unknown' | 'Dekstop' | 'Browser' | 'Mobile' | 'WiiU' | 'Say Wat?'
    var browser: string
    var browserVersion: string
    var nwjsVersion: string
    var nwjs64: boolean

    interface Perf {
        update: boolean;
        deferredUpdate: boolean;
        draw: boolean;
        drawSprites: boolean;
        spriteFilter: boolean;
        spriteShadow: boolean;
        spriteOverlapSolver: boolean;
        smoothMapRendering: boolean;
        showImageAtlas: boolean;
        showHitBoxes: boolean;
        gui: boolean;
        lighting: boolean;
        weather: boolean;
        navigationMarker: boolean;
        overlay: boolean;
        envParticles: boolean;
        fullEnemyFibula: boolean;
        fullLoreList: boolean;
        hitNumberFactors: boolean;
        aiSmart: boolean;
        grantArenaBonus: boolean;
        enableArenaRound: boolean;
        gameSense: boolean;
        skipDmgModifiers: boolean;
    }
    var perf: Perf;
  }

  namespace sc {}

  interface Number {
    map(min1: number, max1: number, min2: number, max2: number): number;
    limit(min: number, max: number): number;
    round(precision: number): number;
    floor(): number;
    ceil(): number;
    toInt(): number;
  }

  interface Array<T> {
    erase(item: T): this;
    last(): T;
    intersect(otherArray: T[]): boolean;
    random(): T;
  }

  interface String {
    toPath(prefix: string, suffix: string): string;
    toDir(prefix: string): string;
    toKey(prefix: string, suffix: string): string;
    toCamel(): string;
  }

  var IG_ROOT: string;
  var IG_GAME_CACHE: number;
  var IG_GAME_DEBUG: boolean;
  var IG_GAME_BETA: boolean;
  var IG_SOUND_VOLUME: number;
  var IG_MUSIC_VOLUME: number;
  var IG_WEB_AUDIO_BGM: boolean;
  var IG_FORCE_HTML5_AUDIO: boolean;
  var IG_KEEP_WINDOW_FOCUS: boolean;
  var IG_LANG: string;
  var IG_ENTITY_KILL_CALL: boolean;
  var IG_IGNORE_OPTIONS: boolean;
  var IG_SCREEN_MODE: number;
  var IG_USE_WEBAUDIO: boolean;
  var IG_GAME_SCALE: number;
  var IG_WIDTH: number;
  var IG_HEIGHT: number;
  var MENU_ON_GAME_START: string;
  var IG_LOAD_SLOT: string;
  var IG_GAME_FPS: number;
  var SC_SKIP_TITLE: boolean;
  var LOAD_LEVEL_ON_GAME_START: string | undefined | null;
  var MARKER_ON_GAME_START: string | undefined | null;
}
