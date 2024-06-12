// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes

export {};

declare global {
  namespace sc {
    namespace TabbedPane {
      interface Settings {
        /* this may be incomplemte */
        type?: number;
        skipSounds?: boolean;
      }
      interface Content {
        buttongroup: sc.ButtonGroup;
        list: sc.ButtonListBox;
        sort: number;
      }
    }
    interface TabbedPane extends ig.GuiElementBase {
      tabGroup: sc.ButtonGroup;
      keys: string[];
      tabs: Record<string, sc.ItemTabbedBox.TabButton>;
      tabArray: sc.ItemTabbedBox.TabButton[];
      tabContent: sc.TabbedPane.Content[];
      currentTabIndex: number;
      currentContent: sc.TabbedPane.Content;
      cacheContent: boolean;
      _prevIndex: number;
      _prevPressed: sc.ItemTabbedBox.TabButton;

      setPanelSize(this: this, width: number, height: number): void;
      addTab(this: this, key: string, index: number, settings: sc.TabbedPane.Settings): void;
      setTab(
        this: this,
        index: number,
        ignorePrev?: boolean,
        settings?: sc.TabbedPane.Settings,
      ): void;
      show(this: this, tabIndex?: number): void;
      hide(this: this): void;
      rearrangeTabs(this: this): void;
      resetButtons(
        this: this,
        exceptThisButton?: sc.ItemTabbedBox.TabButton,
        unfocusAll?: boolean,
      ): void;
      onTabButtonCreation(
        this: this,
        key: string,
        index: number,
        settings: unknown,
      ): sc.ItemTabbedBox.TabButton;
      getCurrentTabButton(this: this): null | sc.ItemTabbedBox.TabButton;
      getCurrentTabKey(this: this): string;
      getButtonIndex(this: this, tab: sc.ItemTabbedBox.TabButton): number;

      onTabSelected(this: this, button: sc.ItemTabbedBox.TabButton): void;
      onTabPressed(this: this, button: sc.ItemTabbedBox.TabButton, wasSame: boolean): void;
      onTabButtonCreation(
        this: this,
        key: string,
        index: number,
        settings: sc.TabbedPane.Settings,
      ): void;
      onTabMouseFocusLost(this: this): void;
      onTabChanged(this: this, newIndex: number, prevIndex: number): void;
      onClearPrevContent(this: this, prevContent: unknown): void;
      onContentCreation(this: this, index: number, settings: sc.TabbedPane.Settings): void;
      onSetCacheContent(
        this: this,
        content: sc.TabbedPane.Content,
        index: number,
        settings: sc.TabbedPane.Settings,
      ): void;
    }
    interface TabbedPaneConstructor extends ImpactClass<TabbedPane> {
      new (cacheContent?: boolean): TabbedPane;
    }
    var TabbedPane: TabbedPaneConstructor;

    interface ListTabbedPane extends sc.TabbedPane {
      currentList: sc.ButtonListBox;
      currentGroup: sc.ButtonGroup;
      bg: sc.MenuScanLines;

      onListEntryPressed(this: this, button: sc.ListBoxButton): void;
      onLeftRightPress(
        this: this,
        button: sc.ItemTabbedBox.TabButton,
        index: number,
        dir: -1 | 1,
      ): void;
      onCreateListEntries(
        this: this,
        list: sc.ButtonListBox,
        buttonGroup: sc.ButtonGroup,
        type: number,
        sort: number,
      ): void;
    }
    interface ListTabbedPaneConstructor extends ImpactClass<ListTabbedPane> {
      new (cacheContent?: boolean): ListTabbedPane;
    }
    var ListTabbedPane: ListTabbedPaneConstructor;
  }
}
