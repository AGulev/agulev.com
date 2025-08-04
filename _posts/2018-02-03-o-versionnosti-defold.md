---
author: AGulev
categories:
- defold
date: '2018-02-03T21:45:13+03:00'
locale: ru
last_update: 2021-01-02
dsq_thread_id:
- '6456632917'
layout: post
lazyload_thumbnail_quality:
- default
permalink: /o-versionnosti-defold/
tags:
- defold
title: О версионности Defold.
image: '/wp-content/uploads/2018/02/2018-02-03_21-03-59-1-1024x924.jpg'
---

Чаще всего версия движка (runtime) и редактора нераздельно связаны. Так происходит у большинства игровых движков, и разработчики уже привыкли к этому.

У Defold все устроено иначе.

Редактор и движок — это независимые сущности. И это влияет на цикл разработки и частоту обновлений. Давайте разбираться.

<!--more-->

## Defold Editor 2

![Defold Editor 2](/wp-content/uploads/2018/02/2018-02-03_21-03-59-1-1024x924.jpg)

**Editor 2** — это редактор написанный с нуля на Clojure. Именно на него бросили все силы разработчики отвечающие за редактор, и он уже имеет больше возможностей, чем первый. Все новые функции, улучшения UX и прочие приятности делаются только для него.

![Editor 2 Features](/wp-content/uploads/2018/02/2018-02-03_21-04-47-1-1024x661.jpg)

На Github есть репозиторий, где можно сообщать о багах, оставлять пожелания к улучшению или поблагодарить разработчиков, если что-то вам особенно понравилось

Важно понимать, что редактор не имеет своей версионности и может обновляться независимо от рантайма хоть по 5 раз в день. Версия есть только у рантайма. Это делается для того, что бы исправления багов и нововведения попадали к пользователям движка побыстрее.

Вот парочка свежих нововведений для примера:

