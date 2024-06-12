export {};

declare global {
  namespace ig {
    enum KEY {
      MOUSE1 = -1,
      MOUSE2 = -3,
      MWHEEL_UP = -4,
      MWHEEL_DOWN = -5,
      BACKSPACE = 8,
      TAB = 9,
      ENTER = 13,
      PAUSE = 19,
      CAPS = 20,
      ESC = 27,
      SPACE = 32,
      PAGE_UP = 33,
      PAGE_DOWN = 34,
      END = 35,
      HOME = 36,
      LEFT_ARROW = 37,
      UP_ARROW = 38,
      RIGHT_ARROW = 39,
      DOWN_ARROW = 40,
      INSERT = 45,
      DELETE = 46,
      _0 = 48,
      _1 = 49,
      _2 = 50,
      _3 = 51,
      _4 = 52,
      _5 = 53,
      _6 = 54,
      _7 = 55,
      _8 = 56,
      _9 = 57,
      A = 65,
      B = 66,
      C = 67,
      D = 68,
      E = 69,
      F = 70,
      G = 71,
      H = 72,
      I = 73,
      J = 74,
      K = 75,
      L = 76,
      M = 77,
      N = 78,
      O = 79,
      P = 80,
      Q = 81,
      R = 82,
      S = 83,
      T = 84,
      U = 85,
      V = 86,
      W = 87,
      X = 88,
      Y = 89,
      Z = 90,
      NUMPAD_0 = 96,
      NUMPAD_1 = 97,
      NUMPAD_2 = 98,
      NUMPAD_3 = 99,
      NUMPAD_4 = 100,
      NUMPAD_5 = 101,
      NUMPAD_6 = 102,
      NUMPAD_7 = 103,
      NUMPAD_8 = 104,
      NUMPAD_9 = 105,
      MULTIPLY = 106,
      ADD = 107,
      SUBSTRACT = 109,
      DECIMAL = 110,
      DIVIDE = 111,
      F1 = 112,
      F2 = 113,
      F3 = 114,
      F4 = 115,
      F5 = 116,
      F6 = 117,
      F7 = 118,
      F8 = 119,
      F9 = 120,
      F10 = 121,
      F11 = 122,
      F12 = 123,
      SHIFT = 16,
      CTRL = 17,
      ALT = 18,
      EQUAL = 187,
      PLUS = 187,
      COMMA = 188,
      MINUS = 189,
      PERIOD = 190,
      SEMICOLON = 186,
      UE = 186,
      GRAVE_ACCENT = 192,
      OE = 192,
      SLASH = 191,
      HASH = 191,
      BRACKET_OPEN = 219,
      SZ = 219,
      BACKSLASH = 220,
      BRACKET_CLOSE = 221,
      SINGLE_QUOTE = 222,
      AE = 222,
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
      currentDevice: ig.INPUT_DEVICES
      mouse: Vec2;
      mouseGuiActive: boolean;
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
