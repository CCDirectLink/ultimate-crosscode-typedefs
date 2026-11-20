// requires impact.base.loader
// requires impact.base.system.web-audio

export {};

declare global {
  namespace ig {
    enum SOUND_RANGE_TYPE {
      CIRULAR = 1 /* typo */,
      HORIZONTAL = 2,
      VERTICAL = 3,
    }

    namespace SoundManager {
      interface Volumes {
        sound: GainNode;
        music: GainNode;
        master: GainNode;
      }
      interface Group {
        requests: ig.SoundHandleBase[];
        playing: ig.SoundHandleBase[];
      }
    }
    interface SoundManager extends ig.Class {
      clips: { [path: string]: HTMLAudioElement[] };
      volume: number;
      format: ig.Sound.FORMAT;
      context: ig.WebAudio;
      buffers: { [path: string]: AudioBuffer };
      volumes: ig.SoundManager.Volumes;
      namedSounds: Record<string, ig.SoundHandle[]>;
      soundHandles: ig.SoundHandle[];
      soundStack: ig.SoundHandle[][];
      soundGroups: Record<string, { playing: ig.SoundHandle[]; requests: ig.SoundHandle[] }>;
      requestedGroups: Record<string, ig.SoundManager.Group>;
      tracksToUpdate: ig.TrackWebAudio[];
      hasWebAudio: boolean;

      reset(this: this): void;
      update(this: this): void;
      playSoundHandle(this: this, handle: ig.SoundHandleBase, group: ig.SoundManager.Group): void;
      stopSoundHandle(this: this, handle: ig.SoundHandleBase): void;
      pushPaused(this: this, noFadeOut?: boolean): void;
      popPaused(this: this): void;
      _getGroup(this: this, groupName: string): ig.SoundManager.Group | undefined;
      _solveGroupRequests(this: this, group: ig.SoundManager.Group): void;
      requestPlaySoundHandle(this: this, groupName: string, handle: ig.SoundHandle): void;
      getSampleRate(this: this): number;
      _createWebAudioContext(this: this): void;
      connectSound(this: this, obj: { connect(gain: GainNode): void } | undefined): void;
      disconnectSound(this: this, obj: { disconnect(gain: GainNode): void } | undefined): void;
      connectMusic(this: this, obj: { connect(gain: GainNode): void } | undefined): void;
      disconnectMusic(this: this, obj: { disconnect(gain: GainNode): void } | undefined): void;
      setSoundVolume(this: this, volume: number): void;
      setMusicVolume(this: this, volume: number): void;
      setMasterVolume(this: this, volume: number): void;
      onWindowFocusLost(this: this): void;
      onWindowFocusGained(this: this): void;
      addNamedSound(this: this, name: string, handle: ig.SoundHandle): void;
      getNamedSounds(this: this, name: string): ig.SoundHandle[];
      stopNamedSounds(this: this, name: string): void;
      getBuffer(this: this, path: string): AudioBuffer;
      loadWebAudio(
        this: this,
        path: string,
        loadCallback: (path: string, success: boolean) => void,
      ): void;
      registerTrack(this: this, track: ig.TrackWebAudio): void;
      unregisterTrack(this: this, track: ig.TrackWebAudio): void;
      _updateTracks(this: this): void;
      load(
        this: this,
        path: string,
        channelCount: number,
        loadCallback: (
          path: string,
          channelCount: number,
          success: boolean,
          event?: globalThis.Event,
        ) => void,
      ): void;
      _increaseChannels(
        this: this,
        path: string,
        filePath: string,
        channelCount: number,
        limitSoundUse?: boolean,
      ): void;
      get(this: this, path: string): HTMLAudioElement;
      getChannel(this: this, path: string, index: number): HTMLAudioElement;
      freeMultiAudio(this: this, path: string): void;
      freeWebAudioBuffer(this: this, path: string): void;
    }
    interface SoundManagerConstructor extends ImpactClass<SoundManager> {
      new (): SoundManager;
    }
    var SoundManager: SoundManagerConstructor;
    var soundManager: SoundManager;

    interface MultiAudio extends ig.Loadable {
      channelCount: number;

      get(this: this): unknown;
      getChannel(this: this, a: unknown): unknown;
    }
    interface MultiAudioConstructor extends ImpactClass<MultiAudio> {
      new (pathOrData: string, _unused?: never): MultiAudio;
    }
    var MultiAudio: MultiAudioConstructor;

    interface WebAudioBuffer extends ig.Loadable {
      cacheType: 'WebAudioBuffer';

      get(this: this): AudioBuffer;
    }
    interface WebAudioBufferConstructor extends ImpactClass<WebAudioBuffer> {
      new (path: string): WebAudioBuffer;
    }
    var WebAudioBuffer: WebAudioBufferConstructor;

    namespace Music {
      interface Track {
        track: Nullable<ig.Track>;
        timeOnPush: number;
        stopOnEnd: boolean;
        volume: number;
      }
    }
    interface Music extends ig.Class {
      inBetweenTrack: Nullable<ig.Music.Track>;
      currentTrack: ig.Music.Track;
      trackStack: ig.Music.Track[];
      paused: boolean;
      _volume: number;
      _interval: number;
      _timer: ig.Timer;
      _fadeInTime: number;
      _nextTrackReset: boolean;
      _transitionType: number;

      play(
        this: this,
        track: ig.Track,
        fadeOut: number,
        fadeIn: number,
        volume: number,
        stopOnEnd?: boolean,
      ): void;
      push(
        this: this,
        track: ig.Track,
        fadeOut: number,
        fadeIn: number,
        volume: number,
        stopOnEnd?: boolean,
      ): void;
      pop(this: this, fadeOut: number, fadeIn: number): void;
      inbetween(
        this: this,
        track: ig.Track,
        volume: boolean,
        fadeIn: number,
        volumeMultiplier?: number,
      ): void;
      pause(this: this, fadeOut?: number): void;
      resume(this: this, fadeIn: number): void;
      getStackSize(this: this): number;
      isTrackPlaying(this: this, track: ig.Track, volume?: number): boolean;
      getVolume(this: this): number;
      setVolume(this: this, volume: number): void;
      _checkCurrentTrackEquality(this: this): boolean;
      _getTopTrack(this: this): Nullable<ig.Music.Track>;
      _pushNextTrack(
        this: this,
        track: Nullable<ig.Track>,
        stopOnEnd?: boolean,
        mode?: ig.BGM_SWITCH_MODE,
      ): void;
      _setFadeOut(this: this, fadeOut: number, paused?: boolean): void;
      _startInterval(this: this): void;
      _intervalStep(this: this): void;
      _playTopSong(this: this): void;
      _endFadeIn(this: this): void;
      _trackEnded(this: this): void;
      onWindowFocusLost(this: this): void;
      onWindowFocusGained(this: this): void;
    }
    interface MusicConstructor extends ImpactClass<Music> {
      new (): Music;
    }
    var Music: MusicConstructor;
    var music: Music;

    interface TrackDefault extends ig.Cacheable {}
    interface TrackDefaultConstructor extends ImpactClass<TrackDefault> {
      new (a: unknown, b: unknown, c: unknown, d: unknown, e: unknown): TrackDefault;
    }
    var TrackDefault: TrackDefaultConstructor;

    interface TrackWebAudio extends ig.Cacheable {
      cacheType: 'TrackWebAudio';
      bufferHandle: Nullable<ig.WebAudioBuffer>;
      introBufferHandle: Nullable<ig.WebAudioBuffer>;
      loopEnd: number;
      introEnd: number;
      endCallback: Nullable<(track: ig.TrackWebAudio) => void>;
      baseVolume: number;
      loop: boolean;
      playing: boolean;
      soundBuffer: Nullable<AudioBuffer>;
      introBuffer: Nullable<AudioBuffer>;
      currentNode?: Nullable<ig.WebAudioBufferGain>;
      nextNode: Nullable<ig.WebAudioBufferGain>;
      introNode: Nullable<ig.WebAudioBufferGain>;
      _context: ig.WebAudio;
      _volume: number;
      _startTime: number;
      _pauseTime: number;
      _loopCount: number;
      _nextOffset: number;
      _introBufferDuration: number;

      getCacheKey(
        this: this,
        path: string,
        loopEnd: number,
        introPath: string | undefined,
        introEnd: number | undefined,
        volume: number,
      ): string;
      onCacheCleared(this: this): void;
      _initAudioBuffers(this: this): void;
      checkForEndCallback(this: this): void;
      setVolume(this: this, volume: number): void;
      getVolume(this: this): number;
      reset(this: this): void;
      _recreateNodes(this: this): void;
      _clearNodes(this: this): void;
      play(this: this): void;
      pause(this: this): void;
    }
    interface TrackWebAudioConstructor extends ImpactClass<TrackWebAudio> {
      new (
        path: string,
        loopEnd: number,
        introPath: string | undefined,
        introEnd: number | undefined,
        volume: number,
      ): TrackWebAudio;
    }
    var TrackWebAudio: TrackWebAudioConstructor;

    interface SoundDefault extends ig.Class {
      group: string;
      multiAudio: ig.MultiAudio;
      volume: number;
      currentClip: unknown;
      multiChannel: boolean;

      clone(this: this): ig.SoundDefault;
      clearCached(this: this): void;
      play(this: this, pos?: boolean, settings?: SoundPlaySettings): ig.SoundHandle;
      stop(this: this): void;
    }
    interface SoundDefaultConstructor
      extends ImpactClass<SoundDefault>, SoundConstructorCommon<ig.SoundDefault> {}
    var SoundDefault: SoundDefaultConstructor;

    interface SoundWebAudio extends ig.Class {
      group: string;
      webAudioBuffer: ig.WebAudioBuffer;
      volume: number;
      variance: number;

      clone(this: this): SoundWebAudio;
      clearCached(this: this): void;
      play(this: this, pos?: boolean, settings?: SoundPlaySettings): ig.SoundHandle;
      stop(this: this): void;
    }
    interface SoundWebAudioConstructor
      extends ImpactClass<SoundWebAudio>, SoundConstructorCommon<ig.SoundWebAudio> {
      new (path: string, volume?: number, variance?: number, group?: string): SoundWebAudio;
    }
    var SoundWebAudio: SoundWebAudioConstructor;

    interface SoundHandleBase extends ig.Class {
      pos: null | {
        point: Vec2;
        entity: ig.Entity | null;
        align: ig.ENTITY_ALIGN | null;
        offset: null;
        range: number;
        rangeType: ig.SOUND_RANGE_TYPE | keyof typeof ig.SOUND_RANGE_TYPE;
      };
      offset: Vec2;

      setFixPosition(
        this: this,
        point: Vec3,
        range?: number,
        type?: ig.SOUND_RANGE_TYPE | keyof typeof ig.SOUND_RANGE_TYPE,
      ): void;
      setEntityPosition(
        this: this,
        entity: ig.Entity,
        align: ig.ENTITY_ALIGN,
        offset: null,
        range?: number,
        type?: ig.SOUND_RANGE_TYPE | keyof typeof ig.SOUND_RANGE_TYPE,
      ): void;
      _updateEntityPos(this: this, force?: boolean): void;
      isLooping(this: this): boolean;
      getPlayTime(this: this): number;
      play(this: this): void;
      stop(this: this): void;
    }
    interface SoundHandleBaseConstructor extends ImpactClass<ig.SoundHandleBase> {
      new (): ig.SoundHandleBase;
    }
    var SoundHandleBase: ig.SoundHandleBaseConstructor;

    interface SoundHandleDefault extends ig.SoundHandleBase {}
    interface SoundHandleDefaultConstructor extends ImpactClass<SoundHandleDefault> {
      new (): ig.SoundHandleDefault;
    }
    var SoundHandleDefault: ig.SoundHandleDefault;

    interface SoundHandleWebAudio extends ig.SoundHandleBase {
      _buffer: Nullable<AudioBufferSourceNode>;
      _volume: number;
      _speed: number;
      _time: number;
      _duration: number;
      _offset: number;
      _startTime: number;
      _nodeSource: Nullable<ig.WebAudioBufferGain>;
      _nodePosition: PannerNode;
      _loop: boolean;
      _playing: boolean;
      _fadeTimer: number;
      _fadeIn: boolean;
      _fadeDuration: number;
      _contextTimeOnStart: number;
      _contextTimeOnPause: number;

      _setPosition(this: this): void;
      _disconnect(this: this): void;
      pause(this: this, noFadeOut?: boolean): void;
    }
    interface SoundHandleWebAudioConstructor extends ImpactClass<ig.SoundHandleWebAudio> {
      new (
        buffer: Nullable<AudioBufferSourceNode>,
        offset?: number,
        startTime?: number,
        loop?: boolean,
        volume?: number,
        speed?: number,
        fadeDuration?: number,
      ): SoundHandleWebAudio;
    }
    var SoundHandleWebAudio: ig.SoundHandleWebAudioConstructor;

    namespace SoundHelper {
      function playAtEntity(
        sound: Nullable<ig.Sound> | undefined,
        entity: ig.Entity,
        isLooped?: Nullable<boolean>,
        settings?: Nullable<SoundPlaySettings>,
        range?: number,
        type?: ig.SOUND_RANGE_TYPE,
      ): ig.SoundHandle;
    }
    type SoundHandle = ig.SoundHandleWebAudio; /* | ig.SoundHandleDefault */

    namespace Sound {
      interface FORMAT {
        ext: string;
        mime: string;
      }
    }

    interface SoundPlaySettings {
      /* not real */ fadeDuration?: number;
      offset?: number;
      startTime?: number;
      speed?: number;
    }

    namespace Sound$FORMAT {
      var MP3: ig.Sound.FORMAT;
      var M4A: ig.Sound.FORMAT;
      var OGG: ig.Sound.FORMAT;
      var WEBM: ig.Sound.FORMAT;
      var CAF: ig.Sound.FORMAT;
    }
    interface SoundConstructorCommon<T> {
      new (path: string, volume?: number, variance?: number, group?: string): T;
      FORMAT: typeof Sound$FORMAT;
      use: ig.Sound.FORMAT[];
    }

    /* don't include SoundDefault types in union because it is not used anyways,
     * it screws up function this types, and it is annyoing to cast it to ig.SoundWebAudio everywhere */
    type Sound = /* SoundDefault | */ SoundWebAudio;
    type SoundConstructor = /* SoundDefaultConstructor | */ SoundWebAudioConstructor;
    type Track = /* TrackDefault | */ TrackWebAudio;
    type TrackConstructor = /* TrackDefaultConstructor | */ TrackWebAudioConstructor;
    var Sound: SoundConstructor & {
      enabled: boolean;
    };
  }

  var webAudioActive: boolean;
}
