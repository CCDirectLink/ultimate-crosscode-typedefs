// requires impact.base.event
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.numbers
// requires game.feature.gui.base.slick-box

export {};

declare global {
    namespace ig {
        namespace GUI {
            interface TimerGui extends sc.SlickBoxRawGui {}
            interface TimerGuiConstructor extends ImpactClass<TimerGuiConstructor> {}
        }
        interface GUI {
            TimerGui: GUI.TimerGuiConstructor;
        }
    }

}