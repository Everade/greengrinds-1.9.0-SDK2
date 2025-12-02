"use strict";
(function()
{
    const PLUGIN_CLASS = SDK.Plugins.open_Greengrinds;

    PLUGIN_CLASS.Instance = class GreengrindsInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}());