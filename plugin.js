"use strict";
(function () {
  const PLUGIN_ID = "open_Greengrinds";
  const PLUGIN_VERSION = "1.9.1";
  const PLUGIN_CATEGORY = "general";

  let app = null;

  const SDK = globalThis.SDK;
  const PLUGIN_CLASS =
    (SDK.Plugins.open_Greengrinds = class GreengrindsPlugin extends (
      SDK.IPluginBase
    ) {
      constructor() {
        super(PLUGIN_ID);

        SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

        this._info.SetName(globalThis.lang(".name"));
        this._info.SetDescription(globalThis.lang(".description"));
        this._info.SetCategory(PLUGIN_CATEGORY);
        this._info.SetAuthor("open");
        this._info.SetHelpUrl(globalThis.lang(".help-url"));
        this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
        this._info.SetIsSingleGlobal(true);

        this._info.SetDOMSideScripts(["c3runtime/domSide.js"]);

        this._info.AddFileDependency({
          filename: "c3runtime/greenworks.js",
          type: "copy-to-output",
          fileType: "application/javascript",
        });

        // If running under node, and electron, do not include files.
        // Otherwise include precompiled binary files (compiled for nw.js 0.33.3)
        if (
          !(
            typeof process !== "undefined" &&
            process &&
            process.versions &&
            process.versions.node &&
            process.versions.electron
          )
        ) {
          // console.log('*** INFO *** Not running in node & electron, plugin.js including greenworks*.node files');
          this._info.AddFileDependency({
            filename: "greenworks-win64.node",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "greenworks-osx.node",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "libsdkencryptedappticket.dylib",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "libsteam_api.dylib",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "sdkencryptedappticket64.dll",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "steam_api64.dll",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "greenworks-linux64.node",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "libsdkencryptedappticket.so",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });

          this._info.AddFileDependency({
            filename: "libsteam_api.so",
            type: "copy-to-output",
            fileType: "application/octet-stream",
          });
        }

        SDK.Lang.PushContext(".properties");

        this._info.SetProperties([]);

        SDK.Lang.PopContext(); //.properties
        SDK.Lang.PopContext();
      }
    });

  PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
})();
