// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace SaveSlot {
      interface Data {
        area: ig.LangLabel.Data;
        arena: sc.Arena.Data
        bgm: ig.Bgm.Data
        cancelButtonText: Nullable<ig.LangLabel>
        commonEvents: { runData: Record<string, { trigger: number }> }
        currentTask: Nullable<ig.LangLabel.Data>
        drops: sc.MenuModel['dropCounts']
        floor: ig.LangLabel.Data | 'MISSING LABEL';
        forceCombatMode: boolean
        gui: Record<string, ig.GuiElementBase>
        highscore: number[]
        highscoreObs: number[]
        landmarks: sc.MapModel['activeLandmarks']
        logs: sc.MenuModel.LogEntry[]
        lories: sc.LoreModel['unlockedLories']
        map: string
        menuNewEntries: sc.MenuModel['newUnlocks']
        message: sc.MessageModel.Data
        mobilityBlock: keyof typeof sc.GAME_MOBILITY_BLOCK
        newGamePlus: sc.NewGamePlusModel.Data
        options: {} /* this is always empty */
        party: sc.PartyModel.Data
        permaTask: ig.LangLabel.Data
        player: sc.PlayerModel.Data
        playtime: number
        position: ig.TeleportPosition.Settings
        quests: Data.Quests;
        questsSeen: Record<string, boolean>
        saveVersion: number
        specialMap: ig.LangLabel.Data;
        stamps: sc.MenuModel['mapStamps']
        stats: sc.StatsModel['values']
        timers: Record<string, sc.TimerEntry.Data>
        tradersFound: { [id: string]: Data.TraderFound };
        vars: Data.Vars;
        version: string
        visitedAreas: Record<string, {}>
      }

      namespace Data {
        interface TraderFound {
          characterName: string;
          map: ig.LangLabel.Data;
          area: ig.LangLabel.Data;
          time: number;
        }

        interface Quests {
          locale: { [id: string]: Quests.Locale };
        }

        namespace Quests {
          interface Locale {
            time: number;
            location: Locale.Location;
            character: string;
          }

          namespace Locale {
            interface Location {
              area: ig.LangLabel.Data;
              map: ig.LangLabel.Data;
            }
          }
        }

        interface Vars {
          levelName: string;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          storage: any;
        }
      }
    }
    interface SaveSlot extends ig.Class {
      src: string;
      data: ig.SaveSlot.Data;

      getData(this: this): this['data'];
      getSrc(this: this): this['src'];
      mergeData(this: this, data: Partial<ig.SaveSlot.Data>): void;
    }
    interface SaveSlotConstructor extends ImpactClass<SaveSlot> {
      new (source: string | ig.SaveSlot.Data): SaveSlot;
    }
    var SaveSlot: SaveSlotConstructor;

    namespace StorageData {
      interface SaveFileData {
        slots: Array<string | ig.SaveSlot.Data>;
        autoSlot?: string | ig.SaveSlot.Data | null;
        globals: string | ig.Storage.GlobalsData;
        lastSlot?: number;
      }
    }
    interface StorageData extends ig.Class {
      data: ig.StorageData.SaveFileData | null;

      save(this: this, data: string): void;
      getData(this: this): this['data'];
    }
    interface StorageDataConstructor extends ImpactClass<StorageData> {
      new (): StorageData;
    }
    var StorageData: StorageDataConstructor;

    namespace Storage {
      namespace GlobalsData {
        type Options = {
          [K in keyof sc.OPTIONS_DEFINITION.KnownTypesMap]: sc.OPTIONS_DEFINITION.KnownTypesMap[K]['init'];
        } & Record<string, unknown>;
      }
      interface GlobalsData {
        featVersion: number;
        feats: Record<string, boolean>;
        options: GlobalsData.Options;
      }

      interface Listener {
        onStorageGlobalSave?(this: this, globals: ig.Storage.GlobalsData): void;
        onStorageSave?(this: this, savefile: ig.SaveSlot.Data): void;
        onStoragePreLoad?(this: this, savefile: ig.SaveSlot.Data): void;
        onStoragePostLoad?(this: this, savefile: ig.SaveSlot.Data): void;
      }
    }
    interface Storage extends ig.GameAddon, sc.Model {
      slots: ig.SaveSlot[];
      autoSlot: ig.SaveSlot | null;
      lastUsedSlot: number;
      listeners: ig.Storage.Listener[];
      globalData: ig.Storage.GlobalsData;
      data: ig.StorageData;

      register(this: this, listener: ig.Storage.Listener): void;
      _saveToStorage(this: this): ig.StorageData.SaveFileData;
    }
    interface StorageConstructor extends ImpactClass<Storage> {
      new (): Storage;
    }
    var Storage: StorageConstructor;
    var storage: Storage;

    namespace StorageTools {
      function isEncrypted(data: unknown): data is string;
      function encrypt(data: string): string;
      function decrypt(data: string): string;
      function decryptSlotData(data: string): ig.SaveSlot.Data;
      function encryptSlotData(data: ig.SaveSlot.Data): string;
    }
  }
}
