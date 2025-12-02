"use strict";
{
    globalThis.C3.Plugins.open_Greengrinds.Acts = {
        ActivateAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("activate-achievement",
            {
                "achievement": achievement
            })
                .then(() => {
                console.warn("[Construct 3] Greenworks: success activate achievement");
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnActivateAchievementSuccess);
            })
                .
            catch (err => {
                this._activateAchievementLastErr = err;
                console.warn("[Construct 3] Greenworks: error activate achievement: ", err);
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnActivateAchievementError);
            });
        },

        GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },

        ClearAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("clear-achievement",
            {
                "achievement": achievement
            })
                .then(() => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error clear achievement: ", err);
                this._clearAchievementLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementError);
            });
        },

        GetAchievementNames()
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-achievement-names",
            {})
                .then((names) => {
                this._getAchievementNamesLastData = names;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementNamesSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement names: ", err);
                this._getAchievementNamesLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementError);
            });
        },

        GetNumberOfAchievements()
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-number-of-achievements",
            {})
                .then((number) => {
                this._getNumberOfAchievementsLastData = number;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetNumberOfAchievementsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement names: ", err);
                this._getNumberOfAchievementsLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetNumberOfAchievementsError);
            });
        },

        ActivateOverlay(option)
        {
            const OVERLAY_OPTIONS = [
        "Friends",
        "Community",
        "Players",
        "Settings",
        "OfficialGameGroup",
        "Stats",
        "Achievements"
    ];
            if (!this._isAvailable) return;
            this._postToDOM("activate-overlay",
            {
                "option": OVERLAY_OPTIONS[option]
            });
        },

        SaveTextToFile(file_Name, file_Content)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("save-text-to-file",
            {
                "file_content": file_Content,
                "file_name": file_Name
            })
                .then(() => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSaveTextToFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error save text to file: ", err);
                this._saveTextToFileLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSaveTextToFileError);
            });
        },

        ReadTextFromFile(file_Name)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("read-text-from-file",
            {
                "file_name": file_Name
            })
                .then((e) => {
                this._readTextFromFileLastData = e;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnReadTextFromFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error read text from file: ", err);
                this._readTextFromFileLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnReadTextFromFileError);
            });
        },

        GetCloudStatus()
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-cloud-status",
            {})
                .then((e) => {
                this._isCloudEnabled = e["isCloudEnabled"];
                this._isCloudEnabledForUser = e["isCloudEnabledForUser"];
                this._getFileCount = e["getFileCount"];
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetCloudStatusSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get cloud status: ", err);
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetCloudStatusError);
            });
        },

        DeleteFile(file_Name)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("delete-file",
            {
                "file_name": file_Name
            })
                .then((e) => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnDeleteFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error delete file: ", err);
                this._deleteFileLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnDeleteFileError);
            });
        },

        GetCloudQuota()
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-cloud-quota",
            {})
                .then((e) => {
                this._getCloudQuotaTotal = e["total"];
                this._getCloudQuotaAvailable = e["available"];
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetCloudQuotaSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get cloud quota: ", err);
                this._getCloudQuotaLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetCloudQuotaError);
            });
        },

        GetFileNameAndSize(index)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-file-name-and-size",
            {
                "index": index
            })
                .then((e) => {
                this._getFileNameAndSizeName = e["name"];
                this._getFileNameAndSizeSize = e["size"];
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetFileNameAndSizeSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get file name and size: ", err);
                this._getFileNameAndSizeLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetFileNameAndSizeError);
            });
        },

        EnableCloud(flag)
        {
            if (!this._isAvailable) return;
            this._postToDOM("enable-cloud",
            {
                "flag": flag == 1 ? true : false
            });
        },

        SaveFileToCloud(filePath)
        {
            // To simplify, only save file at a time
            if (!this._isAvailable) return;
            var FilePathArray = [];
            FilePathArray.push(filePath);
            this._postToDOMAsync("save-file-to-cloud",
            {
                "file_path": FilePathArray
            })
                .then(() => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSaveFileToCloudSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error save file to cloud: ", err);
                this._saveFileToCloudLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSaveFileToCloudError);
            });
        },

        GetStatInt(name)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-stat-int",
            {
                "name": name
            })
                .then((value) => {
                this._getStatIntLastData = value;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetStatIntSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get stat int: ", err);
                this._getStatIntLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetStatIntError);
            });
        },

        GetStatFloat(name)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-stat-float",
            {
                "name": name
            })
                .then((value) => {
                this._getStatFloatLastData = value;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetStatFloatSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get stat float: ", err);
                this._getStatFloatLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetStatFloatError);
            });
        },

        SetStat(value, name)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("set-stat",
            {
                "name": name,
                "value": value
            })
                .then((success) => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSetStatSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error set stat float: ", err);
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnSetStatError);
            });
        },

        StoreStats()
        {
            if (!this._isAvailable) return;
            console.log("storeStats");
            this._postToDOMAsync("store-stats",
            {})
                .then((game_id) => {
                console.log("storeStatsSuccess");
                this._storeStatsLastData = game_id;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnStoreStatsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error store stats: ", err);
                this._storeStatsLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnStoreStatsError);
            });
        },

        ResetAllStats(resetAchievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("reset-all-stats",
            {
                "reset_achievement": resetAchievement > 0 ? true : false
            })
                .then((success) => {
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnResetAllStatsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: reset all stats error");
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnResetAllStatsError);
            });
        },

        GetIsDLCInstalled(dlcAppId)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-is-dlc-installed",
            {
                "dlc_app_id": dlcAppId
            })
                .then((isDLCInstalled) => {
                this._getIsDLCInstalledLastData = isDLCInstalled ? 1 : 0;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetIsDLCInstalledSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get is DLC installed: ", err);
                this._getIsDLCInstalledLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetIsDLCInstalledError);
            });
        },

        InstallDlc(dlcAppId)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("install-dlc",
            {
                "dlc_app_id": dlcAppId
            })
                .then((e) => {})
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error DLC install", err);
            });
        },

        UninstallDlc(dlcAppId)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("uninstall-dlc",
            {
                "dlc_app_id": dlcAppId
            })
                .then((e) => {})
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error DLC uninstall", err);
            });
        },

        GetDlcDataByIndex(index)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-dlc-data-by-index",
            {
                "index": index
            })
                .then((data) => {
                this._getDLCDataByIndexLastData = data;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetDLCDataByIndexSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get dlc data by index: ", err);
                this._getDLCDataByIndexLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetDLCDataByIndexError);
            });
        },

        GetDlcCount()
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-dlc-count",
            {})
                .then((count) => {
                this._getDLCCountLastData = count;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetDLCCountSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get dlc count: ", err);
                this._getDLCCountLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetDLCCountError);
            });
        },

        GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },

                GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },
        GetFriendAvatar(steamId)
        {
            if (!this._isAvailable) return;
            this._postToDOMAsync("get-friend-avatar",
            {
                "steam-id": steamId
            })
                .then((data) => {
                this._getFriendAvatarLastData = data;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetFriendAvatarSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this._trigger(globalThis.C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },
    };
}