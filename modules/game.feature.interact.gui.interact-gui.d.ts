// requires impact.feature.gui.gui

export { }

declare global {
    namespace ig {
        namespace GUI {
            interface Interact extends ig.GuiElementBase {
                iconState: number
                gfx: ig.Image
                target: ig.Entity
                offset: Vec2
                icon: sc.MapInteractIcon
                timer: number
                offsetTimer: number
                overlayIcon: sc.InteractOverlayIcon
                subGui: sc.XenoDialogIcon | sc.IconHoverTextGui | sc.TradeIconGui
            }
            interface InteractConstructor extends ImpactClass<Interact> {
                new(target: ig.Entity, icon: sc.MapInteractIcon): Interact
            }
            var Interact: InteractConstructor
        }
    }
    namespace sc {
        interface InteractOverlayIcon extends ig.GuiElementBase {
            interactGui: ig.GUI.Interact
        }
        interface InteractOverlayIconConstructor extends ImpactClass<InteractOverlayIcon> {
            new(interactGui: ig.GUI.Interact): InteractOverlayIcon
        }
        var InteractOverlayIcon: InteractOverlayIconConstructor

    }
}
