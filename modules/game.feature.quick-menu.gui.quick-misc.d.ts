// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.combat
// requires game.feature.menu.gui.enemies.enemy-pages
// requires game.feature.quick-menu.gui.quick-item-menu

export { };

declare global {
    namespace sc {
        interface QuickFocusScreen extends ig.GuiElementBase {
            subGuis: ig.GuiElementBase[]

            addSubGui(this: this, gui: ig.GuiElementBase): void
            resetSubGuis(this: this): void
            reset(this: this): void
        }
        interface QuickFocusScreenConstructor extends ImpactClass<QuickFocusScreen> { new(): QuickFocusScreen }
        var QuickFocusScreen: QuickFocusScreenConstructor


        namespace QUICK_INFO_BOXES {
            interface Enemy extends ig.BoxGui {
                title: sc.TextGui
                arrow: sc.QuickItemArrow
                baseHp: sc.EnemyBaseParamLine
                baseAttack: sc.EnemyBaseParamLine
                baseDefense: sc.EnemyBaseParamLine
                baseFocus: sc.EnemyBaseParamLine
                resistance: sc.EnemyResistence
                anchor: null
                enemy: null

                setData(this: this, enemyType: keyof typeof sc.combat.enemyDataList, enemy: ig.ENTITY.Enemy): void
            }
            interface EnemyConstructor extends ImpactClass<Enemy> {
                new(): Enemy
            }
            var Enemy: EnemyConstructor
        }

        interface QuickArrowBox extends ig.GuiElementBase {
            name: sc.TextGui
            arrowOff: Vec2
        }
        interface QuickArrowBoxConstructor extends ImpactClass<QuickArrowBox> {
            new(text: string, notFixedHeight: boolean, maxWidth: number): QuickArrowBox
        }
        var QuickArrowBox: QuickArrowBoxConstructor

        interface QuickBorderArrowLevelBox extends ig.GuiElementBase {
            ninepatch: ig.NinePatch;
            levelNumber: sc.NumberGui;
            displayColor: number;
            sizeTransition: ig.GuiHook.SizeTransition;
            nameVisible: boolean;

            doSizeTransition(
                this: this,
                width: Nullable<number>,
                height: Nullable<number>,
                time: number,
                timeFunction: KeySpline,
                delay: Nullable<number>,
            ): void;
            getLevelColor(enemyLevel: number): sc.GUI_NUMBER_COLOR;
        }
        interface QuickBorderArrowLevelBoxConstructor extends ImpactClass<QuickBorderArrowLevelBox> {
            new(enemyName: string, entity: ig.ENTITY.Enemy): QuickBorderArrowLevelBox;
        }
        var QuickBorderArrowLevelBox: QuickBorderArrowLevelBoxConstructor;
    }
}
