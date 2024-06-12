export { }

declare global {
    namespace ig {
        interface Map extends ig.Class {
            tilesize: number
            width: number
            height: number
            data: number[][]
            zHeight: number
            zTileOff: number
            moveSpeed: Vec2
        }
        interface MapConstructor extends ImpactClass<Map> {
            new(data: sc.MapModel.Map, zHeight: number): Map
        }
        var Map: MapConstructor

        interface ChunkedMap extends ig.Map {
            scroll: Vec2
            distance: number
            yDistance: number
            repeat: boolean
            enabled: boolean
            preRender: boolean
            screenRender: boolean
            screenBuffer: boolean
            preRenderedChunks: HTMLCanvasElement[][]
            chunkSizeX: number
            chunkSizeY: number
            debugDraw: boolean
            lighter: boolean
            merged: boolean
        }
        interface ChunkedMapConstructor extends ImpactClass<ChunkedMap> {
            new(data: sc.MapModel.Map, zHeight: number): ChunkedMap
        }
        var ChunkedMap: ChunkedMapConstructor
    }
}
