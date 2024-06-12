// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.version.version
// requires game.feature.gui.widget.modal-dialog
// requires game.feature.menu.gui.menu-misc
// requires impact.feature.interact.gui.focus-gui

export { };

declare global {
  namespace sc {
    interface SaveSlotNewButton extends ig.FocusGui {
      slot: number
      slotOver: sc.SaveSlotButtonHighlight
      text: sc.TextGui
    }
    interface SaveSlotNewButtonConstructor extends ImpactClass<SaveSlotNewButton> {
      new(): SaveSlotNewButton
    }
    var SaveSlotNewButton: SaveSlotNewButtonConstructor

    interface SaveSlotButton extends ig.FocusGui {
      slot: number
      slotOver: sc.SaveSlotButtonHighlight
      level: sc.NumberGui
      location: sc.SaveSlotLocation
      time: sc.SaveSlotPlayTime
      credit: sc.NumberGui
      chapter: sc.SaveSlotChapter;
      party: sc.SaveSlotParty
      elements: sc.SaveSlotElements
      autoSlotMiss: sc.TextGui;
      wrapper: ig.GuiElementBase
      content: ig.GuiElementBase;
      effect: sc.SaveSlotUpdateEffect

      setSave(this: this, save: ig.SaveSlot.Data, slot?: number, skip?: boolean): void;
    }
    interface SaveSlotButtonConstructor extends ImpactClass<SaveSlotButton> {
      new(save?: ig.SaveSlot.Data, slot?: number): SaveSlotButton;
    }
    var SaveSlotButton: SaveSlotButtonConstructor;

    interface SaveSlotPlayTime extends ig.GuiElementBase {
      gfx: ig.Image
      hour: sc.NumberGui
      minute: sc.NumberGui
      second: sc.NumberGui
      millis: Nullable<sc.NumberGui>
      color: sc.GUI_NUMBER_COLOR
      hideHours: boolean
      drawHourDots: boolean

      setColor(this: this, color?: sc.GUI_NUMBER_COLOR): void
      setTime(this: this, save: ig.SaveSlot.Data, skip?: boolean): void
      setTimeFromValue(this: this, seconds: number, skip?: boolean): void
    }
    interface SaveSlotPlayTimeConstructor extends ImpactClass<SaveSlotPlayTime> {
      new(): SaveSlotPlayTime
    }
    var SaveSlotPlayTime: SaveSlotPlayTimeConstructor

    interface SaveSlotLocation extends ig.GuiElementBase {
      location: sc.TextGui
      version: sc.TextGui
      newGamePlus: ig.ImageGui

      setLocation(this: this, save: ig.SaveSlot.Data): void;
    }
    interface SaveSlotLocationConstructor extends ImpactClass<SaveSlotLocation> { }
    var SaveSlotLocation: SaveSlotLocationConstructor;

    interface SaveSlotParty extends ig.BoxGui {
      headsGfx: ig.Image
      party: number[]

      setParty(this: this, save: ig.SaveSlot.Data): void
    }
    interface SaveSlotPartyConstructor extends ImpactClass<SaveSlotParty> {
      new(): SaveSlotParty
    }
    var SaveSlotParty: SaveSlotPartyConstructor

    interface SaveSlotElements extends ig.GuiElementBase {
      elements: [boolean, boolean, boolean, boolean]

      setElements(this: this, save: ig.SaveSlot.Data): void
    }
    interface SaveSlotElementsConstructor extends ImpactClass<SaveSlotElements> {
      new(): SaveSlotElements
    }
    var SaveSlotElements: SaveSlotElementsConstructor

    interface SaveSlotChapter extends ig.GuiElementBase {
      textGui: sc.TextGui;
      chapterGui: sc.NumberGui;
      metaMarker: ig.ImageGui;
    }
    interface SaveSlotChapterConstructor extends ImpactClass<SaveSlotChapter> {
      new(): SaveSlotChapter;
    }
    var SaveSlotChapter: SaveSlotChapterConstructor;

    interface SaveSlotButtonHighlight extends ig.GuiElementBase {
      slot: number
      focus: boolean
      newgame: boolean
      slotGui: sc.TextGui | sc.NumberGui

      setSlot(this: this, slot?: number): void
    }
    interface SaveSlotButtonHighlightConstructor extends ImpactClass<SaveSlotButtonHighlight> {
      new(): SaveSlotButtonHighlight
    }
    var SaveSlotButtonHighlight: SaveSlotButtonHighlightConstructor

    interface SaveSlotUpdateEffect extends ig.GuiElementBase {
    }
    interface SaveSlotUpdateEffectConstructor extends ImpactClass<SaveSlotUpdateEffect> {
      new(): SaveSlotUpdateEffect
    }
    var SaveSlotUpdateEffect: SaveSlotUpdateEffectConstructor
  }
}
