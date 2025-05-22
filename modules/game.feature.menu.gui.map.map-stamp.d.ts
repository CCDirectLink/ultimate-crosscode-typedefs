// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum MAP_STAMPS {
      DEFAULT,
      CHEST,
      ENEMY,
      GREEN,
      SECRET,
      QUEST,
      UNKNOWN,
      XXX,
      ARROW_RIGHT,
      ARROW_LEFT,
      ARROW_UP,
      ARROW_DOWN,
      ARROW_DOWN_RIGHT,
      ARROW_DOWN_LEFT,
      ARROW_UP_RIGHT,
      ARROW_UP_LEFT,
    }
    interface StampGui extends ig.FocusGui {
      gfx: ig.Image;
      key: sc.MAP_STAMPS;
      icon: Vec2;
      floor: number;
      floorGui: sc.MapFloor;
      name: string;
      index: number;
      activated: boolean;

      setKey(this: this, key: sc.MAP_STAMPS): void;
      getDistanceToCursor(this: this): number;
    }
    interface StampGuiConstructor extends ImpactClass<StampGui> {
      new (
        key: sc.MAP_STAMPS,
        x: number,
        y: number,
        floor: number,
        index: number,
        floorGui: sc.MapFloor,
      ): StampGui;
    }
    var StampGui: StampGuiConstructor;
  }
}
