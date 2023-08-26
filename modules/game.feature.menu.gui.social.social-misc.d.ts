// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-status-default
// requires game.feature.msg.gui.side-message-hud
// requires game.feature.menu.gui.enemies.enemy-pages

export {};

declare global {
  namespace sc {
    interface SocialInfoBox extends ig.BoxGui {
      equip: ig.GuiElementBase;

      setCharacter(this: this, id: string): void;
      createEquipEntry(
        this: this,
        itemID: sc.ItemID,
        y: number,
        bodypart: sc.MENU_EQUIP_BODYPART_STR,
      ): number;
    }
    interface SocialInfoBoxConstructor extends ImpactClass<SocialInfoBox> {}
    var SocialInfoBox: SocialInfoBoxConstructor;

    interface SocialPartyBox extends ig.GuiElementBase {
      lea: null; //it exists but is never assigned to.
      members: sc.SocialPartyMember[];

      updatePartyMembers(this: this): void;
      show(this: this, update: boolean): void;
      hide(this: this, skip: boolean): void;
    }
    interface SocialPartyBoxConstructor extends ImpactClass<SocialPartyBox> {
      new (): SocialPartyBox;
    }
    let SocialPartyBox: SocialPartyBoxConstructor;

    interface SocialPartyMember extends sc.MenuPanel {}
    interface SocialPartyMemberConstructor extends ImpactClass<SocialPartyMember> {}
    let SocialPartyMember: SocialPartyMemberConstructor

    interface SocialBaseInfoBox extends ig.GuiElementBase {
      exp: sc.ItemStatusDefaultBar;
      hp: sc.ItemStatusDefaultBar;
      sp: sc.ItemStatusDefaultBar;
    }
    interface SocialBaseInfoBoxConstructor extends ImpactClass<SocialBaseInfoBox> {
      new (): SocialBaseInfoBox;
    }
    var SocialBaseInfoBox: SocialBaseInfoBoxConstructor;

    interface SocialEntryButton extends sc.ListBoxButton {
      gfx2: ig.Image;
      head: sc.SocialHead;
      status: ig.ImageGui;
      key: string;

      updateMemberStatus(this: this): void;
    }
    interface SocialEntryButtonConstructor extends ImpactClass<SocialEntryButton> {
      new (name: string, model: sc.PartyMemberModel): SocialEntryButton;
    }
    var SocialEntryButton: SocialEntryButtonConstructor;

    interface SocialHead extends ig.GuiElementBase {
      active: boolean;
    }
    interface SocialHeadConstructor extends ImpactClass<SocialHead> {}
    var SocialHead: SocialHeadConstructor;
  }
}
