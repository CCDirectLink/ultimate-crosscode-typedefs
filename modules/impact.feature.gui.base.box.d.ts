// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    namespace NinePatch {
      interface Tile {
        width: number;
        height: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
        offsets: Record<string, Vec2>;
      }
      interface Pattern {
        top: ig.ImagePattern;
        bottom: ig.ImagePattern;
        left: ig.ImagePattern;
        right: ig.ImagePattern;
        center: ig.ImagePattern;
      }
    }
    interface NinePatch extends ig.Class {
      tile: ig.NinePatch.Tile;
      skipTile: Record<number, boolean | number>;
      pattern: Record<number, ig.NinePatch.Pattern>;
      gfx: ig.Image;

      initPattern(this: this): void;
      draw(
        renderer: ig.GuiRenderer,
        width: number,
        height: number,
        tileOffset: string,
        offX?: Optional<number>,
        offY?: Optional<number>,
      ): void;
      drawComposite(
        renderer: ig.GuiRenderer,
        width: number,
        height: number,
        tileOffset: string,
        composite: string,
        offX?: Optional<number>,
        offY?: Optional<number>,
      ): void;
    }
    interface NinePatchConstructor extends ImpactClass<NinePatch> {
      new (path: string, tile: ig.NinePatch.Tile): NinePatch;
    }
    var NinePatch: NinePatchConstructor;

    interface BoxGui extends ig.GuiElementBase {
      gfx: ig.Image;
      ninepatch: ig.NinePatch;
      currentTileOffset: string;
      skipTile: Record<number, boolean | number>;
      flipped: boolean;
      flippedY: boolean;
    }
    interface BoxGuiConstructor extends ImpactClass<BoxGui> {
      new (
        width: number,
        height: number,
        flipped?: Optional<boolean>,
        ninepatch?: Optional<ig.NinePatch>,
      ): BoxGui;
    }
    var BoxGui: BoxGuiConstructor;
  }
}
