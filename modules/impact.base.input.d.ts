export {};

declare global {
  namespace ig {
    enum KEY {
      MOUSE1,
      MOUSE2,
      MWHEEL_UP,
      MWHEEL_DOWN,
      BACKSPACE,
      TAB,
      ENTER,
      PAUSE,
      CAPS,
      ESC,
      SPACE,
      PAGE_UP,
      PAGE_DOWN,
      END,
      HOME,
      LEFT_ARROW,
      UP_ARROW,
      RIGHT_ARROW,
      DOWN_ARROW,
      INSERT,
      DELETE,
      _0,
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X,
      Y,
      Z,
      NUMPAD_0,
      NUMPAD_1,
      NUMPAD_2,
      NUMPAD_3,
      NUMPAD_4,
      NUMPAD_5,
      NUMPAD_6,
      NUMPAD_7,
      NUMPAD_8,
      NUMPAD_9,
      MULTIPLY,
      ADD,
      SUBSTRACT,
      DECIMAL,
      DIVIDE,
      F1,
      F2,
      F3,
      F4,
      F5,
      F6,
      F7,
      F8,
      F9,
      F10,
      F11,
      F12,
      SHIFT,
      CTRL,
      ALT,
      EQUAL,
      PLUS,
      COMMA,
      MINUS,
      PERIOD,
      SEMICOLON,
      UE,
      GRAVE_ACCENT,
      OE,
      SLASH,
      HASH,
      BRACKET_OPEN,
      SZ,
      BACKSLASH,
      BRACKET_CLOSE,
      SINGLE_QUOTE,
      AE,
    }

    enum INPUT_DEVICES {
      KEYBOARD_AND_MOUSE = 1,
      GAMEPAD = 2,
    }

    namespace Input {
      interface KnownActions {
        back: true;
        menu: true;
        confirm: true;
        quick: true;
        dash2: true;
        pause: true;
        special: true;
        guard: true;
        melee: true;
        left: true;
        up: true;
        right: true;
        down: true;
        cold: true;
        shock: true;
        heat: true;
        wave: true;
        neutral: true;
        help2: true;
        'circle-right': true;
        'skip-cutscene': true;
        help: true;
        help4: true;
        help3: true;
        'circle-left': true;
        langedit: true;
        snapshot: true;
        savedialog: true;
        fullscreen: true;
        aim: true;
        dash: true;
        scrollUp: true;
        scrollDown: true;
      }

      type KnownAction = keyof ig.Input.KnownActions;
    }

    interface Input extends ig.Class {
      bindings: Record<ig.KEY, ig.Input.KnownAction> & Record<ig.KEY, string>;
      actions: Record<ig.KEY, boolean>;
      mouse: Vec2;
      ignoreKeyboard: boolean;
      
      keydown(this: this, action: LiteralUnion<ig.Input.KnownAction>): boolean;
      bind(this: this, key: ig.KEY, action: LiteralUnion<ig.Input.KnownAction>): void;
      unbind(this: this, key: ig.KEY): void;
      state(this: this, action: LiteralUnion<ig.Input.KnownAction>): boolean;
      pressed(this: this, action: LiteralUnion<ig.Input.KnownAction>): boolean;
      keyupd(this: this, action: LiteralUnion<ig.Input.KnownAction>): boolean;
    }
    interface InputConstructor extends ImpactClass<Input> {}
    var Input: InputConstructor;
    var input: Input;
  }
}
