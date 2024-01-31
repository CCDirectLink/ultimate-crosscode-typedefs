// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    enum DIALOG_INFO_ICON {
      NONE = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
      QUESTION = 4,
    }

    interface ModalButtonInteract extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      content: ig.GuiElementBase;
      buttons: sc.ButtonGui[];
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;
      back: sc.ButtonGui;
      keepOpen: boolean;

      show(this: this): void;
      hide(this: this): void;
      onBackButtonCheck(this: this): boolean;
    }
    interface ModalButtonInteractConstructor extends ImpactClass<ModalButtonInteract> {
      new (
        text: sc.TextLike,
        icon: Nullable<sc.DIALOG_INFO_ICON>,
        options: sc.TextLike[],
        callback: (button: sc.ButtonGui) => void,
        disableSubmitSound?: Nullable<boolean>,
      ): ModalButtonInteract;
    }
    var ModalButtonInteract: ModalButtonInteractConstructor;

    interface Dialogs {
      showYesNoDialog(
        this: this,
        text?: Nullable<sc.TextLike>,
        icon?: Nullable<sc.DIALOG_INFO_ICON>,
        callback?: Nullable<(button: sc.ButtonGui & {data: number}, dialog?: sc.ModalButtonInteract) => void>,
        noSubmitSound?: boolean,
      ): void;
    }
    var Dialogs: Dialogs;
  }
}
