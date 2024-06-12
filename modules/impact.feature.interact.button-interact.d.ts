// requires impact.feature.interact.interact

export {};

declare global {
  namespace ig {
    enum BUTTON_GROUP_SELECT_TYPE {
      ALL = 0,
      VERTICAL = 1,
      HORIZONTAL = 2,
    }
    namespace ButtonGroup {
      type PressCallback = (button?: ig.FocusGui, fromMouse?: boolean) => void;
      type SelectionCallback = (button?: ig.FocusGui) => void;
    }
    interface ButtonGroup extends ig.Class {
      buttonInteract: ig.ButtonInteractEntry;
      elements: sc.ButtonGui[][];
      selectionCallbacks: ig.ButtonGroup.SelectionCallback[];
      pressCallbacks: ig.ButtonGroup.PressCallback[];
      mouseFocusLostCallback: () => void;
      backButton: sc.ButtonGui;
      current: Vec2;
      regain: Vec2;
      largestIndex: Vec2;
      loopButtons: boolean;
      soundsOnPressed: boolean;
      enableMultiPressed: boolean;
      ignoreActiveFocus: boolean;
      selectionType: ig.BUTTON_GROUP_SELECT_TYPE;
      _lastInvokedPress: sc.ButtonGui;
      _isParallel: boolean;
      sounds: { focus: ig.Sound };

      addFocusGui(
        this: this,
        gui: ig.FocusGui,
        x?: number,
        y?: number,
        asBackButton?: boolean,
      ): void;
      removeFocusGui(this: this, x: number, y: number): void;
      invokeCurrentButton(this: this): void;
      setMouseFocusLostCallback(this: this, callback: () => void): void;
      addPressCallback(this: this, callback: ig.ButtonGroup.PressCallback): void;
      addSelectionCallback(this: this, callback: ig.ButtonGroup.SelectionCallback): void;
      clear(this: this): void;
      isActive(this: this): boolean;
      setCurrentFocus(this: this, x: number, y: number): void;
      focusCurrentButton(
        this: this,
        newX: number,
        newY: number,
        ignoreCallbacks?: Nullable<boolean>,
        ignoreSounds?: Nullable<boolean>,
        ignoreIfSame?: Nullable<boolean>,
        ignoreEmptyCells?: Nullable<boolean>,
      ): void;
      unfocusCurrentButton(this: this): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;

    interface ButtonInteractEntry extends ig.InteractEntry {
      pushButtonGroup(this: this, buttonGroup: ig.ButtonGroup): void;
      addGlobalButton(
        this: this,
        button: sc.ButtonGui,
        hotkeyCallback: () => boolean,
        noDoubles?: Nullable<boolean>,
      ): void;
      removeGlobalButton(this: this, button: sc.ButtonGui): void;
      addParallelGroup(this: this, buttongroup: sc.ButtonGroup): void;
      removeButtonGroup(this: this, buttongroup: sc.ButtonGroup): void;
    }
    interface ButtonInteractEntryConstructor extends ImpactClass<ButtonInteractEntry> {
      new (): ButtonInteractEntry;
    }
    var ButtonInteractEntry: ButtonInteractEntryConstructor;
  }
}
