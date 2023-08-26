// requires impact.feature.effect.effect-sheet

export {}

declare global {
    namespace ig.EFFECT_ENTRY {
        namespace EffectSettings {
            interface COPY_SPRITE {

            }
        }

        interface COPY_SPRITE extends ig.EffectStepBase {
            color: string;
        }
        interface COPY_SPRITE_CONSTRUCTOR extends ImpactClass<COPY_SPRITE> {
            new (type: unknown, settings: ig.EFFECT_ENTRY.EffectSettings.COPY_SPRITE): void;
        }
        var COPY_SPRITE: COPY_SPRITE_CONSTRUCTOR
    }
}