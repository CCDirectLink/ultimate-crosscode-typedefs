// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers

export {};

declare global {
    namespace sc {
        interface ExpEntryGui extends ig.GuiElementBase {
            gfx: ig.Image;
            number: sc.NumberGui;
            exp: number;
            withLabel: boolean;
    
            setExp(this: this, exp: number): void;
        }
        interface ExpEntryGuiConstructor extends ImpactClass<ExpEntryGui> {
            new (withLabel: boolean, exp?: number): ExpEntryGui;
        }
        let ExpEntryGui: ExpEntryGuiConstructor;
    
        interface ExpMenuGui extends ig.GuiElementBase, sc.Model.Observer {
            gfx: ig.Image;
            _expNumber: sc.NumberGui;
        }
        interface ExpMenuGuiConstructor extends ImpactClass<ExpMenuGui> {
            new (): ExpMenuGui;
        }
        let ExpMenuGui: ExpMenuGuiConstructor;
    
        interface ExpHudGui extends ig.GuiElementBase, sc.Model.Observer {
            baseEntry: sc.ExpEntryGui;
            menuEntry: sc.ExpMenuGui;
            timer: number;
            expSum: number;
            expAddEntries: sc.ExpEntryGui[];

            addExp(this: this, exp: number): void;
            mergeExpEntry(this: this): void;
            mergeAllEntries(this: this): void;
            reorder(this: this): void;
        }
        interface ExpHudGuiConstructor extends ImpactClass<ExpHudGui> {
            new (): ExpHudGui;
        }
        let ExpHudGui: ExpHudGuiConstructor;
    }
}