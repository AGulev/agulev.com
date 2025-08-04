---
author: AGulev
categories:
- defold
date: '2018-03-11T23:05:49+03:00'
locale: ru
last_update: 2021-01-02
layout: post
lazyload_thumbnail_quality:
- default
tags:
- defold
- build size
- html5
- webp
title: Defold. Уменьшаем размер билда. App Manifest.
image: '/wp-content/uploads/2018/03/businesssize-300x200.jpg'
---

![Business Size](/wp-content/uploads/2018/03/businesssize-300x200.jpg)

Я часто рассказываю о том, как же клево, что у Defold очень маленький размер билда, но давайте рассмотрим, какие именно инструменты позволяют этого добиться.

<!--more-->

Есть две основных фичи движка, которые позволяют делать очень маленькие билды:

- для бинарника — это модульность, которая достигается с помощью использования App Manifest;
- для контента — это сжатие текстур, в частности WebP, который позволяет уменьшить размер текстур без потери качества.

В этот раз будем разбираться с модульностью.

## Defold App Manifest

[App Manifest](https://www.defold.com/manuals/project-settings/#_native_extension) — это конфиг файл, описывающий, какие именно библиотеки вы хотите использовать, а какие вы бы хотели исключить из билда. При сборке приложения этот файл отправляется на билд-сервер. На его основе вам высылают бинарник движка с нужным содержимым под необходимые платформы.

Работать с конфигом очень просто:

1. Создаем файл some_name.appmanifest в папке проекта.
2. Копируем в него нужную конфигурацию (где ее взять описано ниже).
3. указываем путь к файлу в game.project в разделе native_extension в поле App Manifest.

На данный момент опция App Manifest в документации помечена как «*alpha state*«, но я (и не только я) использую ее во всех своих играх и всё работает прекрасно. Пометка эта добавлена скорее из-за того, что все настройки приходится вносить руками, прописывать платформы и самому вспоминать, что использовал у себя в проекте, а что нет. В будущем обещают упростить этот процесс и сделать так, чтобы движок сам решал, какие модули вам нужны на основании того, что вы используете, но это не приоритетная задача по двум причинам: во-первых, чаще всего конфиг делается один раз и больше об этом не вспоминаешь, во-вторых, есть утилита, которая в этом помогает:

- [https://britzl.github.io/manifestation/](https://britzl.github.io/manifestation/) — онлайн конструктор, где можно просто проставить галочки напротив нужных вам функций и получить готовый app manifest.

Какие опции сейчас доступны (опишу опции из онлайн генератора, рассмотреть, какие библиотеки и за это отвечают можно там же):

- Exclude Physics 2D — удаление Box2D физики;
- Exclude Physics 3D — эта опция отключает Bullet Physics Library;
- Exclude Record — удаление встроенной [функции записи видео](https://www.defold.com/ref/sys/#start_record:file_name-frame_period-fps);
- Exclude Profiler — удаление встроенного профайлера;
- Exclude Facebook — удаление Facebook SDK;
- Exclude Gameroom — удаление Facebook Gameroom;
- Exclude Sound — удаление звуковой системы;
- Exclude Input — удаление системы пользовательского ввода;

### Пример.

Пример использования на одной из моих игр с таким вот конфигом (кликните, чтобы посмотреть):

```yaml
# App manifest generated Thu May 16 2019 18:37:47 GMT+0200 (CEST)
# Settings: Physics2D,Physics3D,Record,Profiler,Facebook,Gameroom
platforms:
    x86_64-osx:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    x86_64-linux:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    js-web:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeJsLibs: ["facebook"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    wasm-web:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeJsLibs: ["facebook"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    x86-win32:
        context:
            excludeLibs: ["libphysics","libLinearMath","libBulletDynamics","libBulletCollision","libBox2D","librecord","vpx","libprofilerext","libfacebookext.lib","gameroomext"]
            excludeSymbols: ["ProfilerExt","FacebookExt","GameroomExt"]
            libs: ["libphysics_null.lib","librecord_null.lib","libprofilerext_null.lib"]
            linkFlags: []

    x86_64-win32:
        context:
            excludeLibs: ["libphysics","libLinearMath","libBulletDynamics","libBulletCollision","libBox2D","librecord","vpx","libprofilerext","libfacebookext.lib","gameroomext"]
            excludeSymbols: ["ProfilerExt","FacebookExt","GameroomExt"]
            libs: ["libphysics_null.lib","librecord_null.lib","libprofilerext_null.lib"]
            linkFlags: []

    armv7-android:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeJars: ["(.*)/facebooksdk.jar","(.*)/facebook_android.jar"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    arm64-android:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeJars: ["(.*)/facebooksdk.jar","(.*)/facebook_android.jar"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    armv7-ios:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []

    arm64-ios:
        context:
            excludeLibs: ["physics","LinearMath","BulletDynamics","BulletCollision","Box2D","record","vpx","profilerext","facebookext"]
            excludeSymbols: ["ProfilerExt","FacebookExt"]
            libs: ["physics_null","record_null","profilerext_null"]
            linkFlags: []
```

![iOS Build Comparison](/wp-content/uploads/2018/03/f08eca8e0cca60f4a4f250f8484e0c01c430ecf4_1_690x442-2.png)

iOS. До: 5.46 Mb, после: 4.51Mb. Размер билда меньше на 0.95Mb. Для такой маленькой игры это ~17%.

Android. До: 3.06 Mb, после: 2.58 Mb. Размер билда меньше на 0.48Mb или ~16% в моей игре (скриншот потерялся, к сожалению).

![HTML5 Build Comparison](/wp-content/uploads/2018/03/db7aca6c3f3b64e9c42b16131dfc629ed2de70be-1024x302.png)

![HTML5 Build Comparison 2](/wp-content/uploads/2018/03/4f411fab890154596b6199888efadb12ded94235-1024x377.png)

HTML5 (gzip) тут я замерял только основной js файл. До: 1.30Mb, после: 0.89Mb. Размер билда меньше на 0.41Mb или ~30% в моей игре.

**Выводы**

Да, экономия от 0.41Mb до 0.95Mb не выглядит впечатляющей. Но тут нужно учесть следующее:

- масштабы проекта — на примере маленькой игры видна экономия от 16% до 30% размера, что весьма неплохо;
- платформа — если это html5 проект, то есть площадки с жесткими ограничениями по размеру игры в 3Mb — 5Mb, там эти 400Kb могут очень пригодиться;
- дело не только в размере билда. Меньший размер бинарника — это еще и более быстрая загрузка, экономия оперативной памяти и ресурсов процессора;
- на сэкономленное место можно внедрить рекламу (если это небольшой нативный плагин, к примеру [Unity ADS для Defold](https://www.defold.com/community/projects/65114/)) или еще что-то необходимое.

Я хотел рассмотреть сжатие текстур в этой же статье, но уже в процессе написания понял, что и без этого текста вышло много. Продолжение будет скоро. Я надеюсь =) Буду рад любым вопросам и комментариям.
