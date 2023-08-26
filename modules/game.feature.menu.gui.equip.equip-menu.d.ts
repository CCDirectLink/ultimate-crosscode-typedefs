// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.main-menu
// requires game.feature.menu.gui.equip.equip-status
// requires game.feature.menu.gui.equip.equip-bodypart
// requires game.feature.inventory.inventory
// requires game.feature.menu.gui.help.help-menu

export {};

declare global {
    namespace sc {
        namespace EquipMenu {
            interface GlobalButtons {
                head: sc.BodyPartMouseButton;
                rightArm: sc.BodyPartMouseButton;
                leftArm: sc.BodyPartMouseButton;
                torso: sc.BodyPartMouseButton;
                feet: sc.BodyPartMouseButton;
            }
        }
        interface EquipMenu extends sc.BaseMenu{
            exitMenu(this: this, nextMenu?: sc.MENU_SUBMENU): void;
        }
        interface EquipMenuConstructor extends ImpactClass<EquipMenu> {
            new (): sc.EquipMenu;
        }
        var EquipMenu: EquipMenuConstructor;
    }
}