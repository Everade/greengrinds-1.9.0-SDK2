# Greengrinds 1.9.0 SDK2 for Construct 3

This repository contains code for the Greengrinds 1.9.0 plugin, which has been updated to support SDK2. Greengrinds exposes more Greenworks/Steam APIs (Cloud File, Achievements, Stats, DLC) to NW.js and Electron than the official C3 Greenworks plugin.
- Supports NW.js v0.86.0
- Supports Electron v30.5.1
- Uses Steamworks SDK 1.58a (included)

## Distributing

The Construct plugin is distributed as a [.c3addon file](https://www.construct.net/en/make-games/manuals/addon-sdk/guide/c3addon-file), which is essentially a renamed zip file with the addon files.

> [!WARNING]
> If you want to modify the plugin for your own purposes, it is strongly advised to **change the Construct plugin ID.** This will avoid serious compatibility problems which could result in your project becoming unopenable.

## Download & Install Instructions

Download the latest [release](https://github.com/Everade/greengrinds-1.9.0-SDK2/releases). To install an addon in Construct 3, open the Addon Manager (Menu > View > Addon Manager). In this dialog, click "Install new addon..." and choose the .c3addon file. Construct 3 will prompt to confirm installation of the addon. If you confirm the install, you must restart Construct 3 before the addon is available. In the browser you can just press the Reload button. You can also install it by directly dragging and dropping the .c3addon file in to Construct 3.

## Documentation

- [Documentation](https://www.construct.net/en/make-games/addons/244/greengrinds/documentation)
- [ACEs](https://www.construct.net/en/make-games/addons/244/greengrinds/aces)

## Attribution

Greengrinds 1.9.0 by [Mikal](https://www.construct.net/en/make-games/addons/244/greengrinds).
SDK2 port by [EMIINDO](https://github.com/EMIINDO/greengrinds-1.12.0-stable-c3addon).

## License

This code is published under the [MIT license](LICENSE).
