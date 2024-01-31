// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.button
// requires game.feature.combat.stat-change

export {};

declare global {
  namespace sc {
    enum ScrollType {
      BOTH = 0,
      Y_ONLY = 1,
      X_ONLY = 2,
    }
    enum MenuPanelType {
      TOP_LEFT_EDGE = 0,
      TOP_RIGHT_EDGE = 1,
      TOP_LEFT_EDGE_DARK = 2,
      TOP_RIGHT_EDGE_DARK = 3,
      SQUARE = 4,
      BOTTOM_LEFT_EDGE = 5,
      TOP_RIGHT_EDGE_DARKER = 6,
      BOTTOM_RIGHT_EDGE = 7,
    }

    namespace MODIFIER_ICON_DRAW {
      var X: number;
      var Y: number;
      var SIZE: number;
      var MAX_PER_ROW: number;
    }

    interface NewUnlockButton extends sc.ButtonGui {}
    interface NewUnlockButtonConstructor extends ImpactClass<NewUnlockButton> {}
    var NewUnlockButton: NewUnlockButtonConstructor;

    interface BuffInfo extends ig.GuiElementBase {
      _width: number;

      setText(this: this, text: string, initDelay: number): void;
    }
    interface BuffInfoConstructor extends ImpactClass<BuffInfo> {
      new (): BuffInfo;
    }
    var BuffInfo: BuffInfoConstructor;

    interface InfoBar extends ig.GuiElementBase {
      text: sc.TextGui;
      sizeTransition: {
        startWidth: number;
        width: number;
        startHeight: number;
        height: number;
        time: number;
        timeFunction: KeySpline;
        timer: number;
      };

      doSizeTransition(
        this: this,
        width: number,
        height: number,
        time: number,
        timeFunction: KeySpline,
        delay: number,
      ): void;
    }
    interface InfoBarConstructor extends ImpactClass<InfoBar> {
      new (width: number, height: number, skipRender: boolean): InfoBar;
    }
    var InfoBar: InfoBarConstructor;

    namespace ListBoxButton {
      interface Data {
        id: string | number;
        description: string;
      }
    }

    interface ListBoxButton extends ig.FocusGui {
      button: sc.ButtonGui;
      data: sc.ListBoxButton.Data;
      _width: number;

      setButtonText(this: this, text: sc.TextLike): void;
      setWidth(this: this, buttonWidth?: number, lineWidth?: number): void;
      setText(this: this, text: sc.TextLike): void;
      setActive(this: this, active: boolean): void;
    }
    interface ListBoxButtonConstructor extends ImpactClass<ListBoxButton> {
      new (
        text: sc.TextLike,
        buttonWidth: number,
        lineWidth: number,
        id?: string | number,
        description?: string,
        noLine?: boolean,
        alignCenter?: boolean,
        sound?: ig.Sound,
      ): ListBoxButton;
    }
    var ListBoxButton: ListBoxButtonConstructor;

    interface ItemBoxButton extends sc.ListBoxButton {
      amount: sc.NumberGui;
    }
    interface ItemBoxButtonConstructor extends ImpactClass<ItemBoxButton> {
      new (
        text: sc.TextLike,
        buttonWidth: number,
        lineWidth: number,
        amount: number,
        id?: string | number,
        description?: string,
        noLine?: boolean,
        alignCenter?: boolean,
        sound?: ig.Sound,
        maxValue?: number,
        level?: number,
      ): sc.ItemBoxButton;
    }
    var ItemBoxButton: ItemBoxButtonConstructor;

    interface SimpleStatusDisplay extends ig.GuiElementBase {
      gfx: ig.Image;
      lineID: number;
      iconIndex: Vec2;
      currentValueGui: sc.NumberGui;
      changeValueGui: sc.NumberGui;
      arrowGui: ig.ImageGui;
      percentCurrentGui: sc.PercentChar;
      simpleMode: boolean;
      noPercentMode: boolean;
      width: number;
    }
    interface SimpleStatusDisplayConstructor extends ImpactClass<SimpleStatusDisplay> {
      new (
        name: string,
        lineID: number,
        iconID: number,
        usePercent: boolean,
        maxValue: number,
        simpleMode: boolean,
        width: number,
        noPercentMode: boolean,
      ): SimpleStatusDisplay;
    }
    var SimpleStatusDisplay: SimpleStatusDisplayConstructor;

    interface PercentChar extends ig.GuiElementBase {}
    interface PercentCharConstructor extends ImpactClass<PercentChar> {}
    var PercentChar: PercentCharConstructor;

    interface MenuPanel extends ig.BoxGui {}
    interface MenuPanelConstructor extends ImpactClass<MenuPanel> {
      new (panelType?: sc.MenuPanelType): sc.MenuPanel;
    }
    var MenuPanel: MenuPanelConstructor;

    interface HeaderMenuPanel extends sc.MenuPanel {}
    interface HeaderMenuPanelConstructor extends ImpactClass<HeaderMenuPanel> {}
    var HeaderMenuPanel: HeaderMenuPanelConstructor;

    interface MenuScanLines extends ig.GuiElementBase {}
    interface MenuScanLinesConstructor extends ImpactClass<MenuScanLines> {}
    var MenuScanLines: MenuScanLinesConstructor;

    namespace ScrollPane {
      interface Container extends ig.GuiElementBase {
        scrollIndex: number;

        getContentWidth(this: this): number;
        getContentHeight(this: this): number;
      }
      interface ContainerConstructor extends ImpactClass<Container> {
        new (): Container;
      }
    }
    interface ScrollPane extends ig.GuiElementBase {
      box: sc.ScrollPane.Container;

      setContent(this: this, content: ig.GuiElementBase): void;
      scrollY(this: this, amount: number): void;
      setScrollY(
        this: this,
        value: number,
        skipTransition?: Nullable<boolean>,
        time?: Nullable<number>,
        timeFunction?: Nullable<KeySpline>,
      ): void;
      recalculateScrollBars(this: this, skipTransition?: boolean): void;
      getScrollY(this: this): number;
    }
    interface ScrollPaneConstructor extends ImpactClass<ScrollPane> {
      new (scrollType: sc.ScrollType): sc.ScrollPane;
      Container: sc.ScrollPane.ContainerConstructor;
    }
    var ScrollPane: ScrollPaneConstructor;


    namespace Slider {
      interface Thumb extends ig.GuiElementBase {
        updateDrawables(this: this, renderer: ig.GuiRenderer): void;
      }
    }
    interface Slider extends ig.GuiElementBase {
      offset: Vec2
      inset: { top: number; right: number; bottom: number; left: number };
      minValue: number;
      maxValue: number;
      value: number;
      vertical: boolean;
      scaleThumb: boolean;
      prefWidth: number;
      prefHeight: number;
      thumb: sc.Slider.Thumb;
    }
    interface SliderConstructor extends ImpactClass<Slider> {
      new (vertical?: boolean, thumb?: sc.Slider.Thumb, scaleThumb?: boolean): sc.Slider;
    }
    var Slider: SliderConstructor;

    interface TimeAndMoneyGUI extends sc.MenuPanel {
      gfx: ig.Image;
      timeGfx: ig.Image;
      credit: sc.NumberGui;
      timeSec: sc.NumberGui;
      timeMin: sc.NumberGui;
      timeHour: sc.NumberGui;
    }
    interface TimeAndMoneyGUIConstructor extends ImpactClass<TimeAndMoneyGUI> {
      new (): TimeAndMoneyGUI;
    }
    var TimeAndMoneyGUI: TimeAndMoneyGUIConstructor;

    interface DummyContainer extends ig.GuiElementBase {}
    interface DummyContainerConstructor extends ImpactClass<DummyContainer> {
      new (child: ig.GuiElementBase): DummyContainer;
    }
    var DummyContainer: DummyContainerConstructor;
  }
}
