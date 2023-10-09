export {};

declare global {
  function SHOW_GAMECODE(): void;
  function SHOW_TWITTER(): void;
  function SHOW_SCREENSHOT(imageSrc: string): void;
  function SHOW_INDIEGOGO(): void;
  function GAME_ERROR_CALLBACK(
    error: Error,
    info: {
        '64bit': boolean
        OS: string
        browser: string
        browserVersion: string
        map: string | undefined
        nwjsVersion: string
        platform: string
        sampleRate: number
        version: string
        webAudio: boolean
    },
    gameInfo: { save: string },
  ): void;
  function SHOW_SAVE_DIALOG(currentSaveData: string): void;

  namespace IG_OPTIONS {
    function load(): void;
    function save(): void;
  }
}
