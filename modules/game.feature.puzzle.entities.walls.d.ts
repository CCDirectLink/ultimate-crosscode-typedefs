// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
    namespace sc {
        enum WALL_COLL_TYPES {
            BLOCK = 0,
            PBLOCK = 1,
            NPBLOCK = 2,
        }
        enum WALL_HORIZONTAL_ENDS {
            CONTINUE = 0,
            STOP = 1,
        }
        enum WALL_VERTICAL_ENDS {
            CONTINUE = 0,
            STOP = 1,
            CORNER_LEFT = 2,
            CORNER_RIGHT = 3,
        }
    }
    namespace ig.ENTITY {
        namespace WallBase {
            interface Settings extends ig.Entity.Settings {
                noNavMapBlock: boolean;
                collType: keyof typeof sc.WALL_COLL_TYPES;
                skipRender: boolean;
                condition: string;
                wallZHeight: number;
            }
        }
        interface WallBase extends ig.Entity {

        }
        interface WallBaseConstructor extends ImpactClass<WallBase> {
            new (x: number, y: number, z: number, settings: WallBase.Settings): WallBase
        }
        let WallBase: WallBaseConstructor;

        namespace WallHorizontal {
            interface Settings extends ig.ENTITY.WallBase.Settings {
                leftEnd: keyof typeof sc.WALL_HORIZONTAL_ENDS;
                rightEnd: keyof typeof sc.WALL_HORIZONTAL_ENDS;
            }
        }
        interface WallHorizontal extends ig.ENTITY.WallBase {

        }
        interface WallHorizontalConstructor extends ImpactClass<WallBase> {
            new (x: number, y: number, z: number, settings: WallHorizontal.Settings): WallHorizontal
        }
        let WallHorizontal: WallBaseConstructor;

        namespace WallVertical {
            interface Settings extends ig.ENTITY.WallBase.Settings {
                topEnd: keyof typeof sc.WALL_VERTICAL_ENDS;
                bottomEnd: keyof typeof sc.WALL_VERTICAL_ENDS;
            }
        }
        interface WallVertical extends ig.ENTITY.WallBase {

        }
        interface WallVerticalConstructor extends ImpactClass<WallBase> {
            new (x: number, y: number, z: number, settings: WallVertical.Settings): WallVertical
        }
        let WallVertical: WallBaseConstructor;

        namespace WallBlocker {
            interface Settings extends ig.Entity.Settings {
                collType: keyof typeof sc.WALL_COLL_TYPES;
            }
        }
        interface WallBlocker extends ig.Entity {
            colorGfx: ig.DoubleColor;
        }
        interface WallBlockerConstructor extends ImpactClass<WallBlocker> {
            new (x: number, y: number, z: number, settings: WallBlocker.Settings): WallBlocker;
        }
        let WallBlocker: WallBlockerConstructor;
    }
}