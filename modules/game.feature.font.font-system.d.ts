// requires impact.base.font
// requires impact.base.game
// requires game.feature.combat.stat-change

export {};

declare global {
  namespace sc {
    enum FONT_COLORS {
      RED,
      GREEN,
      PURPLE,
      GREY,
      ORANGE,
    }
    enum GAMEPAD_ICON_STYLE {
      XBOX = 0,
      PS3 = 1,
    }

    interface FontSystem extends ig.GameAddon {
      font: ig.MultiFont;
      smallFont: ig.MultiFont;
      tinyFont: ig.MultiFont;
      gamepadIconStyle: sc.GAMEPAD_ICON_STYLE

      changeKeyCodeIcon(this: this, action: LiteralUnion<ig.Input.KnownAction>, key: ig.KEY): void;
    }
    interface FontSystemConstructor extends ImpactClass<FontSystem> {
      new (): FontSystem;
    }
    var FontSystem: FontSystemConstructor;
    var fontsystem: sc.FontSystem;
  }
}
