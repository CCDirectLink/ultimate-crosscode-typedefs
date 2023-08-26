// requires impact.feature.interact.interact

export {};

declare global {
  namespace ig {
    namespace ButtonGroup {
      type PressCallback = (button?: ig.FocusGui, fromMouse?: boolean) => void;
      type SelectionCallback = (button?: ig.FocusGui) => void;
    }
    interface ButtonGroup extends ig.Class {
      pressCallbacks: ig.ButtonGroup.PressCallback[];
      selectionCallbacks: ig.ButtonGroup.SelectionCallback[];
      current: Vec2;

      largestIndex: Vec2;

      addFocusGui(this: this, gui: ig.FocusGui, x?: number, y?: number, asBackButton?: boolean): void;
      removeFocusGui(this: this, x: number, y: number): void;
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
        ignoreCallbacks?: Optional<boolean>,
        ignoreSounds?: Optional<boolean>,
        ignoreIfSame?: Optional<boolean>,
        ignoreEmptyCells?: Optional<boolean>,
      ): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;

    interface ButtonInteractEntry extends ig.InteractEntry {
      pushButtonGroup(this: this, buttonGroup: ig.ButtonGroup): void;
      addGlobalButton(
        this: this,
        button: sc.ButtonGui,
        hotkeyCallback: () => boolean,
        noDoubles?: Optional<boolean>,
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
