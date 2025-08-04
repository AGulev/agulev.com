---
author: AGulev
categories:
- defold
- избранное
date: '2018-07-05T17:31:39+03:00'
locale: ru
last_update: 2023-09-21
layout: post
permalink: /defold-s-chego-nachat-lua/
tags:
- defold
- bookmarks
- lua
title: Defold. С чего начать? Lua.
image: '/wp-content/uploads/2021/08/dl-1-1024x411-2.jpg'
---




![Defold Learning Guide](/wp-content/uploads/2021/08/dl-1-1024x411-2.jpg)

Первая подборка ссылок на материалы по Defold для ничинающих (и не только). Для начала, самые важные ссылки по Lua.

1. **Defold. С чего начать? Lua (Lua для Defold и не только)**
2. [Defold. С чего начать? Engine (Изучение движка)](/defold-s-chego-nachat-engine/)
3. [Defold. С чего начать? Сообщество](/defold-s-chego-nachat-soobshhestvo/)
## Lua

Язык программирования, на котором вам предстоит писать всю логику ваших игр.

В Defold используется LuaJIT и Lua 5.1 на HTML5. LuaJIT базируется на Lua 5.1 с некоторыми доработками. Всегда следите за тем, чтобы все мануалы, готовые библиотеки и другой готовый Lua код, что вы будете использовать был совместим с Lua 5.1.

### Для начинающих

Подборка ссылок по Lua, которые следует изучить каждому начинающему:

- [https://learnxinyminutes.com/docs/ru-ru/lua-ru/](https://learnxinyminutes.com/docs/ru-ru/lua-ru/) — русскоязычная шпаргалка по Lua. ([EN оригинал](http://tylerneylon.com/a/learn-lua/))
- [https://zserge.wordpress.com/2012/02/23/lua-за-60-минут/](https://zserge.wordpress.com/2012/02/23/lua-за-60-минут/) — Lua за 60 минут
- [https://www.defold.com/manuals/lua/](https://www.defold.com/manuals/lua/) — официальный Defold мануал по Lua.
- [https://github.com/Olivine-Labs/lua-style-guide](https://github.com/Olivine-Labs/lua-style-guide) — сodestyle Lua
- [https://gist.github.com/dapetcu21/c6917b8cf2a4a2bc22a6cc46a7d1f80d](https://gist.github.com/dapetcu21/c6917b8cf2a4a2bc22a6cc46a7d1f80d) — еще один сodestyle с поправками на Defold.
- [https://www.lua.org/manual/5.1/](https://www.lua.org/manual/5.1/) — полный мануал по Lua.
- [https://lua.org/pil/contents.html](https://lua.org/pil/contents.html) — онлайновая книга «Программирование в Lua».
- [http://lua-users.org/wiki/MathLibraryTutorial](http://lua-users.org/wiki/MathLibraryTutorial) — туториал по стандартной math библиотеке.
Попробовать Lua прямо в браузере, что может быть удобно во время изучения, можно по следующим ссылкам:

- [https://defold.com/codepad/](https://defold.com/codepad/) — небольшой онлайн редактор для Defold с несколькими заготовками проектов
- [https://repl.it](https://repl.it) — онлайн редактор кода

Отдельно хочу заострить внимание на некоторых базовых аспектах, которые помогут на первых этапах.

- В Lua массивы начинаются с единицы
- Массив — это таблица с целочисленными индексами **по порядку**
- Оператор # для таблицы (ключи указаны явно tbl или tbl2) возвращает длину последовательности от 1 до прерывания последовательности или элемента последовательности со значением nil. Для массива (индексы не указаны явно array и array2) любой nil может расцениваться как прерывание последовательности. Это значит, что любое использование на последовательностях с «дырками» (nil) может приводить к непредсказуемым результатам и этого стоит избегать. Примеры:

```lua
local tbl = {[1] = "one", [2]="two",[3]="three", [4]=nil, [5]="five", six = "six"}
print(#tbl) -- 3 т.к. индексы по порядку только 1,2,3, а 4 уже nil

local tbl2 = {["a"] = 1, ["b"] = 2}
print(#tbl2) -- 0

local array = {"one", "two", "three", nil, "five", "six"}
print(#array) -- 6

local array2 = {"one", "two", "three", nil}
print(#array2) --3
```

- Если забыть написать local перед переменной или функцией, то она будет глобальной
- Глобальная таблица доступна по `_G`
- Создание функции должно происходить раньше, чем её использование
- `local` переменная в `*.script` или `*.gui_script` — будет доступна во всех экземплярах данного скрипта. Это, сравнивая с другими языками, статическая переменная класса. Если вы используете один и тот же скрипт на нескольких объектах, то изменения в такой переменной из одного объекта будут доступны и в других объектах тоже
- Для записи переменных уникальных для каждого экземпляра используется `self`
- Для итерирования от большего к меньшему нужно не забывать указывать третий параметр шага

```lua
-- обычный цикл от 1 до 10
for i = 1, 10 do
    -- do things
end

-- цикл от 10 до 1
for i = 10, 1, -1 do
    -- do things
end
```
### Редакторы

Кроме встроенного редактора кода в самом Defold, доступны плагины для следующих редакторов:

- [Visual Studio Code](https://forum.defold.com/t/vscode-extensions-for-defold-aka-defold-extension-pack/72508?u=agulev) — плагин для популярного редактора.
- [Intellij IDEA](https://github.com/d954mas/IntelliJ-Defold-Api) — инструкция по настройке и работе с IDEA.
- [Sublime Text 3](https://defold.com/assets/defoldapiforsublimetext3/) — api для Sublime3.
- [ZeroBrane](https://studio.zerobrane.com) — Lua IDE.
### Для продвинутых пользователей

Несколько ссылок, для более углубленного изучения:

- [https://www.lua.org/gems/sample.pdf](https://www.lua.org/gems/sample.pdf) — информация по оптимизации производительности Lua от создателя самого языка.
- [https://springrts.com/wiki/Lua_Performance](https://springrts.com/wiki/Lua_Performance) — тесты и tips&tricks для лучшей производительности.
- [http://luatut.com/collectgarbage.html](https://web.archive.org/web/20200828072700/http://luatut.com/collectgarbage.html) — статья о работе сборщика мусора и о методах для ручной работы с ним.
- [https://quik2dde.ru/viewtopic.php?id=131](https://quik2dde.ru/viewtopic.php?id=131) — туториал по корутинам в Lua ([EN оригинал](http://lua-users.org/wiki/CoroutinesTutorial)).

---

И на последок [большая подборка ссылок на различные материалы по Lua](https://forum.defold.com/t/big-list-of-lua-resources/1586?u=agulev).

---

Делитесь в комментариях интересными материалами по теме, я с радость добавлю их в заметку.




