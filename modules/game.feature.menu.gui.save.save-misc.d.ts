// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.version.version
// requires game.feature.gui.widget.modal-dialog
// requires game.feature.menu.gui.menu-misc
// requires impact.feature.interact.gui.focus-gui

export {};

declare global {
  namespace sc {
    interface SaveSlotButton extends ig.FocusGui {
      chapter: sc.SaveSlotChapter;
      autoSlotMiss: sc.TextGui;
      content: ig.GuiElementBase;

      setSave(this: this, save: ig.SaveSlot.Data, slot?: number, skip?: boolean): void;
    }
    interface SaveSlotButtonConstructor extends ImpactClass<SaveSlotButton> {
      new (save?: ig.SaveSlot.Data, slot?: number): SaveSlotButton;
    }
    var SaveSlotButton: SaveSlotButtonConstructor;

    interface SaveSlotLocation extends ig.GuiElementBase {
      setLocation(this: this, save: ig.SaveSlot.Data): void;
    }
    interface SaveSlotLocationConstructor extends ImpactClass<SaveSlotLocation> {}
    var SaveSlotLocation: SaveSlotLocationConstructor;

    interface SaveSlotChapter extends ig.GuiElementBase {
      textGui: sc.TextGui;
      chapterGui: sc.NumberGui;
      metaMarker: ig.ImageGui;
    }
    interface SaveSlotChapterConstructor extends ImpactClass<SaveSlotChapter> {
      new (): SaveSlotChapter;
    }
    var SaveSlotChapter: SaveSlotChapterConstructor;
  }
}
