// requires impact.base.game
// requires game.feature.model.game-model
// requires game.feature.interact.gui.interact-gui

export {};

declare global {
  namespace sc {
    enum INTERACT_ENTRY_STATE {
      HIDDEN = 0,
      AWAY = 1,
      NEAR = 2,
      BLOCKED = 3,
      FOCUS = 4,
      RUNNING = 5,
    }

    interface MapInteractIcon extends ig.Class {}
    interface MapInteractIconConstructor extends ImpactClass<MapInteractIcon> {
      new (
        tilesheet: ig.TileSheet,
        anims: Partial<Record<keyof typeof sc.INTERACT_ENTRY_STATE, number[]>>,
        frameTime: number,
      ): MapInteractIcon;
    }
    var MapInteractIcon: MapInteractIconConstructor;

    interface MapInteractEntry extends ig.Class {
      setIcon(this: this, icon: sc.MapInteractIcon): void;
    }
    interface MapInteractEntryConstructor extends ImpactClass<MapInteractEntry> {}
    var MapInteractEntry: MapInteractEntryConstructor;
  }
}
