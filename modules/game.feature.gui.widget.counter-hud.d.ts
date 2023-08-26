// requires game.feature.gui.hud.right-hud
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image

export {};

declare global {
    namespace ig {
        namespace GUI {
            interface CounterHud extends sc.RightHudBoxGui {
            }
            interface CounterHudConstructor extends ImpactClass<CounterHud> {}
            interface ScoreHud extends sc.RightHudBoxGui {
            }
            interface ScoreHudConstructor extends ImpactClass<ScoreHud> {}
        }
        interface GUI {
            CounterHud: GUI.CounterHudConstructor;
            ScoreHud: GUI.ScoreHudConstructor;
        }
    }
}