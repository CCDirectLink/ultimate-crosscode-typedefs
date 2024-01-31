// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries
// requires game.feature.menu.gui.quests.quest-misc
// requires game.feature.npc.gui.npc-display-gui

export {};

declare global {
  namespace sc {
    interface QuestDetailTasks extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      container: sc.ScrollPane;
      content: ig.GuiElementBase;

      scroll(this: this, y: number, skip?: boolean): void;
      show(
        this: this,
        quest: sc.Quest,
        dontSkip?: Nullable<boolean>,
        skipIfChildren?: Nullable<boolean>,
      ): void;
      hide(this: this): void;
    }
    interface QuestDetailTasksConstructor extends ImpactClass<QuestDetailTasks> {
      new (): QuestDetailTasks;
    }
    var QuestDetailTasks: QuestDetailTasksConstructor;

    interface QuestDetailsSolved extends ig.GuiElementBase {
      endDescription: sc.TextGui;

      show(this: this, quest: sc.Quest): void;
      hide(this: this): void;
    }
    interface QuestDetailsSolvedConstructor extends ImpactClass<QuestDetailsSolved> {
      new (): QuestDetailsSolved;
    }
    var QuestDetailsSolved: QuestDetailsSolvedConstructor;

    interface QuestCharacterView extends ig.BoxGui {}
    interface QuestCharacterViewConstructor extends ImpactClass<QuestCharacterView> {}
    var QuestCharacterView: QuestCharacterViewConstructor;

    interface QuestDetailsView extends sc.QuestBaseBox, sc.Model.Observer {
      gfx: ig.Image;
      titleGui: sc.TextGui;
      descriptionGui: sc.TextGui;
      locationArea: sc.TextGui;
      locationMap: sc.TextGui;
      personTextGui: sc.TextGui;
      personCharGui: sc.QuestCharacterView;
      expGui: sc.TextGui;
      moneyGui: sc.TextGui;
      cpGui: sc.TextGui;
      itemsGui: ig.GuiElementBase;
      atCurLevelGui: sc.TextGui;
      activeView: sc.QuestDetailTasks;
      solvedView: sc.QuestDetailsSolved;
      buttongroup: sc.ButtonGroup;
      taskButton: Nullable<sc.ButtonGui>;
      taskSwitch: boolean;
      lines: ig.ColorGui[];
      currentQuest: sc.Quest;
      submitSound: ig.Sound;

      checkTaskSwitch(this: this): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
      show(this: this, quest: sc.Quest): void;
      hide(this: this): void;
      _setQuest(this: this, quest: sc.Quest): void;
      doButtonTraversal(this: this): void;
      onBackButtonPress(this: this): void;
    }
    interface QuestDetailsViewConstructor extends ImpactClass<QuestDetailsView> {
      new (taskButton: sc.ButtonGui): QuestDetailsView;
    }
    var QuestDetailsView: QuestDetailsViewConstructor;
  }
}
