// requires impact.base.game
// requires impact.base.loader
// requires impact.base.vars
// requires impact.feature.database.database
// requires game.config
// requires game.feature.quick-menu.quick-menu-model
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace LandmarkOption {
      interface Bounds {
        x: number;
        y: number;
        w: number;
        h: number;
      }
    }
    interface LandmarkOption {
      icon: unknown;
      bounds: LandmarkOption.Bounds;
    }
    interface LANDMARK_OPTIONS {
      DEFAULT: LandmarkOption;
    }
    let LANDMARK_OPTIONS: LANDMARK_OPTIONS;

    namespace MapModel {
      namespace Area {
        interface Landmark {
          name: ig.LangLabel.Data;
          description: ig.LangLabel.Data;
        }
      }

      interface Area {
        name: ig.LangLabel.Data;
        path: string;
        description: ig.LangLabel.Data;
        areaType: 'PATH' | 'TOWN' | 'DUNGEON';
        order: number;
        track: boolean;
        chests: number;
        boosterItem?: string;
        keyItem?: string;
        masterKeyItem?: string;
        condition?: string;
        position: Vec2;
        landmarks: { [name: string]: Area.Landmark };
      }

      interface Map {
        name: string;
        levels: { height: number }[];
        mapHeight: number;
        mapWidth: number;
        masterLevel: number;
        attributes: MapModel.MapAttributes
        screen: Vec2
        entities: MapModel.MapEntity[],
        layer: MapModel.MapLayer[];
      }
      
      interface MapEntity {
        type: string,
        x: number,
        y: number,
        level: number,
        settings: ig.Entity.Settings
      }

      interface MapAttributes {
        saveMode: 'ENABLED' | 'DISABLED' | ''
        bgm: string
        cameraInBounds: boolean
        'map-sounds': string
        mapStyle: string
        weather: string
        area: string
        npcRunners: string
      }

      type MapLayerType = 'Background' | 'Collision' | 'Navigation' | 'Light' | 'object1' | 'object2' | 'object3';
      type MapLayerLevelType = 'last' | 'light' | 'object1' | 'object2' | 'object3' | number;

      interface MapLayer {
        id: number;
        type: MapModel.MapLayerType;
        name: string;
        level: MapModel.MapLayerLevelType;
        width: number;
        height: number;
        visible: number;
        tilesetName: string;
        repeat: boolean;
        distance: number;
        yDistance: number;
        tilesize: number;
        moveSpeed: Vec2;
        data: number[][];
        lighter: boolean;
      }
    }
    interface MapModel extends ig.GameAddon, sc.Model {
      areas: { [name: string]: sc.MapModel.Area };
      currentArea: sc.AreaLoadable;

      isValidArea(this: this, key: string): boolean;
      getTotalChestsFound(this: this, asPercent: boolean): number;
      getTotalChests(this: this): number;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      validateCurrentPlayerFloor(this: this): void;
      getLandmark(this: this, landmark: string, area: string): sc.MapModel.Area.Landmark;
      getCurrentAreaLandmark(this: this, landmark: string): sc.MapModel.Area.Landmark;
      getAreaName(this: this, a?: string, b?: boolean, c?: boolean): string;
      getVisitedArea(this: this, area: string): boolean;
      getChestCount(this: this, key: string): number;
    }
    interface MapModelConstructor extends ImpactClass<MapModel> {
      new (): MapModel;
    }
    var MapModel: MapModelConstructor;
    var map: sc.MapModel;
  }
}
