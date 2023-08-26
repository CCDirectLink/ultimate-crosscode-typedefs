// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries

export {};

declare global {
  namespace sc {
    interface SolvedLine extends ig.SimpleGui {
      ninepatch: ig.NinePatch;
      textGui: sc.TextGui;
    }
    interface SolvedLineConstructor extends ImpactClass<SolvedLine> {
      new (): SolvedLine;
    }
    var SolvedLine: SolvedLineConstructor;

    interface QuestBaseBox extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      levelGui: sc.NumberGui;
      elite: number;

      setLevel(this: this, level?: Optional<number>): void;
      setElite(this: this, isElite: boolean, isSolved: boolean): void;
    }
    interface QuestBaseBoxConstructor extends ImpactClass<QuestBaseBox> {
      new (width?: Optional<number>, height?: Optional<number>, level?: Optional<number>): QuestBaseBox;
    }
    var QuestBaseBox: QuestBaseBoxConstructor;

    interface QuestInfoBoxActive extends ig.SimpleGui {
      gfx: ig.Image;
      lineGui: ig.ColorGui;
      taskContainer: ig.GuiElementBase;

      setTasks(this: this, quest: sc.Quest, currentTask: number): void;
      _addTask(this: this, index: number, quest: sc.Quest, y: number): number;
    }
    interface QuestInfoBoxActiveConstructor extends ImpactClass<QuestInfoBoxActive> {
      new (): QuestInfoBoxActive;
    }
    var QuestInfoBoxActive: QuestInfoBoxActiveConstructor;

    interface QuestInfoBoxSolved extends ig.SimpleGui {
      solvedGui: sc.SolvedLine;
      endDescription: sc.TextGui;
    }
    interface QuestInfoBoxSolvedConstructor extends ImpactClass<QuestInfoBoxSolved> {
      new (): QuestInfoBoxSolved;
    }
    var QuestInfoBoxSolved: QuestInfoBoxSolvedConstructor;

    interface QuestInfoBox extends sc.QuestBaseBox {
      gfx: ig.Image;
      titleGui: sc.TextGui;
      descriptionGui: sc.TextGui;
      locationGui: ig.ColorGui;
      locationText: sc.TextGui;
      activeView: sc.QuestInfoBoxActive;
      solvedView: sc.QuestInfoBoxSolved;

      setQuest(this: this, quest: sc.Quest): void;
      show(this: this): void;
      hide(this: this, skip?: boolean): void;
    }
    interface QuestInfoBoxConstructor extends ImpactClass<QuestInfoBox> {
      new (): QuestInfoBox;
    }
    var QuestInfoBox: QuestInfoBoxConstructor;

    interface QuestDialog extends sc.QuestBaseBox {
      gfx: ig.Image;
      titleGui: sc.TextGui;
      descriptionGui: sc.TextGui;
      endDescriptionGui: Optional<sc.TextGui>;
      firstTaskGui: Optional<sc.TextGui>;
      expGui: sc.TextGui;
      creditGui: sc.TextGui;
      cpGui: sc.TextGui;
      itemsGui: ig.GuiElementBase;
      solvedGui: Optional<sc.SolvedLine>;
      quest: sc.Quest;

      setQuest(this: this, quest?: Optional<sc.Quest>): void;
      setQuestRewards(this: this, quest: sc.Quest, hideRewards: boolean, finished: boolean): void;
    }
    interface QuestDialogConstructor extends ImpactClass<QuestDialog> {
      new (quest: sc.Quest, finished: boolean): QuestDialog;
    }
    var QuestDialog: QuestDialogConstructor;

    interface QuestStartDialogButtonBox extends ig.BoxGui {
      acceptButton: sc.ButtonGui;
      declineButton: sc.ButtonGui;
      acceptMode: boolean;

      setAcceptMode(this: this, buttonGroup: sc.ButtonGroup): void;
    }
    interface QuestStartDialogButtonBoxConstructor extends ImpactClass<QuestStartDialogButtonBox> {
      new (
        buttonGroup: sc.ButtonGroup,
        finished: boolean,
        mandatory: boolean,
        parentQuest: boolean,
      ): QuestStartDialogButtonBox;
    }
    var QuestStartDialogButtonBox: QuestStartDialogButtonBoxConstructor;
  }
}
