"use strict";
{
    globalThis.C3.Plugins.open_Greengrinds.Exps = {
        ActivateAchievementLastErr()
        {
            return this._activateAchievementLastErr;
        },

        GetAchievementLastData()
        {
            return this._getAchievementLastData;
        },

        GetAchievementLastErr()
        {
            return this._getAchievementLastErr;
        },

        ClearAchievementLastErr()
        {
            return this._clearAchievementLastErr;
        },

        GetAchievementNamesLastErr()
        {
            return this._getAchievementNamesLastErr;
        },

        GetAchievementNamesLastData()
        {
            return this._getAchievementNamesLastData.toString();
        },

        GetNumberOfAchievementsLastData()
        {
            return this._getNumberOfAchievementsLastData;
        },

        GetNumberOfAchievementsLastErr()
        {
            return this._getNumberOfAchievementsLastErr;
        },

        GameLanguage()
        {
            return this._gameLang;
        },

        UILanguage()
        {
            return this._uiLang;
        },

        ReadTextFromFileLastData()
        {
            return this._readTextFromFileLastData;
        },

        ReadTextFromFileLastErr()
        {
            return this._readTextFromFileLastErr;
        },

        SaveTextToFileLastErr()
        {
            return this._saveTexttoFileLastErr;
        },

        GetFileCount()
        {
            return this._getFileCount;
        },

        DeleteFileLastErr()
        {
            return this._deleteFileLastErr;
        },

        GetCloudQuotaTotal()
        {
            return this._getCloudQuotaTotal;
        },

        GetCloudQuotaAvailable()
        {
            return this._getCloudQuotaAvailable;
        },

        GetFileNameAndSizeLastErr()
        {
            return this._getFileNameAndSizeLastErr;
        },

        GetFileNameAndSizeName()
        {
            return this._getFileNameAndSizeName;
        },

        GetFileNameAndSizeSize()
        {
            return this._getFileNameAndSizeSize;
        },

        SaveFileToCloudLastErr()
        {
            return this._saveFileToCloudLastErr;
        },

        GetStatIntLastData()
        {
            return this._getStatIntLastData;
        },

        GetStatIntLastErr()
        {
            return this._getStatIntLastErr;
        },

        GetStatFloatLastData()
        {
            return this._getStatFloatLastData;
        },

        GetStatFloatLastErr()
        {
            return this._getStatFloatLastErr;
        },

        StoreStatsLastData()
        {
            return this._storeStatsLastData;
        },

        StoreStatsLastErr()
        {
            return this._storeStatsLastErr;
        },

        StaticAccountIDStr()
        {
            return this._staticAccountIdStr;
        },
        GetIsDLCInstalledLastData()
        {
            return this._getIsDLCInstalledLastData;
        },

        GetIsDLCInstalledLastErr()
        {
            return this._getIsDLCInstalledLastErr;
        },

        GetDlcDataByIndexLastData()
        {
            return this._getDLCDataByIndexLastData;
        },

        GetDlcDataByIndexLastErr()
        {
            return this._getDLCDataByIndexLastErr;
        },

        GetDLCCountLastData()
        {
            //implementation
            return this._getDLCCountLastData;
        },

        GetDlcCountLastErr()
        {
            //implementation
            return this._getDLCCountLastErr;
        },

        ScreenName()
        {
            return this._screenName;
        },

        AccountID()
        {
            return this._accountId;
        },

        StaticAccountID()
        {
            // Deprecated expression for backwards compatibility. Return as number,
            // which is lossy since it can be over MAX_SAFE_INTEGER.
            const ret = parseFloat(this._staticAccountId);
            return isFinite(ret) ? ret : 0;
        },

        UserLevel()
        {
            return this._level;
        },

        StaticAccountIDStr()
        {
            return this._staticAccountIdStr;
        },

        IPCountry()
        {
            //implementation
            return this._ipCountry;
        },

        GetFriendAvatarLastData()
        {
            //implementation
            return this._getFriendAvatarLastData;
        }
    };
}