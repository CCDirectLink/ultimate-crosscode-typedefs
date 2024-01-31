// requires impact.base.game
// requires impact.feature.storage.storage

export {};

declare global {
  namespace sc {
    namespace VerionChangeLog {
      interface ChangelogFile {
        changelog: ChangelogFile.Entry[];
      }
      namespace ChangelogFile {
        export interface Entry {
          name: string;
          version: string;
          date: string;
          fixes?: string[];
          changes?: string[];
        }
      }

      type Changelog = ChangelogFile.Entry[];

      interface VersionObject {
        major: number;
        minor: number;
        patch: number;
      }
    }
    interface VerionChangeLog extends ig.SingleLoadable {
      major: number;
      minor: number;
      patch: number;
      hotfix: number;
      special: Nullable<string>;
      saveVersion: number;
      oldMajor: number;
      oldMinor: number;
      oldPatch: number;
      changelog: sc.VerionChangeLog.Changelog;

      saveCurrentVersion(this: this): void;
      getLogsBetweenVersions(
        this: this,
        dest: sc.VerionChangeLog.Changelog,
      ): sc.VerionChangeLog.Changelog;
      toString(this: this): string;
      toOnlyNumberString(this: this): string;
      hasVersionChanged(this: this): boolean;
      loadInternal(this: this): void;
      onerror(this: this, error: any): void; // TODO JQueryXHR
      onload(this: this, data: sc.VerionChangeLog.ChangelogFile): void; // TODO JQueryXHR
      getLastSlotDataUpdated(this: this): string;
      updateSaveSlotVersion(this: this, slot: ig.SaveSlot): void;
      _getVersionString(this: this, major: number, minor: number, patch: number): string;
      _toObject(this: this): sc.VerionChangeLog.VersionObject;
    }
    interface VerionChangeLogConstructor extends ImpactClass<VerionChangeLog> {
      new (): VerionChangeLog;
    }
    var VerionChangeLog: VerionChangeLogConstructor;
    var version: VerionChangeLog;
  }
}
