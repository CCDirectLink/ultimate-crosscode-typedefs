// requires impact.base.loader

export {}

declare global {
    namespace ig {
        interface WebAudio extends ig.Class {
            context: null | AudioContext
            timeOffset: number

            getSampleRate(this: this): number
            getCurrentTime(this: this): number
            getCurrentTimeRaw(this: this): number
            createBufferGain(this: this, buffer: AudioBufferSourceNode,
                volume?: number, playbackRate?: number): ig.WebAudioBufferGain
            createPanner(this: this): PannerNode
        }
        interface WebAudioConstructor extends ImpactClass<WebAudio> {
            new (): ig.WebAudio
        }
        var WebAudio: WebAudioConstructor

        interface WebAudioBufferGain extends ig.Class {
            context: AudioContext
            bufferNode: AudioBufferSourceNode
            gainNode: GainNode

            connect(this: this, node: AudioNode): void
            setLoop(this: this, loop: boolean): void
            play(this: this, a: number, b: number): void
        }
        interface WebAudioBufferGainConstructor extends ImpactClass<WebAudioBufferGain> {
            new (context: AudioContext, buffer: AudioBufferSourceNode, volume?: number, playbackRate?: number): ig.WebAudioBufferGain
        }
        var WebAudioBufferGain: WebAudioBufferGainConstructor
    }
}
