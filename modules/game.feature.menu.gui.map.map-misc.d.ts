// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface LandmarkGui extends ig.FocusGui {
      map: sc.AreaLoadable.Map;
    }
    interface LandmarkGuiConstructor extends ImpactClass<LandmarkGui> {
      new (
        key: string,
        landmark: any, // TODO
        floor: number,
        map: any, // TODO
        area: string,
      ): LandmarkGui;
    }
    var LandmarkGui: LandmarkGuiConstructor;

    interface MapNameGui extends ig.BoxGui {}
    interface MapNameGuiConstructor extends ImpactClass<MapNameGui> {
      new (): MapNameGui;
    }
    var MapNameGui: MapNameGuiConstructor;

    interface WorldmapAreaName extends ig.GuiElementBase {
      gfx: ig.Image;
      name: sc.MapNameGui;
      hasText: boolean;

      setText(this: this, text: sc.TextLike, wait?: Optional<boolean>, skip?: Optional<boolean>): void;
    }
    interface WorldmapAreaNameConstructor extends ImpactClass<WorldmapAreaName> {
      new (): WorldmapAreaName;
    }
    var WorldmapAreaName: WorldmapAreaNameConstructor;

    interface MapChestDisplay extends ig.GuiElementBase {
      current: sc.NumberGui;
      max: sc.NumberGui;
      _oldCount: number;
      _oldMax: number;
    }
    interface MapChestDisplayConstructor extends ImpactClass<MapChestDisplay> {
      new (): MapChestDisplay;
    }
    var MapChestDisplay: MapChestDisplayConstructor;
  }
}
