"use strict";

{
    const DOM_COMPONENT_ID = "greenworks";

    C3.Plugins.open_Greengrinds.Instance = class GreenworksInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            console.log("*** INFO *** instance.js started");
            super(inst, DOM_COMPONENT_ID);

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



            this.AddDOMMessageHandlers([
                ["game-overlay-activated", e => this._OnGameOverlayActivated(e)]
            ]);

            // Get initial state from DOM. Make runtime loading wait for the response.
            this._runtime.AddLoadPromise(
            this.PostToDOMAsync("load")
                .then(data => {
                this._isAvailable = data["isAvailable"];
                this._isGameOverlayEnabled = data["isGameOverlayEnabled"];
                this._isRunningOnSteamDeck = data["isRunningOnSteamDeck"];

                this._accountId = data["accountId"];
                this._staticAccountId = data["staticAccountId"];
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

        Release()
        {
            super.Release();
        }

        _OnGameOverlayActivated(e)
        {
            if (e["isActive"]) this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnOverlayActivated);
            else this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnOverlayDeactivated);
        }
    };

}