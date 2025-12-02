"use strict";
{
    C3.Plugins.open_Greengrinds.Acts = {
        ActivateAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("activate-achievement",
            {
                "achievement": achievement
            })
                .then(() => {
                console.warn("[Construct 3] Greenworks: success activate achievement");
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnActivateAchievementSuccess);
            })
                .
            catch (err => {
                this._activateAchievementLastErr = err;
                console.warn("[Construct 3] Greenworks: error activate achievement: ", err);
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnActivateAchievementError);
            });
        },

        GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },

        ClearAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("clear-achievement",
            {
                "achievement": achievement
            })
                .then(() => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error clear achievement: ", err);
                this._clearAchievementLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementError);
            });
        },

        GetAchievementNames()
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-achievement-names",
            {})
                .then((names) => {
                this._getAchievementNamesLastData = names;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementNamesSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement names: ", err);
                this._getAchievementNamesLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnClearAchievementError);
            });
        },

        GetNumberOfAchievements()
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-number-of-achievements",
            {})
                .then((number) => {
                this._getNumberOfAchievementsLastData = number;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetNumberOfAchievementsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement names: ", err);
                this._getNumberOfAchievementsLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetNumberOfAchievementsError);
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
            this.PostToDOM("activate-overlay",
            {
                "option": OVERLAY_OPTIONS[option]
            });
        },

        SaveTextToFile(file_Name, file_Content)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("save-text-to-file",
            {
                "file_content": file_Content,
                "file_name": file_Name
            })
                .then(() => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSaveTextToFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error save text to file: ", err);
                this._saveTextToFileLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSaveTextToFileError);
            });
        },

        ReadTextFromFile(file_Name)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("read-text-from-file",
            {
                "file_name": file_Name
            })
                .then((e) => {
                this._readTextFromFileLastData = e;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnReadTextFromFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error read text from file: ", err);
                this._readTextFromFileLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnReadTextFromFileError);
            });
        },

        GetCloudStatus()
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-cloud-status",
            {})
                .then((e) => {
                this._isCloudEnabled = e["isCloudEnabled"];
                this._isCloudEnabledForUser = e["isCloudEnabledForUser"];
                this._getFileCount = e["getFileCount"];
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetCloudStatusSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get cloud status: ", err);
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetCloudStatusError);
            });
        },

        DeleteFile(file_Name)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("delete-file",
            {
                "file_name": file_Name
            })
                .then((e) => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnDeleteFileSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error delete file: ", err);
                this._deleteFileLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnDeleteFileError);
            });
        },

        GetCloudQuota()
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-cloud-quota",
            {})
                .then((e) => {
                this._getCloudQuotaTotal = e["total"];
                this._getCloudQuotaAvailable = e["available"];
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetCloudQuotaSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get cloud quota: ", err);
                this._getCloudQuotaLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetCloudQuotaError);
            });
        },

        GetFileNameAndSize(index)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-file-name-and-size",
            {
                "index": index
            })
                .then((e) => {
                this._getFileNameAndSizeName = e["name"];
                this._getFileNameAndSizeSize = e["size"];
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetFileNameAndSizeSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get file name and size: ", err);
                this._getFileNameAndSizeLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetFileNameAndSizeError);
            });
        },

        EnableCloud(flag)
        {
            if (!this._isAvailable) return;
            this.PostToDOM("enable-cloud",
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
            this.PostToDOMAsync("save-file-to-cloud",
            {
                "file_path": FilePathArray
            })
                .then(() => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSaveFileToCloudSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error save file to cloud: ", err);
                this._saveFileToCloudLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSaveFileToCloudError);
            });
        },

        GetStatInt(name)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-stat-int",
            {
                "name": name
            })
                .then((value) => {
                this._getStatIntLastData = value;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetStatIntSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get stat int: ", err);
                this._getStatIntLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetStatIntError);
            });
        },

        GetStatFloat(name)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-stat-float",
            {
                "name": name
            })
                .then((value) => {
                this._getStatFloatLastData = value;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetStatFloatSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get stat float: ", err);
                this._getStatFloatLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetStatFloatError);
            });
        },

        SetStat(value, name)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("set-stat",
            {
                "name": name,
                "value": value
            })
                .then((success) => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSetStatSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error set stat float: ", err);
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnSetStatError);
            });
        },

        StoreStats()
        {
            if (!this._isAvailable) return;
            console.log("storeStats");
            this.PostToDOMAsync("store-stats",
            {})
                .then((game_id) => {
                console.log("storeStatsSuccess");
                this._storeStatsLastData = game_id;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnStoreStatsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error store stats: ", err);
                this._storeStatsLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnStoreStatsError);
            });
        },

        ResetAllStats(resetAchievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("reset-all-stats",
            {
                "reset_achievement": resetAchievement > 0 ? true : false
            })
                .then((success) => {
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnResetAllStatsSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: reset all stats error");
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnResetAllStatsError);
            });
        },

        GetIsDLCInstalled(dlcAppId)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-is-dlc-installed",
            {
                "dlc_app_id": dlcAppId
            })
                .then((isDLCInstalled) => {
                this._getIsDLCInstalledLastData = isDLCInstalled ? 1 : 0;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetIsDLCInstalledSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get is DLC installed: ", err);
                this._getIsDLCInstalledLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetIsDLCInstalledError);
            });
        },

        InstallDlc(dlcAppId)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("install-dlc",
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
            this.PostToDOMAsync("uninstall-dlc",
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
            this.PostToDOMAsync("get-dlc-data-by-index",
            {
                "index": index
            })
                .then((data) => {
                this._getDLCDataByIndexLastData = data;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetDLCDataByIndexSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get dlc data by index: ", err);
                this._getDLCDataByIndexLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetDLCDataByIndexError);
            });
        },

        GetDlcCount()
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-dlc-count",
            {})
                .then((count) => {
                this._getDLCCountLastData = count;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetDLCCountSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get dlc count: ", err);
                this._getDLCCountLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetDLCCountError);
            });
        },

        GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },

                GetAchievement(achievement)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-achievement",
            {
                "achievement": achievement
            })
                .then((isAchieved) => {
                this._getAchievementLastData = isAchieved ? 1 : 0;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },
        GetFriendAvatar(steamId)
        {
            if (!this._isAvailable) return;
            this.PostToDOMAsync("get-friend-avatar",
            {
                "steam-id": steamId
            })
                .then((data) => {
                this._getFriendAvatarLastData = data;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetFriendAvatarSuccess);
            })
                .
            catch (err => {
                console.warn("[Construct 3] Greenworks: error get achievement: ", err);
                this._getAchievementLastErr = err;
                this.Trigger(C3.Plugins.open_Greengrinds.Cnds.OnGetAchievementError);
            });
        },
    };
}