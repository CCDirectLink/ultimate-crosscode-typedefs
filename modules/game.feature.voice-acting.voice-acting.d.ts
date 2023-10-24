// requires impact.base.game

export {}

declare global {
    namespace sc {
        interface VoiceActing extends ig.GameAddon {
            active: boolean
            loaded: boolean
            voices: Record<string, sc.VA_CONFIG.Entry[]>

            toggle(this: this): void
            load(this: this): void
            loadConfigSounds(this: this, vaConfigEntry: sc.VA_CONFIG.Entry): unknown
            play(this: this, expression: sc.CharacterExpression, label: ig.LangLabel): void
        }
        interface VoiceActingConstructor extends ImpactClass<VoiceActing> {
            new (): VoiceActing
        }
        var VoiceActing: VoiceActingConstructor
    }
}
