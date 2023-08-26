// requires impact.base.game

export {};

declare global {
    namespace ig {
        let MAP_STYLES: Record<string, MapStyle.MapStyleEntry>;
        namespace MapStyle {
            namespace MapStyleType {
                namespace Map {
                    interface TeleportField {
                        x: number;
                        y: number;
                        xCount: number;
                        zHeight: number;
                    }
                    interface DoorGlow {
                        x: number;
                        y: number;
                        xCount: number;
                        sideX?: number;
                        sideY?: number;
                    }
                    interface DoorVariationGlow {
                        x: number;
                        y: number;
                        xCount: number;
                    }
                    interface DoorVariation {
                        x: number;
                        y: number;
                        doorMat: boolean;
                        doorGlow?: DoorVariationGlow;
                    }
                }
                interface Map {
                    sheet: string;
                    hasDoorMat: boolean;
                    teleportField?: Map.TeleportField;
                    doorGlow?: Map.DoorGlow;
                    doorVariations?: Record<string, Map.DoorVariation>;
                    doorSound?: string;
                }

                interface Puzzle {
                    sheet: string;
                }

                interface Puzzle2 {
                    sheet: string;
                }

                interface Effect {
                    sheet: string;
                }

                namespace Walls {
                    interface Colors {
                        blockFront: string;
                        blockTop: string;
                        pBlockFront: string;
                        pBlockTop: string;
                        npBlockFront: string;
                        npBlockTop: string;
                    }
                }
                interface Walls {
                    colors: Walls.Colors;
                    alpha?: number;
                }

                interface PuzzleElement {
                    sheet: string;
                    x: number;
                    y: number;
                }
                interface WaterBlock extends PuzzleElement {
                    puddleX: number;
                    puddleY: number;
                }
                interface Lorry {
                    sheet: string;
                    railX: number;
                    railY: number;
                    lorryX: number;
                    lorryY: number;
                }
                interface Destruct {
                    sheet: string;
                }
            }
            interface MapStyleTypes {
                map: MapStyleType.Map;
                puzzle: MapStyleType.Puzzle;
                puzzle2: MapStyleType.Puzzle2;
                walls: MapStyleType.Walls;
                effect: MapStyleType.Effect;
                quickSand: MapStyleType.PuzzleElement;
                pipes: MapStyleType.PuzzleElement;
                pipeSwitch: MapStyleType.PuzzleElement;
                propeller: MapStyleType.PuzzleElement;
                magnet: MapStyleType.PuzzleElement;
                tesla: MapStyleType.PuzzleElement;
                teslaSwitch: MapStyleType.PuzzleElement;
                anticompressor: MapStyleType.PuzzleElement;
                dynPlatformSmall: MapStyleType.PuzzleElement;
                dynPlatformMedium: MapStyleType.PuzzleElement;
                rotateBlocker: MapStyleType.PuzzleElement;
                waveSwitch: MapStyleType.PuzzleElement;
                waveblock: MapStyleType.PuzzleElement;
                waterblock: MapStyleType.WaterBlock;
                bouncer: MapStyleType.PuzzleElement;
                destruct: MapStyleType.Destruct;
                lorry: MapStyleType.Lorry;
            }

            type MapStyleEntry = PartialRecord<string, MapStyleTypes>;
        }
        interface MapStyle extends ig.GameAddon {
            get<K extends keyof MapStyle.MapStyleTypes>(this: this, contentType: K): MapStyle.MapStyleTypes[K];
        }
        interface MapStyleConstructor extends ImpactClass<MapStyle> {
            new (): MapStyle;

            registerStyle<K extends keyof MapStyle.MapStyleTypes>(name: string, contentType: K, data: MapStyle.MapStyleTypes[K]): void;
        }
        let MapStyle: MapStyleConstructor;
        let mapStyle: MapStyle;
    }
}