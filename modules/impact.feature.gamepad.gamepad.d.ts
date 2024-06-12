// requires impact.base.game
// requires impact.base.vars

export {}

declare global {
    namespace ig {
        enum BUTTONS {
            FACE0 = 0,
            FACE1 = 1,
            FACE2 = 2,
            FACE3 = 3,
            LEFT_SHOULDER = 4,
            RIGHT_SHOULDER = 5,
            LEFT_TRIGGER = 6,
            RIGHT_TRIGGER  = 7,
            SELECT = 8,
            START = 9,
            LEFT_STICK = 10,
            RIGHT_STICK = 11,
            DPAD_UP = 12,
            DPAD_DOWN = 13,
            DPAD_LEFT = 14,
            DPAD_RIGHT = 15
        }
        enum AXES {
            LEFT_STICK_X = 0,
            LEFT_STICK_Y = 1,
            RIGHT_STICK_X = 2,
            RIGHT_STICK_Y = 3
        }
        interface GamepadManager extends ig.GameAddon {
            activeGamepads: ig.Gamepad[]

            isButtonPressed(this: this, button: ig.BUTTONS): boolean;
            isButtonReleased(this: this, button: ig.BUTTONS): boolean;
            isButtonDown(this: this, button: ig.BUTTONS): boolean;
            getButtonValue(this: this, button: ig.BUTTONS): number;

            getAxesValue(this: this, axis: ig.AXES, clipDeadZone?: number): number;
            isAxesDown(this: this, axis: ig.AXES): boolean;
            isLeftStickDown(this: this): boolean;
            isRightStickDown(this: this): boolean;
            
            isSupported(this: this): boolean;
        }
        interface GamepadManagerConstructor extends ImpactClass<GamepadManager> {}

        let gamepad: GamepadManager;
        let GamepadManager: GamepadManagerConstructor;

        interface Gamepad extends ig.Class {
            buttonDeadzones: Record<ig.BUTTONS, boolean>
            axesDeadzones: Record<ig.BUTTONS, boolean>
            buttonStates: Record<ig.BUTTONS, boolean>
            axesStates: Record<ig.BUTTONS, boolean>
            pressedStates: Record<ig.BUTTONS, boolean>
            releasedStates: Record<ig.BUTTONS, boolean>
        }
        interface GamepadConstructor extends ImpactClass<Gamepad> {
            new (): Gamepad
        }
        var Gamepad: GamepadConstructor
    }
}
