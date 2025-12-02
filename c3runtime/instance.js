"use strict";

{
    const DOM_COMPONENT_ID = "greenworks";

    globalThis.C3.Plugins.open_Greengrinds.Instance = class GreenworksInstance extends globalThis.ISDKInstanceBase
    {
         constructor()
        {
            console.log("*** INFO *** instance.js started");
            super({ domComponentId: DOM_COMPONENT_ID });

            const properties = this._getInitProperties();

            this._isAvailable = false;
            this._isGameOverlayEnabled = false;
			this._isRunningOnSteamDeck = false;

            this._accountId = 0;
            this._staticAccountId = ""; // string because is 64-bit number
            this._screenName = "";
            this._level = 0;
            this._gameLang = "";
            this._uiLang = "";
            this._ipCountry = "";

            // Cloud File Variables
            this._readTextFromFileLastData = "";
            this._readTextFromFileLastErr = "";
            this._saveTextToFileLastErr = "";
            this._deleteFileLastErr = "";
            this._isCloudEnabledForUser = false;
            this._isCloudEnabled = false;
            this._getFileCount = 0;
            this._getCloudQuotaTotal = "";
            this._getCloudQuotaAvailable = "";
            this._getCloudQuotaLastErr = "";
            this._getFileNameAndSizeName = "";
            this._getFileNameAndSizeSize = 0;
            this._saveFileToCloudLastErr = "";

            // Achievement Variables
            this._activateAchievementLastErr = "";
            this._getAchievementLastData = 0;
            this._getAchievementLastErr = "";
            this._clearAchievementLastErr = "";
            this._getAchievementNamesLastData = [];
            this._getAchievementNamesLastErr = "";
            this._getNumberOfAchievementsLastErr = "";
            this._getNumberOfAchievementsLastData = 0;

            // Stat Variables
            this._getStatIntLastData = 0;
            this._getStatIntLastErr = "";
            this._getStatFloatLastData = 0;
            this._getStatFloatLastErr = "";
            this._storeStatsLastData = "";
            this._storeStatsLastErr = "";

            // DLC Variables
            this._getIsDLCInstalledLastData = 0;
            this._getIsDLCInstalledLastErr = "";
            this._getDLCDataByIndexLastData = "";
            this._getDLCDataByIndexLastErr = "";
            this._getDLCCountLastData = 0;
            this._getDLCCountLastErr = "";



            this._addDOMMessageHandlers([
                ["game-overlay-activated", e => this._OnGameOverlayActivated(e)]
            ]);

            // Get initial state from DOM. Make runtime loading wait for the response.
            this.runtime.addLoadPromise(
            this._postToDOMAsync("load")
                .then(data => {
                this._isAvailable = data["isAvailable"];
                this._isGameOverlayEnabled = data["isGameOverlayEnabled"];
                this._isRunningOnSteamDeck = data["isRunningOnSteamDeck"];

                this._accountId = data["accountId"];
                this._staticAccountId = data["staticAccountId"];
                this._staticAccountIdStr = data["staticAccountId"];
                this._screenName = data["screenName"];
                this._level = data["level"];
                this._gameLang = data["gameLang"];
                this._uiLang = data["uiLang"];

                // Cloud File Variables
                this._isCloudEnabledForUser = data["isCloudEnabledForUser"];
                this._isCloudEnabled = data["isCloudEnabled"];
                this._getFileCount = data["getFileCount"];
                this._ipCountry = data["getIPCountry"];

            }));
        }

        _release()
        {
            super._release();
        }

        _OnGameOverlayActivated(e)
        {
            if (e["isActive"]) this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnOverlayActivated);
            else this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnOverlayDeactivated);
        }
    };

}