1. [Полтора месяца назад полностью сменили редактор кода](https://forum.defold.com/t/new-code-editor-in-editor-2-launched/14877?u=agulev). Основными нововведениями стали:
   - работа с несколькими курсорами;
   - миникарта для навигации по коду;
   - улучшенная подсветка синтаксиса;
   - улучшенная производительность при работе с большими файлами.

2. [Добавлен дебаггер](https://forum.defold.com/t/editor-2-in-editor-debugger/14911?u=agulev) для lua.

Разработка редактора ведется на нескольких ветках, но веткой для использования является `editor-alpha`, в ней всегда стабильная версия райнтайма и самый свежий редактор.

## Движок (Runtime)

Runtime — это то, что "крутится" непосредственно у конечного пользователя на его целевой платформе. После того, как вы нажимаете кнопку "build", все ваши ресурсы (графика, звуки, шейдеры, материалы, сцены, скрипты на lua и все остальное) подготавливаются и "воспроизводятся" с помощью runtime. Либо, если вы нажали кнопку bundle, то собираются в конечный билд для нужный платформы.

Примерно раз в 4 недели выходит новая стабильная версия движка. В тот же день это обновление "прилетает" и в редактор наряду с другими обновлениями, которые, как я уже сказал, происходят гораздо чаще.

Есть 3 канала движка:
[Стабильная](http://d.defold.com/stable/) — это уже протестированная версия, которая отправляется всем пользователям. Обновляться на нее совсем не страшно. Поломки, если и случаются, то крайне редко и быстро исправляются. По ссылке есть рантаймы и ресурсы для билдов, для каждой версии движка под все платформы.

[Alpha](http://d.defold.com/alpha/) — ранняя и неоттестированная версия с новыми фичами.

[Beta](http://d.defold.com/beta/) — версия, которая проходит тестирование перед релизом.

Сам я делаю релизы исключительно со стабильной версии рантайма. Но раз в 2 недели выходит Beta, которую я ставлю для помощи разработчикам в тестировании.

Бонусом хочу показать список изменений в движке, если бы новая версия выходила раз в год (точнее с 1 января 2017 по 1 февраля 2018 — чуть больше года):

```
DEF-2888 - Added: Android MultiDex support for NE.
DEF-2373 - Added: Option to pre-warm ParticleFX emitters.
DEF-3087 - Added: label.get_text_metrics function for label component.
DEF-2047 - Added: Particle orient along movement direction, stretch by curved values or by velocity.
DEF-28617 - Added: Linux support for native extensions.
DEF-27361 - Added: Pre-multiply alpha option in texture profiles.
DEF-1929 - Added: Ability to determine if the game is running on a debug build (sys.get_engine_info().is_debug)
DEF-2578 - Added: Spine skin color support.
DEF-2821 - Added: Added support for binary strings in the scripting CheckTable/PushTable.
DEF-1396 - Added: Added input.use_accelerometer to game.project to control accelerometer events.
DEF-2760 - Added: Dynamic loading/unloading of collectionfactory and factory resources
DEF-1101 - Added: Ray cast response on miss
DEF-1785 - Added: Software vsync
DEF-2913 - Added: Updated PVRTexLib to version 4.18
DEF-1284 - Added: Updated LuaJIT to version 2.0.5
DEF-2505 - Added: Facebook Gameroom integration
DEF-1644 - Added: New option in go.delete to also delete children.
DEF-2839 - Added: Log warning when acquiring input for same gameobject more than once (#1732)
DEF-2106 - Added: Particles in GUI
DEF-2746 - Added: Add 16-bit RGB/A and Luminosity + Alpha support to engine
DEF-2796 - Added: WebP lossy/lossless support for 16-bit RGB/A and Luminosity + Alpha
DEF-2731 - Added: Added Win32 support in Native Extensions
DEF-2778 - Added: Added support for iPhoneOS 10.3 and MacOSX 10.12
DEF-2772 - Added: Async decoding of WebP images
DEF-2651 - Added: Async texture GPU upload
DEF-2770 - Added: Added LuaSocket documentation
DEF-2535 - Added: Added improved particles batching.
DEF-2742 - Added: Added auto complete for buffer, html5 and profiler.
DEF-2745 - Added: Added minidump (.dmp) support to win32.
DEF-1058 - Added: Profiler memory and CPU usage information.
DEF-2685 - Added: HTML5 support to native extensions.
DEF-2727 - Added: Addded html5.run() function to call JavaScript from Lua.
DEF-2468 - Added: http.request supports PUT and HEAD.
DEF-1129 - Added: Android Immersive mode option
DEF-2382 - Added: App/package resource bundling
DEF-2069 - Added: Added engine version to dev apps
DEF-2543 - Added: Java compilation and Android resources in Native Extensions.
DEF-2630 - Added: Support for native extension app manifest.
DEF-1520 - Added: Support for configurable trigger overlap capacity.
DEF-2026 - Added: Make number of raycasts per frame requests configurable (physics.ray_cast_limit_2d and physics.ray_cast_limit_3d)
DEF-2628 - Added: Added editor check if bundle output directory exist and should be overwritten.
DEF-2574 - Added: Efficient WebP compression for PVRTC and ETC1
DEF-2582 - Added: screen_x/screen_y and screen_dx/screen_dy fields for multi touch input.
DEF-2483 - Added: Added buffer Lua module for creating buffers and manipulating streams
DEF-2528 - Added: Script relevant GetMainThread and *Instance functions added to Defold SDK.

DEF-2908 - Changed: Removed x86-linux and x86-darwin from the bundle step.

DEF-3086 - Fixed: Memory leak when loading two collectionproxies async that shared resources.
DEF-3098 - Fixed: Reenabled render.draw_line and render.draw_text for release builds.
DEF-2434 - Fixed: Bug when stopping one ParticleFX component would stop any other PFX on same GO.
DEF-3049 - Fixed: LiveUpdate resources could sometimes be invalidated when upgrading an Android app.
DEF-3027 - Fixed: LiveUpdate resource header verification.
DEF-3062 - Fixed: Bug where Spine rotations did not behave as expected.
DEF-3099 - Fixed: Childed GOs to model and Spine bones were delayed one frame.
DEF-3091 - Fixed: Added a build error check for Collada files with more than one root bone.
DEF-3093 - Fixed: Better error message when bundling and no iOS provisioning profile was specified (Bob.jar).
DEF-3073 - Fixed: Added rdynamic and "-Wl,option" support for platforms that support it on NE.
DEF-3076 - Fixed: dmBuffer::GetStream doesn't crash on null arguments anymore.
DEF-2540 - Fixed: Performance issue when muting all sounds. (This also fixes the fast forward issue.)
DEF-3071 - Fixed: Optimized render update to sort less during each draw call.
DEF-3059 - Fixed: User can now set break points in the user render script (and not the builtin one).
DEF-3090 - Fixed: Fixed components that previously sent wrong world matrix to shaders. (Spine, Model and ParticleFX).
DEF-3069 - Fixed: Crash fix for tilegrid when no physics is used.
DEF-3058 - Fixed: Engine video recording not working.
DEF-3057 - Fixed: Refactor sprite component to use indexed vertex buffers instead of triangle lists.
DEF-3052 - Fixed: Optimized the Sprite update transform function.
DEF-3054 - Fixed: Bug when playing a spine animation backwards 3 times.
DEF-3051 - Fixed: Optimized dmGameObject + UpdateTransform calls.
DEF-3007 - Fixed: dmBuffer now implements an interleaved format.
DEF-2739 - Fixed: Better error handling when reloading invalid shaders.
DEF-3035 - Fixed: 3D physics objects can now be spawned with a scale != 1.
DEF-3026 - Fixed: Improved error/warning parsing from native extension compile logs.
DEF-2993 - Fixed: Added missing launch images (iPhone X, iPhone 6 landscape).
DEF-2849 - Fixed: Pre-multiply alpha of vertex data has been moved to shader programs.
DEF-29443 - Fixed: Set initial transform on gui particle instance on creation.
DEF-29351 - Fixed: Optimized loading of assets (i.e. textures), freeing up memory sooner.
DEF-29545 - Fixed: Improved support for customizing the native extension build via the app manifest.
DEF-11441 - Fixed: Add group fields for both objects in trigger_response, collision_response and contact_point_response.
DEF-29761 - Fixed: Facebook Gameroom transaction error table fields was switched.
DEF-29752 - Fixed: Build size optimizations for the release build.
DEF-17322 - Fixed: Improve error message when calling go script functions from gui_script files.
DEF-29652 - Fixed: CSS style to make the HTML5 game canvas fit within small windows.
DEF-29661 - Fixed: "Show In Finder" option was missing in Editor1.
DEF-28211 - Fixed: Fixed saving/loading of binary strings on HTML5.
DEF-29611 - Fixed: Crash when calling some functions with callback parameters inside coroutines/pcalls.
DEF-29581 - Fixed: Cubemap textures had inverted Y axis.
DEF-29793 - Fixed: Game objects can now hold up to 65536 components.
DEF-1286 - Fixed: Discard the z-component when checking length of 2D raycast.
DEF-2936 - Fixed: Spine animated tint applied twice in some cases.
DEF-2938 - Fixed: Engine now handles .wav files with superfluous data.
DEF-2934 - Fixed: Crash when returning data in builtin functions (init, update etc).
DEF-2633 - Fixed: http.request() failed for some https connections.
DEF-2914 - Fixed: Collectionfactory and factory resource was not loaded when parent collection was loaded
DEF-2902 - Fixed: Improve handling of erroneous mesh input data
DEF-2915 - Fixed: "ERROR:RESOURCE: Empty resource path" is spammed in console
DEF-2907 - Fixed: Spine draw order out of bounds
DEF-2891 - Fixed: Fixing invalid MathUtil::decompose and quaternionFromMatrix.
DEF-2896 - Fixed: Added more allowed libs when building android (native extensions)
DEF-2881 - Fixed: Fixed issue with bundling Win32 using native extensions.
DEF-1580 - Fixed: Distance field font rendering improvements.
DEF-2871 - Fixed: Incorrect right/middle mouse button mapping on HTML5.
DEF-2872 - Fixed: Fixed Windows link command line for NE.
DEF-1827 - Fixed: GUI nodes stretch when changing window size while disabled.
DEF-2845 - Fixed: Correctly initialize font cache.
DEF-2867 - Fixed: Headless version of engine no longer depend on GLFW/X/OGL.
DEF-2857 - Fixed: Truncate info/error/warning editor marker strings if too large.
DEF-2715 - Fixed: Collada scene start/end/framerate are parsed and used.
DEF-2854 - Fixed: Collada asset unit is applied to bone positions.
DEF-2837 - Fixed: Increased the Java heap size for javac and dx commands in build service.
DEF-2450 - Fixed: Reverse mouse wheel scroll direction in HTML5 (#1737)
DEF-2743 - Fixed: Overriding material with different uniform setup can cause incorrect results or crash (#1736)
DEF-2769 - Fixed: Animations sometimes stop updating when gameobjects are deleted (#1731)
DEF-1489 - Fixed: Web-based profiler showing wrong time on random windows machines
DEF-2838 - Fixed: Fixed bug where a rig instance animation would influence some non-animated rig instances (#1727)
DEF-1964 - Fixed: Texture packer and color profiles
DEF-2710 - Fixed: Collada fixes for unit-tag, missing bones and runtime crash
DEF-2306 - Fixed: MOUSE_BUTTON_LEFT and MOUSE_BUTTON_MIDDLE remapped to correct buttons (#1064)
DEF-2831 - Fixed: Fixed bug with gui pfx update call (#1719)
DEF-2458 - Fixed: Crash fix in Tremolo, for vlc encoded ogg files (#1717)
DEF-2828 - Fixed: Fixed test_memprofile for OSX Sierra (#1715)
DEF-2820 - Fixed: Fixed issue of async loading proxies stalling and possibly crashing (#1713)
DEF-2817 - Fixed: Cleanup of potentially bad error messages (#1714)
DEF-2813 - Fixed: Fixed crash when error logging a bad string (in gui.delete_texture)
DEF-2437 - Fixed: The render.get_render_target_width() and render.get_render_target_height() now support BUFFER_TYPE_COLOR_BIT/BUFFER_TYPE_DEPTH_BIT/BUFFER_TYPE_STENCIL_BIT
DEF-2807 - Fixed: Added sound name output when it fails to decode
DEF-2809 - Fixed: Embedded camera component not working in Editor 1
DEF-2811 - Fixed: Target app: Failing to load project file restarts the target app
DEF-2814 - Fixed: Native Extensions now build debug builds for Win32 too
DEF-2690 - Fixed: Bump max spine scene count for GUI scenes
DEF-2716 - Fixed: Minor fix for ColladaUtil if scene only has bones in the visual scenes entry.
DEF-1954 - Fixed: WebP lossy compression with HIGH compression level gave visual errors
DEF-2688 - Fixed: The particle spawn rate spread is now working
DEF-2768 - Fixed: Libraries with unusual folder structure crashed Bob
DEF-2756 - Fixed: Small improvement on error handling if the generated R.java doesn't compile
DEF-2625 - Fixed: Increased buffer used to parse game.project values to 2048
DEF-2741 - Fixed: Fixed crash related to spine scenes with more than 32 bones in GUI.
DEF-1995 - Fixed: msg.url() can be created before collection is loaded, and also be reused (msg.socket is a hash).
DEF-2721 - Fixed: Bob.jar now lists all options (including defoldsdk).
DEF-2702 - Fixed: Index out of range when spine draw order slot exceeds mesh count.
DEF-2692 - Fixed: Spine blending fixes for draw order animations.
DEF-2661 - Fixed: Reverse hashing usage in Collection factories to not impact performance.
DEF-2689 - Fixed: Engine crash when async loading is in progress during engine quit.
DEF-2566 - Fixed: GUI functions new_texture, delete_texture and set_texture_data now also accept hash.
DEF-2376 - Fixed: Support for nested hash()
DEF-2374 - Fixed: Auto completion for label module in editor
DEF-2128 - Fixed: Music interrupted on computed gain 0
DEF-2383 - Fixed: Collection time step was not affecting spine and model components
DEF-2459 - Fixed: Editor 1 failed to load texc library on Windows
DEF-2408 - Fixed: Documentation bug on window.set_listener()
DEF-2464 - Fixed: Models not correctly destroying bone GOs
DEF-1360 - Fixed: Texture packer improvements.
DEF-2660 - Fixed: Keyable draw order for spine scenes.
DEF-2668 - Fixed: Issue where UIWindow and EGLContext pointers were always null.
DEF-2665 - Fixed: Bundle bug where incorrect debug/release version was bundled.
DEF-2647 - Fixed: GUI Spine callback crash.
DEF-2658 - Fixed: Template node randomly selected.
DEF-2672 - Fixed: Unable to load texc_shared library in Editor 1.
DEF-2636 - Fixed: Win32 crash on unsupported network interfaces (dmengine.exe)
DEF-2621 - Fixed: Autorelease crash that occurred on some iOS versions.
DEF-2557 - Fixed: Keyable draworder offset bug in Spine animations
DEF-1696 - Fixed: go.animate() supports animation of scale using vector3
DEF-2484 - Fixed: Async store resources (LiveUpdate)
DEF-2626 - Fixed: Debug versions of dmengine will show console on Win32
DEF-2594 - Fixed: Remove usage of std::map, string and vector in engine
DEF-2634 - Fixed: Android build support from Windows
DEF-2595 - Fixed: Profile counters Lua.Ref and Lua.Mem in web profiler.
DEF-2522 - Fixed: Support for detection of require with same line access.
DEF-2541 - Fixed: Issue with Android native extension library order.
DEF-2585 - Fixed: Some buffer documentation fixes.
DEF-1408 - Fixed: Argument verification for render.draw and render.render_target.
DEF-2428 - Fixed: Model UVs can now be outside [0..1].
DEF-2567 - Fixed: Resources was incorrectly excluded if shared between excluded/bundled collectionproxies.
DEF-2569 - Fixed: On iOS UIScreen main screen bounds didn't update when rotating the screen.
DEF-1217 - Fixed: Spine keyable draworder
DEF-1688 - Fixed: Fixed issue of not flushing all purchases on Google Play after reconnecting to wifi
DEF-2024 - Fixed: Multi touch gave inconsistent input messages
DEF-2500 - Fixed: Extensions are now only initialized once
DEF-2519 - Fixed: CONSTANT_TYPE_WORLD is set to the identity matrix for model components
DEF-2538 - Fixed: When issue of last sound having gain 0, muted all audio
DEF-2547 - Fixed: Removed unused shader constants from builtin shaders
DEF-2554 - Fixed: Detect configuration change and reenable immersive mode
DEF-2558 - Fixed: Fix discrete sampling midpoint calculation in Spine animations
DEF-2561 - Fixed: Handling reset keys for spine draw order offsets
DEF-2565 - Fixed: Debug rendering for circles in 2D physics
DEF-2568 - Fixed: Typo fix for dmGraphics::GetNativeiOSUIWindow
DEF-2268 - Fixed: Tweaked DM_LUA_STACK_CHECK and fixed DM_LUA_ERROR so it's able to return value.
DEF-1333 - Fixed: Stencil scope sharing issues.
DEF-1305 - Fixed: Stencil mask resize bug.
DEF-2430 - Fixed: Spine animation gets stuck on the penultimate frame in certain scenes.
DEF-1392 - Fixed: Ping-pong animation causes infinite loop if duration is set to zero.
DEF-2222 - Fixed: gui.animate did not change value if duration was 0.
DEF-2433 - Fixed: Crash on Android dmengine dev app when rotating device.
DEF-1721 - Fixed: iOS dev app did not have launcher images.
DEF-2516 - Fixed: Storing large files (approx. >3mb) failed on HTML5.
DEF-2514 - Fixed: Collada skeleton node transforms were not applied on skeleton and animations.
DEF-2511 - Fixed: Some rotation animations for 3D models flipped at certain situations.
DEF-2517 - Fixed: Memory corruption of Facebook extension function list.
DEF-2513 - Fixed: Custom resources could only be specified without leading slash.
DEF-2508 - Fixed: Build report showed uncompressed files as -1 Byte.
DEF-2129 - Fixed: Better render batching for spine nodes with bones in GUI
DEF-2497 - Fixed: Sound was paused when gain is set to 0
DEF-2475 - Fixed: Certificate bug when building native extensions using old Defold installation
DEF-2309 - Fixed: Text enumerator MARKED_TEXT was in wrong order in editor
DEF-2491 - Fixed: Issue if a collection proxy was excluded previously but is now bundled
DEF-1129 - Fixed: Issue where fullscreen was activated even though immersive mode wasn't activated
DEF-2508 - Fixed: Build report showed uncompressed files as -1 B
```

## F.A.Q. вместо выводов

**Когда уже выйдет Defold 1.3?**

Надеюсь, что очень не скоро. Сама идеология движка такова, что API имеет очень хорошую обратную совместимость. Если я запущу проект который был сделан два назад на актуальной тогда версии движка, то он запустится и будет работать на новой версии движка без проблем. Именно это, как мне кажется, и символизирует номер версии который строится по принципу 1.2.X — где X по сути и есть номер версии, а 1.2 сложилось исторически, видимо.

**Когда уже выйдет Defold 2?**

Если речь про runtime, то ответ в предыдущем вопросе. Если речь идет про Editor 2, то он уже давно доступен для использования. И хотя мы используем канал `editor-alpha` — это никак разработке не мешает. А когда канал станет `stable` и станет ли — я не знаю и не все ли равно?

Вопросы оставляйте в комментариях — с радостью отвечу.



