---
author: AGulev
categories:
- defold
- tools
date: '2017-07-22T15:50:23+03:00'
locale: ru
dsq_thread_id:
- '6007293119'
layout: post
lazyload_thumbnail_quality:
- default
permalink: /dobavlenie-stikerov-v-gotovyj-ipa/
tags:
- defold
- tools
title: Добавление стикеров в готовый ipa
image: '/wp-content/uploads/2017/07/Cool-300x300.png'
---

![Cool](/wp-content/uploads/2017/07/Cool-300x300.png)

Чем ближе дело к релизу, тем более экзотичные проблемы возникают.

К примеру, мне понадобилось добавить стикеры для iMessage в нашу игру. И все бы ничего, но Defold не создает Xcode проект, а сразу же собирает готовый ipa (точно так же делает Adobe AIR, например). У этого есть свои плюсы и минусы, но речь сейчас не об этом.

Итак, исходные данные у нас такие:

- mac с xcode;
- ipa готовое к отправке в AppStore;
- красивые картинки для стикеров;
- желание сделать стикеры для нашего ipa.

<!--more-->

> *Для того, чтобы не переделывать все по многу раз, прочитайте сразу всю статью и только потом приступайте к действиям.*

## Создание стикеров

Я не буду заострять внимание на процессе создания стикеров, т.к. этих материалов полно в интернете. Расскажу только основные моменты, которые стоит знать в рамках нашей задачи:

1. **стикеры подписываются тем же сертификатом, что и основное приложение.**
2. **ID стикеров должен быть таким же, как и ID основного приложения + название стикеров.** Например, если ваше приложение имеет ID com.mysupergame, то ID стикеров должен быть com.mysupergame.mysuperstickers
   При этом, после основного ID должно быть не больше одной точки, т.е. com.mysupergame.mysuperstickers.pack уже выдаст ошибку.
3. **версия стикеров должна совпадать с версией основного приложения.** Это не критично, но поможет избежать лишних warning'ов от Apple;
4. **стикеры поддерживаются с iOS 10, поэтому MinimumOSVersion должен быть минимум 10.0** (в Xcode этот параметр называется Deployment Target). Но для основного приложения можно оставить ту версию, что вам нужна.

Я делал так:

1. создаю новое приложение в xcode;
2. выбираю для него сертификат и провижен, как у основого приложения вручную;
3. добавляю к проекту новый target стикеров (думаю, можно сразу создать проект стикеров, но я не проверял);
4. для стикеров вручную выбираю тот же сертификат, что и у основного приложения и специально созданный для стикеров провижен (для загрузки в стор, а не для разработки);
5. выставляю версии такие же как и у основного приложения;
6. Deployment Target везде 10.0;
7. создаю архив приложения Product->Archive;
8. в органайзере делаю экспорт ipa для загрузки в appstore, убрав все лишние «галочки»;

![Export Settings](/wp-content/uploads/2017/07/2017-07-22_12-53-18-300x265.png)

9. ipa сохраняю в папку stickers (в дальнейшем я дам команды, которые будут рассчитаны именно на такое расположение этого ipa).

## Добавление стикеров к готовому ipa

![Stickers Process](/wp-content/uploads/2017/07/2017-07-22_12-58-38-300x142.png)

Итак, у нас есть 2 ipa файла, один со стикерами в папке stickers и в соседней папке ipa игры (как называются ipa не важно).

Открываем терминал в папке game (это лишь мой пример иерархии, в нем важно только название папки stickers) и выполняем следующие команды, предварительно заменив YOUR_CERTIFICATE на сертификат вашего приложения:

```bash
unzip *.ipa
codesign -d --entitlements :- Payload/*.app/ > Entitlements.plist
rm *.ipa
rm .DS_Store
rm -r Payload/*.app/_CodeSignature
unzip -o ../stickers/*.ipa -d ../stickers
cp -R ../stickers/MessagesApplicationExtensionSupport/ MessagesApplicationExtensionSupport
cp -R ../stickers/Payload/*.app/PlugIns Payload/*.app/
codesign -f -s "YOUR_CERTIFICATE" --entitlements Entitlements.plist Payload/*.app/
rm -r Entitlements.plist
zip -qr "Game_with_stickers.ipa" *
```

Пояснения того, что делает каждая строчка:

```bash
#Распаковываем исходный ipa с игрой
unzip *.ipa 
#Извлекаем Entitlements.plist
codesign -d --entitlements :- Payload/*.app/ > Entitlements.plist
#Удаляем исходный ipa
rm *.ipa
#Удаляем .DS_Store если система уже успела его создать
rm .DS_Store
#Удаляем sign информацию 
rm -r Payload/*.app/_CodeSignature
#Распаковываем приложение со стикерами
unzip -o ../stickers/*.ipa -d ../stickers
#Копируем MessagesApplicationExtensionSupport из стекеров в нашу папку
cp -R ../stickers/MessagesApplicationExtensionSupport/ MessagesApplicationExtensionSupport
#Копируем папку PlugIns со пакетом стикеров к нам в приложение
cp -R ../stickers/Payload/*.app/PlugIns Payload/*.app/
#Подписываем наше измененное приложение 
codesign -f -s "YOUR_CERTIFICATE" --entitlements Entitlements.plist Payload/*.app/
#Удаляем Entitlements.plist, что бы в папке осталось только то, что должно войти в конечный ipa
rm -r Entitlements.plist
# Упаковываем ipa
zip -qr "Game_with_stickers.ipa" *
```

*Если вы собираете стикеры не так, как я, а у вас просто есть собранный appex со стикерами, то после `rm -r Payload/*.app/_CodeSignature` добавляйте его в app в папку PlugIns и сразу переходите к подписыванию приложения. Это сработает для тестирование (если будут девелопмент провижен и сертификат с прописанным устройствам), но зальется ли в стор я не знаю.*

