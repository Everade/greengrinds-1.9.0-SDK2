"use strict";
{
  const DOM_COMPONENT_ID = "greenworks";
  const HANDLER_CLASS = class GreenworksDOMHandler extends DOMHandler {
    constructor(iRuntime) {
      super(iRuntime, DOM_COMPONENT_ID);
      console.log("*** INFO *** domSide.js started");
      this._isNWjs = iRuntime.GetExportType() === "nwjs";
      var userAgent = navigator.userAgent.toLowerCase();
      console.log("***INFO*** userAgent: " + userAgent);
      this._isElectron = userAgent.indexOf(" electron/") > -1;
      if (this._isElectron) {
        var indexElectron = userAgent.indexOf("electron/");
        this._electronVersion = parseInt(
          userAgent.slice(indexElectron + 9, indexElectron + 16).split(".")[0]
        );
        console.log(
          "***INFO*** this._electronVersion: " + this._electronVersion
        );
      }
      this._isAvailable = false;
      this._greenworks = null;
      this._steamId = null;
      this.AddRuntimeMessageHandlers([
        ["load", (e) => this._Load(e)],
        ["activate-achievement", (e) => this._OnActivateAchievement(e)],
        ["activate-overlay", (e) => this._OnActivateOverlay(e)],
        ["save-text-to-file", (e) => this._OnSaveTextToFile(e)],
        ["read-text-from-file", (e) => this._OnReadTextFromFile(e)],
        ["delete-file", (e) => this._OnDeleteFile(e)],
        ["get-cloud-status", (e) => this._OnGetCloudStatus(e)],
        ["get-file-name-and-size", (e) => this._OnGetFileNameAndSize(e)],
        ["enable-cloud", (e) => this._OnEnableCloud(e)],
        ["save-file-to-cloud", (e) => this._OnSaveFileToCloud(e)],
        ["get-cloud-quota", (e) => this._OnGetCloudQuota(e)],
        ["get-achievement", (e) => this._OnGetAchievement(e)],
        ["clear-achievement", (e) => this._OnClearAchievement(e)],
        [
          "get-number-of-achievements",
          (e) => this._OnGetNumberOfAchievements(e),
        ],
        ["get-achievement-names", (e) => this._OnGetAchievementNames(e)],
        ["get-stat-int", (e) => this._OnGetStatInt(e)],
        ["get-stat-float", (e) => this._OnGetStatFloat(e)],
        ["set-stat", (e) => this._OnSetStat(e)],
        ["store-stats", (e) => this._OnStoreStats(e)],
        ["reset-all-stats", (e) => this._OnResetAllStats(e)],
        ["get-is-dlc-installed", (e) => this._OnGetIsDLCInstalled(e)],
        ["install-dlc", (e) => this._OnInstallDLC(e)],
        ["uninstall-dlc", (e) => this._OnUninstallDLC(e)],
        ["get-dlc-data-by-index", (e) => this._OnGetDLCDataByIndex(e)],
        ["get-dlc-count", (e) => this._OnGetDLCCount(e)],
        ["get-friend-avatar", (e) => this._OnGetFriendAvatar(e)]
      ]);
    }
    _Load(e) {
      var requireGreenworksPaths = [
        "../app.asar.unpacked/greenworks/greenworks",
        "../../app.asar.unpacked/greenworks/greenworks",
        "../../../../../greenworks",
        "../../../../../../../greenworks",
      ];
      var greenworksPathFound = false;
      if (this._isNWjs || this._isElectron) {
        try {
          if (this._isNWjs) {
            try {
              console.log(
                "*** INFO *** domSide.js nw.js trying require(./greenworks"
              );
              this._greenworks = require("./greenworks");
            } catch (e) {
              console.error(
                "*** ERR *** domSide.js fail nw.js require greenworks module: " +
                  e
              );
            }
          } else {
            console.log(
              "***INFO*** Electron version: " + this._electronVersion
            );
            console.log(
              "*** INFO *** domSide.js, electron, require.resolve.paths(greenworks): " +
                require.resolve.paths("greenworks")
            );
            console.log(
              "*** INFO *** domSide.js DirName: " +
                __dirname +
                " FileName: " +
                __filename
            );
            for (var i = 0; i < requireGreenworksPaths.length; i++) {
              try {
                console.log(
                  "*** INFO *** domSide.js electron, trying: " +
                    requireGreenworksPaths[i]
                );
                if (this._electronVersion < 7) {
                  this._greenworks = require(requireGreenworksPaths[i]);
                } else {
                  this._greenworks = require("electron").remote.require(
                    "../app.asar.unpacked/greenworks/greenworks"
                  );
                }
                console.log(
                  "*** INFO *** domSide.js electron, found: " +
                    requireGreenworksPaths[i]
                );
                greenworksPathFound = true;
                break;
              } catch (e) {
                console.log(
                  "*** INFO *** domSide.js electron, not found: " +
                    requireGreenworksPaths[i]
                );
              }
            }
            if (!greenworksPathFound)
              throw new Error("Greenworks.js path not found");
          }
          this._greenworks["init"]();
          this._isAvailable = true;
          this._steamId = this._greenworks["getSteamId"]();
          if (this._greenworks["on"]) {
            this._greenworks["on"]("game-overlay-activated", (isActive) => {
              this.PostToRuntime("game-overlay-activated", {
                isActive: !!isActive,
              });
            });
          }
        } catch (err) {
          this._greenworks = null;
          this._isAvailable = false;
          console.error("[Construct 3] Failed to load Greenworks: ", err);
        }
      }
      return {
        isRunningOnSteamDeck: this._isAvailable ? !!this._greenworks["isSteamRunningOnSteamDeck"]() : false,
        isAvailable: this._isAvailable,
        isGameOverlayEnabled: this._isAvailable
          ? !!this._greenworks["isGameOverlayEnabled"]()
          : false,
        accountId: this._steamId ? this._steamId["accountId"] : 0,
        staticAccountId: this._steamId
          ? this._steamId["steamId"]
          : "",
        screenName: this._steamId ? this._steamId["screenName"] : "",
        level: this._steamId ? this._steamId["level"] : 0,
        gameLang: this._greenworks
          ? this._greenworks["getCurrentGameLanguage"]()
          : "",
        uiLang: this._greenworks
          ? this._greenworks["getCurrentUILanguage"]()
          : "",
        isCloudEnabledForUser: this._steamId
          ? this._greenworks["isCloudEnabledForUser"]()
          : false,
        isCloudEnabled: this._steamId
          ? this._greenworks["isCloudEnabled"]()
          : false,
        getFileCount: this._steamId ? this._greenworks["getFileCount"]() : 0,
        getIPCountry: this._steamId ? this._greenworks["getIPCountry"]() : "",
      };
    }
    _OnActivateAchievement(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["activateAchievement"](
          e["achievement"],
          resolve,
          reject
        );
      });
    }
    _OnActivateOverlay(e) {
      this._greenworks["activateGameOverlay"](e["option"]);
    }
    _OnSaveTextToFile(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["saveTextToFile"](
          e["file_name"],
          e["file_content"],
          resolve,
          reject
        );
      });
    }
    _OnReadTextFromFile(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["readTextFromFile"](e["file_name"], resolve, reject);
      });
    }
    _OnDeleteFile(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["deleteFile"](e["file_name"], resolve, reject);
      });
    }
    _OnSaveFileToCloud(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["saveFilesToCloud"](e["file_path"], resolve, reject);
      });
    }
    _OnGetCloudStatus(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var isCloudEnabledForUser =
            this._greenworks["isCloudEnabledForUser"]();
          var isCloudEnabled = this._greenworks["isCloudEnabled"]();
          var getFileCount = this._greenworks["getFileCount"]();
          resolve({
            isCloudEnabledForUser: isCloudEnabledForUser,
            isCloudEnabled: isCloudEnabled,
            getFileCount: getFileCount,
          });
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnGetFileNameAndSize(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var fileNameAndSize = this._greenworks["getFileNameAndSize"](
            e["index"]
          );
          resolve(fileNameAndSize);
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnGetCloudQuota(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["getCloudQuota"](function (
          total_bytes,
          available_bytes
        ) {
          resolve({ total: total_bytes, available: available_bytes });
        },
        reject);
      });
    }
    _OnEnableCloud(e) {
      this._greenworks["enableCloud"](e["flag"]);
    }
    _OnGetAchievement(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["getAchievement"](e["achievement"], resolve, reject);
      });
    }
    _OnClearAchievement(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["clearAchievement"](e["achievement"], resolve, reject);
      });
    }
    _OnGetAchievementNames(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var names = this._greenworks["getAchievementNames"]();
          resolve(names);
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnGetNumberOfAchievements(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var number = this._greenworks["getNumberOfAchievements"]();
          resolve(number);
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnGetStatInt(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var value = this._greenworks["getStatInt"](e["name"]);
          resolve(value);
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnGetStatFloat(e) {
      return new Promise((resolve, reject) => {
        if (this._steamId) {
          var value = this._greenworks["getStatFloat"](e["name"]);
          resolve(value);
        } else {
          reject(new Error(this._steamId));
        }
      });
    }
    _OnSetStat(e) {
      return new Promise((resolve, reject) => {
        var success = this._greenworks["setStat"](e["name"], e["value"]);
        if (success) {
          resolve(success);
        } else {
          reject(new Error(success));
        }
      });
    }
    _OnStoreStats(e) {
      return new Promise((resolve, reject) => {
        this._greenworks["storeStats"](resolve, reject);
      });
    }
    _OnResetAllStats(e) {
      return new Promise((resolve, reject) => {
        var success = this._greenworks["resetAllStats"](e["reset_achievement"]);
        if (success) {
          resolve(success);
        } else {
          reject(new Error(success));
        }
      });
    }
    _OnGetIsDLCInstalled(e) {
      return new Promise((resolve, reject) => {
        var success = this._greenworks["isDLCInstalled"](e["dlc_app_id"]);
        resolve(success);
      });
    }
    _OnInstallDLC(e) {
      return new Promise((resolve, reject) => {
        var success = this._greenworks["installDLC"](e["dlc_app_id"]);
        resolve(success);
      });
    }
    _OnUninstallDLC(e) {
      return new Promise((resolve, reject) => {
        var success = this._greenworks["uninstallDLC"](e["dlc_app_id"]);
        resolve(success);
      });
    }
    _OnGetDLCDataByIndex(e) {
      return new Promise((resolve, reject) => {
        var data = this._greenworks["getDLCDataByIndex"](e["index"]);
        resolve(JSON.stringify(data));
      });
    }
    _OnGetDLCCount(e) {
      return new Promise((resolve, reject) => {
        var count = this._greenworks["getDLCCount"]();
        if (count === undefined) {
          reject(new Error(count));
        } else {
          resolve(count);
        }
      });
    }
    _OnGetFriendAvatar(e) {
      return new Promise((resolve, reject) => {
        const requestResult = this._greenworks["requestUserInformation"](e["steam-id"], false);
        console.log('*** INFO *** domSide.js _OnGetFriendAvatar requestResult', requestResult);
        console.log('*** INFO *** domSide.js _OnGetFriendAvatar', e);
        var handle = this._greenworks["getSmallFriendAvatar"](e["steam-id"]);
        console.log('*** INFO *** domSide.js _OnGetFriendAvatar handle', handle);
        var data = this._greenworks["getImageRGBA"](handle);
        console.log('*** INFO *** domSide.js _OnGetFriendAvatar data', data);
        var size = this._greenworks["getImageSize"](handle);
        console.log('*** INFO *** domSide.js _OnGetFriendAvatar size', size);
        const result = {size, data};
        resolve(JSON.stringify(result));
      });
    }    
  };
  RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}
