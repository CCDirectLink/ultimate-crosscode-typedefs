// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface SubTaskEntryBase extends ig.BoxGui {
      textGui: sc.TextGui;
    }
    interface SubTaskEntryBaseConstructor extends ImpactClass<SubTaskEntryBase> {
      new (
        quest: sc.Quest,
        taskIndex: number,
        subTaskIndex: number,
        subTask?: sc.QuestSubTaskBase,
      ): SubTaskEntryBase;
    }
    var SubTaskEntryBase: SubTaskEntryBaseConstructor;

    interface TaskEntry extends ig.GuiElementBase {
      taskIndex: number | undefined;
      quest: Optional<sc.Quest>;
      taskText: sc.TextGui;
      taskDoneIcon: sc.TextGui;
      _subtasks: sc.SubTaskEntryBase[];

      setTask(
        this: this,
        taskIndex?: number,
        quest?: Optional<sc.Quest>,
        hide?: Optional<boolean>,
        large?: Optional<boolean>,
        minimize?: Optional<boolean>,
      ): void;
      show(this: this, delay?: Optional<boolean>, initDelay?: Optional<number>): void;
      _addSubTaskTask(this: this, subtask: sc.SubTaskEntryBase): void;
    }
    interface TaskEntryConstructor extends ImpactClass<TaskEntry> {}
    var TaskEntry: TaskEntryConstructor;
  }
}