Теперь у нас есть ipa со стикерами и вот тут, как раз, и начинается все самое интересное…

## Проблемы и их решения

Если вы учли все, что я описал, то Application Loader загрузит ваше приложение и даже не выдаст ошибок или предупреждений.

Когда я загружал ipa, моей радости не было придела. Но через 5 минут процессинга приложения уже в самом сторе я получил письмо из App Store со следующей ошибкой:

> **Invalid iMessage App** — Your iMessage app contains an invalid sticker pack. The app may have been built or signed with non-compliant or prerelease tools. For more information, go to [developer.apple.com](http://developer.apple.com/).

> *Я даже не хочу озвучивать количество ipa, которые я собрал и загрузил в стор в попытках разобраться с этой ошибкой.*

А если вы не забыли добавить MessagesApplicationExtensionSupport в ваш ipa, то возможен еще и такой вариант ошибки:

> **Invalid Messages Application Support** — The files MessagesApplicationExtensionStub don't match YourApp.app/PlugIns/stickers.appex/MessagesApplicationExtensionStub. Make sure the files are correct, rebuild your app, and resubmit it. Don't apply post-processing to YourApp.app/PlugIns/stickers.appex/MessagesApplicationExtensionStub.

> *Интересно, что MessagesApplicationExtensionStub совсем не гуглится. И даже нет информации, что это за файл такой. Да и в общем, по этим ошибкам информации очень мало в интернете.*

Для решения этой проблемы нужно вернуться на этап сборки исходного ipa с нашей игрой и внести правки в info.plist нашего приложения(не стикеров, а именно игры). В Defold можно задать шаблон info.plist в настройках проекта (как это делается в AIR я уже и не помню).

> *Для Defold. Если шаблона у вас нет, то взять его можно, скачав последнюю версию bob.jar, на сайте [d.defold.com](http://d.defold.com). После этого переименовать bob.jar в bob.zip, распаковать и пройти в com/dynamo/bob/bundle/resources/ — там есть шаблоны для всех платформ: AndroidManifest, info.plist и др.*

> *Кроме того, изменения в plist можно внести и уже в собранный ipa перед подписанием (команда `codesign -f -s "YOUR_CERTIFICATE" --entitlements Entitlements.plist`).*

Как я писал выше, стикеры поддерживаются только в iOS 10+, а, значит, в plist нужно выставить как минимум 10.0 для этого параметра:

```xml
<key>MinimumOSVersion</key>
<string>10.0</string>
```

А дальше начинается самая магия. Я изменил целый ряд параметров, поставив их точно такими же как в info.plist, который лежит внутри stickers.ipa/Payload/stickers.app (именно эти параметры будут точно такими же и внутри вашего info.plist appex файла со стикерами, поэтому можете взять их там):

```xml
<key>BuildMachineOSBuild</key>
<string>16F73</string>
        
<key>DTPlatformBuild</key>
<string>14E8301</string>

<key>DTSDKBuild</key>
<string>14E8301</string>

<key>DTSDKName</key>
<string>iphoneos10.3</string>

<key>DTXcode</key>
<string>0833</string>

<key>DTXcodeBuild</key>
<string>8E3004b</string>
```

> ## **ВНИМАНИЕ!**
> 
> 1. Не нужно брать мои значения, они зависят от версии вашего xcode, sdk и других параметров. Просто извлеките plist из ваших стикеров и возьмите параметры там.
> 2. Я не уверен, что нужно менять ВСЕ эти параметры, возможно, достаточно одного или нескольких из них. Но у меня просто не хватило терпения менять параметры по одному и пересобирать ipa, чтобы выяснить это наверняка. Это все занимает много времени, необходимо каждый раз менять версию и ждать пока процессинг пришлет «письмо счастья». Если вы проделаете эту работу и поделитесь со мной — буду очень благодарен.
> 3. Я не знаю, на что еще могут они повлиять. Я лишь знаю, что изменив их приложение залилось в стор и работает через TestFlight.

Если ваше приложение не поддерживает multitasking (фича для iPad pro), то изменив параметры, что я указал выше, вы столкнетесь с ошибкой в Application Loader при загрузке приложения. Чтобы её избежать, добавьте следующий параметр в plist:

```xml
<key>UIRequiresFullScreen</key>
<true/>
```

Теперь можно заливать приложение и радоваться стикерам.

![Success](/wp-content/uploads/2017/07/20024106_192584437945206_1319451273500944354_o-1024x768.png)

## Вместо выводов

Разобраться с этой проблемой было не просто. Ради этого я даже зарегестрировался на stackoverflow, чтобы задать [свой первый вопрос](https://stackoverflow.com/questions/45188401/trying-to-add-stickers-to-existing-ipa) (кстати, там мне никто не помог).

Хочется сказать спасибо разработчикам Defold за помощь [(тема на форуме).](https://forum.defold.com/t/stickers-for-imessage-like-a-part-an-app/9646?u=agulev)

Кроме этого, огромное спасибо [@TheRabbitFlash](https://twitter.com/TheRabbitFlash) за то, что помог сдвинуться с мертвой точки на начальных этапах.

Буду рад комментариям и дополнениям.

> *Я просто рассказал свой опыт, чтобы проще было вспоминать, когда в следующий раз столкнусь с подобными проблемами. Я не претендую на истину в последней инстанции и абсолютную правильность. Вы делаете все **на свой страх и риск**, я за это никакой ответственности не несу.*

**UPD:** Спасибо, [Аким](https://twitter.com/snake302). Внес уточнение про минимальную версию приложения. Она может отличаться от версии стикеров и быть ниже 10.0.



