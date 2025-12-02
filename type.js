"use strict";
(function()
{
    const PLUGIN_CLASS = SDK.Plugins.open_Greengrinds;

    PLUGIN_CLASS.Type = class GreengrindsType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}());