// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.equip.equip-misc
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface EquipRightContainer extends sc.MenuPanel {}
    interface EquipRightContainerConstructor extends ImpactClass<EquipRightContainer> {
      new (globalButtons: sc.EquipMenu.GlobalButtons): sc.EquipRightContainer;
    }
    var EquipRightContainer: EquipRightContainerConstructor;

    namespace EquipBodyPartContainer {
      interface Entry extends ig.GuiElementBase {
        numberGfx: ig.Image;
        button: sc.BodyPartButton;
        level: number;
        isScalable: boolean;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (
          bodyPart: string,
          equip: sc.Inventory.Item,
          x: number,
          y: number,
          globalButton: sc.BodyPartButton,
          topY: number,
        ): Entry;
      }
    }
    interface EquipBodyPartContainer extends ig.GuiElementBase {
      buttonGroup: sc.ButtonGroup;
      
      showMenu(this: this): void;
      _moveButtons(this: this, bodypart: sc.MENU_EQUIP_BODYPART): void;
      _pullInAllButtons(this: this, exception: ig.FocusGui): void;
    }
    interface EquipBodyPartContainerConstructor extends ImpactClass<EquipBodyPartContainer> {
      new (globalButtons: sc.EquipMenu.GlobalButtons): sc.EquipBodyPartContainer;
      Entry: EquipBodyPartContainer.EntryConstructor;
    }
    var EquipBodyPartContainer: EquipBodyPartContainerConstructor
  }
}
