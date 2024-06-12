// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires impact.feature.interact.interact
// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    namespace MessageModel {
      namespace Data {
        interface SideMessage {
          char: string
          expression: string
          message: ig.LangLabel.Data | string
          main: boolean
        }
      }
      interface Data {
        autoScript: boolean
        sideMessages: sc.MessageModel.Data.SideMessage[]
        sideMessageStack: sc.MessageModel.Data.SideMessage[]
        displayedSideMessages: number
      }

      interface SideMessage {
        charExpression: sc.CharacterExpression
        message: ig.LangLabel.Data | string
        main: boolean
      }
    }
    interface MessageModel extends ig.GameAddon, sc.Model {
      sideMessages: sc.MessageModel.SideMessage[]
      sideMessageStack: sc.MessageModel.SideMessage[]
      sideMessageDelayedStack: sc.MessageModel.SideMessage[]
      sideMessageQueuing: boolean
      displayedSideMessages: number
      blocking: boolean;

      clearBlocking(this: this): void
      showMessage(this: this, personName: string, message: string, autoContinue: boolean): void;
      setExpression(this: this, personName: string, expression: sc.CharacterExpression): void;
      clearAll(this: this): void;
      hasChoice(this: this): boolean
    }
    interface MessageModelConstructor extends ImpactClass<MessageModel> {}
    var MessageModel: MessageModelConstructor;
    var message: sc.MessageModel;
  }
}
