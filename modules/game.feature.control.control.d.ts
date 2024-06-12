// requires impact.base.game
// requires impact.feature.interact.press-repeater
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface Control extends ig.Class {
      autoControl: sc.AutoControl;

      _getAttackButton(this: this): ig.BUTTONS;
      _getSpecialButton(this: this): ig.BUTTONS;
      _getDashButton(this: this): ig.BUTTONS;
      _getQuickMenuButton(this: this): ig.BUTTONS;
      _getMeleeButton(this: this): ig.BUTTONS;
      setAutoControl(this: this, autoControl: sc.AutoControl): boolean;
      getMouseX(this: this): number;
      getMouseY(this: this): number;
      getGuiClickPre(this: this): boolean;
      getGuiClick(this: this): boolean;
      getGuiPressed(this: this): boolean;
      getGuiHold(this: this): boolean;
      getAxesValue(this: this, axes: ig.AXES): boolean;
      isLeftStickDown(this: this): boolean;
      isRightStickDown(this: this): boolean;
      updateRepeater(this: this): boolean;
      aimStart(this: this): boolean;
      aiming(this: this): boolean;
      attacking(this: this): boolean;
      fullScreenAttacking(this: this): boolean;
      chargeThrowSwap(this: this): boolean;
      chargeAttackSwap(this: this): boolean;
      thrown(this: this): boolean;
      melee(this: this): boolean;
      charge(this: this): boolean;
      autoThrown(this: this): boolean;
      dashing(this: this): boolean;
      dashHold(this: this): boolean;
      guarding(this: this): boolean;
      moveDir(
        this: this,
        destVec: Vec2,
        lastRelativeVel: number,
        ignoreLastDir?: Nullable<number>,
      ): number;
      pause(this: this): boolean;
      menu(this: this): boolean;
      quickmenu(this: this): boolean;
      quickmenuPress(this: this): boolean;
      skipCutscene(this: this): boolean;
      menuConfirm(this: this): boolean;
      menuBack(this: this): boolean;
      menuHotkeyHelp(this: this): boolean;
      menuHotkeyHelp2(this: this): boolean;
      menuHotkeyHelp3(this: this): boolean;
      menuHotkeyHelp4(this: this): boolean;
      menuSkillLeft(this: this, threshold?: number): boolean;
      menuSkillRight(this: this, threshold?: number): boolean;
      menuSkillUp(this: this, threshold?: number): boolean;
      menuSkillDown(this: this, threshold?: number): boolean;
      menuCircleLeft(this: this): boolean;
      menuCircleRight(this: this): boolean;
      menuListUp(this: this): boolean;
      menuListDown(this: this): boolean;
      questCircleLeft(this: this): boolean;
      questCircleRight(this: this): boolean;
      menuMapLeftDown(this: this, threshold?: number): boolean;
      menuMapRightDown(this: this, threshold?: number): boolean;
      menuMapUpDown(this: this, threshold?: number): boolean;
      menuMapDownDown(this: this, threshold?: number): boolean;
      menuScrollUp(this: this): boolean;
      menuScrollDown(this: this): boolean;
      arenaScrollUp(this: this): boolean;
      arenaScrollDown(this: this): boolean;
      scrollUp(this: this): boolean;
      scrollDown(this: this): boolean;
      interactPressed(this: this, checkForEscape?: boolean, autoCtrlIgnore?: boolean): boolean;
      interactDown(this: this): boolean;
      leftPressed(this: this): boolean;
      rightPressed(this: this): boolean;
      upPressed(this: this): boolean;
      downPressed(this: this): boolean;
      leftPressedSticks(this: this): boolean;
      rightPressedSticks(this: this): boolean;
      upPressedSticks(this: this): boolean;
      downPressedSticks(this: this): boolean;
      leftDown(this: this): boolean;
      rightDown(this: this): boolean;
      upDown(this: this): boolean;
      downDown(this: this): boolean;
      loreDown(this: this): boolean;
      loreUp(this: this): boolean;
      elementModeScroll(this: this): boolean;
      elementModeSwitch(this: this): boolean;
    }
    interface ControlConstructor extends ImpactClass<Control> {
      new (): Control;
    }
    var Control: ControlConstructor;
    var control: Control;
  }
}
