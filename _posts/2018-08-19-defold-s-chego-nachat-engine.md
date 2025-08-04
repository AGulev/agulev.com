---
author: AGulev
categories:
- defold
- избранное
date: '2018-08-19T18:00:05+03:00'
locale: ru
last_update: 2023-10-04
layout: post
permalink: /defold-s-chego-nachat-engine/
tags:
- defold
- bookmarks
title: Defold. С чего начать? Engine.
image: '/wp-content/uploads/2021/08/def-1024x411-1.png'
---

![Defold Engine](/wp-content/uploads/2021/08/def-1024x411-1.png)

Если с [Lua вы уже освоились](/defold-s-chego-nachat-lua/) или хотя бы ознакомились, то самое время приступать к освоению самого движка Defold.

<!--more-->

1. [Defold. С чего начать? Lua (Lua для Defold и не только)](/defold-s-chego-nachat-lua/)
2. **Defold. С чего начать? Engine (Изучение движка)**
3. [Defold. С чего начать? Сообщество](/defold-s-chego-nachat-soobshhestvo/)

## Обзор обучающих материалов сайта Defold.com

Большая часть полезностей по движку находится в одном месте — это [Learn center движка](https://www.defold.com/learn/) и начинать лучше всего именно с этой страницы.

![Learn Center](/wp-content/uploads/2018/08/2018-08-19_12-40-17-1024x745.jpg)

Конечно, можно было бы ограничиться ссылкой, но несмотря на то, что все пользователи Defold были на этой странице, не все внимательно изучили её содержимое. Давайте подробнее разберем, что полезного там есть.

### [Manuals](https://www.defold.com/manuals/introduction/)

![Manuals](/wp-content/uploads/2018/08/2018-08-19_12-54-11.jpg)

По-моему, это самый важный раздел. Там собраны все пояснения по всем возможностям движка и лучшие практики по их использованию. Если у вас возник вопрос по тому, как что-то работает в движке, то первым делом стоит идти туда.

Я всегда рекомендую прочитать этот раздел прежде, чем что-то делать. Даже если большую часть вы не поймете, то ориентироваться в этом разделе вам станет проще. А в случае возникновения вопросов, уже будете представлять, куда идти за ответами.

Второй раз перечитать этот раздел от корки до корки имеет смысл, когда вы уже что-то соберете на движке и большинство понятий станут вам привычными. Вот тогда вы откройте для себя много нового и полезного.

Я до сих пор регулярно заглядываю в мануалы и что-то перечитываю.

Мануалы постоянно поддерживаются в актуальном состоянии.

### [API Reference](https://www.defold.com/ref/sys/)

![API Reference](/wp-content/uploads/2018/08/2018-08-19_13-11-55.jpg)

Не менее важный раздел, в котором, я надеюсь, вы проведете не меньше времени, чем в мануалах. В нем собрана вся документация по методам API движка, по стандартным библиотекам Lua, а также по Defold SDK (методы, доступные из C++ для написания нативных плагинов).

### [Examples](https://defold.com/examples/basics/simple_move/)

![Examples](/wp-content/uploads/2018/08/2018-08-19_12-56-30.jpg)

Как ясно из названия, это примеры кода с пояснениями и демками прямо в браузере. Ничего сложного в разделе нет, только базовая работа с API движка и типичными случаями использования. Очень полезно для начинающих, чтобы быстро подсмотреть реализацию тех или иных базовых вещей.

### [Tutorials](https://www.defold.com/tutorials/getting-started/)

![Tutorials](/wp-content/uploads/2018/08/2018-08-19_13-16-43.jpg)

Тут, как и положено, вы найдете пошаговые инструкции по созданию «кусочков» игр разных жанров с целью изучения движка.

Но это не значит, что все материалы только для начинающих. Там есть замечательные туториалы для более продвинутых пользователей, например:

- [туториал для тех, кто забыл векторную математику;](https://www.defold.com/tutorials/movement/)
- [туториал по использованию в Defold шейдеров сайта shadertoy;](https://www.defold.com/tutorials/shadertoy/)
- [color grading туториал](https://www.defold.com/tutorials/grading/) по созданию и использованию своего постэффект-шейдера.

Кроме того, в этот раздел запрятали ссылки на внешние ресурсы с примерами, о которых я расскажу ниже.

### [FAQ](https://defold.com/faq/faq/)

![FAQ](/wp-content/uploads/2018/08/2018-08-19_15-24-22.jpg)

Это раздел, в который стоит заглянуть каждому хотя бы раз. Там есть ответы на общие темы, а так же на довольно интересные технические вопросы, ответы на которые могут облегчить вам жизнь.

---

Всё, что связано с комьюнити и общением я разберу в отдельной статье. А сейчас перейдем к списку остальных полезных для изучения Defold ресурсов.

## Ссылки на другие полезные ресурсы.

### Туториалы и мануалы.

- [Unfolding Gamedev](https://www.youtube.com/@unfolding_gamedev/videos) — канал с пояснениями концепций движка и туториалами.
- [GameFromScratch](https://www.gamefromscratch.com/page/Defold-Engine-Tutorial-Series.aspx/) — довольно подробный обзорный туториал по всем основным аспектам движка. Несмотря на то, что сделан он был еще на первом редакторе, он все еще не потерял актуальности (просто визуально отличается от новой версии редактора).
- [David Chadwick](https://www.youtube.com/channel/UCkHxiTiccq97knREKsi5UKA) — делает замечательные серии туториалов с исходным кодом по созданию различных игр на Defold.
- [Официальный youtube канал Defold,](https://www.youtube.com/user/defoldvideos/featured) на котором есть [отдельный плейлист с русскоязычными материалами](https://www.youtube.com/watch?v=4_pf4w7i7I4&list=PLXsXu5srjNlxFX6LU3uQedjXmtPn8nDmR)
- [«Что еще за Defold и с чем его едят?»](https://habr.com/post/416461/) — обзорная статья на habr от Сергея Грицаенко.
- [Статьи и мануалы из моего блога](/category/defold/), которые легко фильтруются по категории Defold.
- [Insality Games](https://www.youtube.com/channel/UCGiLYMS80KDDpIMLc2Nqk_Q) — стримы от Максима Туприкова, где он разрабатывает игру на Defold «от и до».

---

Исходный код движка полностью открыт. Кроме того в открытом доступе есть много примеров и готовых библиотек, по которым можно учиться. Сообщество с радостью поддерживает это движение и делится своими наработками и примерами. Поэтому ниже будет список ссылок на исходный код игр и библиотек.

### Код примеров и готовых игр на Defold.

- [https://github.com/defold/defold-examples/](https://github.com/defold/defold-examples/) — официальные примеры Defold.
- [https://britzl.github.io/publicexamples/](https://britzl.github.io/publicexamples/) — большой список примеров с демками от Бьерна (один из разработчиков движка).
- [https://github.com/andsve/udgj1](https://github.com/andsve/udgj1) — отличный пример работы с Render Targets от Свена, одного из разработчиков движка;
- [https://github.com/britzl/defold-pcg](https://github.com/britzl/defold-pcg) — пример процедурно генерируемой карты от Бьерна.
- [https://github.com/britzl/defold-training_intermediate](https://github.com/britzl/defold-training_intermediate) — примеры для обучения, в том числе пример по пост процессингу.
- [https://github.com/britzl/lowrezadventure](https://github.com/britzl/lowrezadventure) — еще одна игра от Бьерна, сделанная на джем LD42 с одной из вариаций ECS архитектуры.
- [https://jcash.github.io/](https://jcash.github.io/) — еще несколько примеров, на этот раз от другого разработчика движка Матиаса.
- [По ту сторону сказки / Beyond the fairy tale](https://github.com/aterim/Beyond-The-Fairy-Tale) — исходный код игры по мотивам русских сказок.
- [starclick](https://github.com/Lerg/starclick) и [TankVsMeteors](https://github.com/Lerg/TankVsMeteors) — исходный код 3D игр на Defold от [Сергея Лерга](https://vk.com/sergeylerg).
- Несколько проектов от d954mas: [ld42](https://github.com/d954mas/ld42), [save-shelter-defold](https://github.com/d954mas/save-shelter-defold) (клон wolfenstein 3d), [defold-flappy-bird](https://github.com/d954mas/defold-flappy-bird), [Defold dungeon crawler prototype](https://github.com/d954mas/defold-dungeon-crawler).
- [Несколько примеров игр от AJirenius.](https://github.com/AJirenius?utf8=✓&tab=repositories&q=&type=source&language=)
- [https://github.com/benjames-171/defold-games](https://github.com/benjames-171/defold-games) — исходный код большого количества игр от Ben James.

### Плагины и другой готовый код.

[Портал с ассетами](https://defold.com/assets/), куда рекомендуется выкладывать все наработки, которыми вы хотите поделиться с сообществом Defold. Многие ленятся создать свою страницу там, но большинство из готовых библиотек и расширений там есть.

![Assets Portal](/wp-content/uploads/2023/08/image-1024x445.png)

---

Я рассказал далеко не обо всем, если считаете, что нужно что-то добавить, напишите мне или оставьте комментарий.



