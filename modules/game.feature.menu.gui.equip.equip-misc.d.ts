// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in

export {};

declare global {
  namespace sc {
    interface EquipLevelOverview extends sc.MenuPanel {}
    interface EquipLevelOverviewConstructor extends ImpactClass<EquipLevelOverview> {
      new (): EquipLevelOverview;
    }
    var EquipLevelOverview: EquipLevelOverviewConstructor;

    interface BodyPartButton extends sc.ButtonGui {}
    interface BodyPartButtonConstructor extends ImpactClass<BodyPartButton> {}
    var BodyPartButton: BodyPartButtonConstructor;

    interface BodyPartMouseButton extends ig.GuiElementBase {}
    interface BodyPartMouseButtonConstructor extends ImpactClass<BodyPartMouseButton> {}
    var BodyPartMouseButton: BodyPartMouseButtonConstructor;
  }
}
