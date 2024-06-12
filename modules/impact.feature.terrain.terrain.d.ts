// requires impact.base.loader
// requires game.config

export { }

declare global {
    namespace ig {
        interface Terrain extends ig.SingleLoadable {
            tilesetIds: Record<string, (number | string)[]>

            isFallTerrain(this: this, terrain: ig.TERRAIN): boolean
            getTerrain(this: this, coll: ig.CollEntry, precise?: boolean, andBelow?: boolean): ig.TERRAIN
            getMapTerrain(this: this, x: number, y: number, level: number, sizeX: number, sizeY: number): ig.TERRAIN
        }
        interface TerrainConstructor extends ImpactClass<Terrain> {
            new(): Terrain
        }
        var Terrain: TerrainConstructor
        var terrain: Terrain
    }
}
