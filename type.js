"use strict";
(function()
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.open_Greengrinds;

    PLUGIN_CLASS.Type = class GreengrindsType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}());