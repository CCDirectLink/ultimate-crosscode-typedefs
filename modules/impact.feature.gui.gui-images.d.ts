// requires impact.base.image
// requires impact.base.game
// requires impact.feature.gui.gui
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface Gui extends ig.GameAddon {
      guiHooks: ig.GuiHook[];
      controlModule: sc.Control;
      
      addGuiElement(this: this, guiElement: ig.GuiElementBase): void;
      createEventGui<Key extends keyof ig.GUI, S, T>(this: this, name: string, type: Key, settings: S, free?: boolean): T;
      freeEventGui(this: this, gui: ig.GuiElementBase): void;
      spawnEventGui(this: this, gui: ig.GuiElementBase): void;
    }
    interface GuiConstructor extends ImpactClass<Gui> {
      new (): Gui;
    }
    var Gui: GuiConstructor;
    var gui: Gui;
  }
}
