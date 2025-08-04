---
author: AGulev
categories:
- defold
- избранное
date: '2018-07-05T17:31:39+03:00'
locale: en
layout: post
permalink: /en/defold-s-chego-nachat-lua/
tags:
- defold
- bookmarks
- lua
title: Get started with Defold. Lua.
image: '/wp-content/uploads/2021/08/dl-1-1024x411-2.jpg'
---

![Defold Learning Guide](/wp-content/uploads/2021/08/dl-1-1024x411-2.jpg)

This is the first part of "Get started with Defold" articles. Let's start with the most important links to useful Lua resources.

1. **Get started with Defold. Lua.**
2. [Get started with Defold. Engine](/defold-s-chego-nachat-engine/). (only in Russian, at the moment)
3. [Get started with Defold. Community.](/defold-s-chego-nachat-soobshhestvo/) (only in Russian, at the moment)

---

## Lua

Lua – is a scripting programming language. What is more important for us is that it is used to write game logic in the Defold engine.

The engine uses LuaJIT and Lua 5.1 where LuaJIT isn't supported. LuaJIT is based on Lua 5.1 with some improvements. Always make sure that the manuals and Lua libraries you are using are compatible with Lua 5.1.

### For beginners

A few links about Lua I would recommend for all beginners:

- [http://tylerneylon.com/a/learn-lua/](http://tylerneylon.com/a/learn-lua/) — Learn Lua in 15 minutes. For people who have never used Lua before, it is especially helpful to keep this page open and check it out if you forget something.
- [https://writeabout.tech/programming/lua-in-60-minutes/](https://writeabout.tech/programming/lua-in-60-minutes/) — Lua in 60 minutes
- [https://www.defold.com/manuals/lua/](https://www.defold.com/manuals/lua/) — Lua in Defold. Official manual.
- [https://github.com/Olivine-Labs/lua-style-guide](https://github.com/Olivine-Labs/lua-style-guide) — a code style for Lua.
- [https://gist.github.com/dapetcu21/c6917b8cf2a4a2bc22a6cc46a7d1f80d](https://gist.github.com/dapetcu21/c6917b8cf2a4a2bc22a6cc46a7d1f80d) — a one more сode style changed specially for Defold.
- [https://www.lua.org/manual/5.1/](https://www.lua.org/manual/5.1/) — Lua 5.1 Reference Manual.
- [https://lua.org/pil/contents.html](https://lua.org/pil/contents.html) — Book: "Programming in Lua" (first edition).
- [http://lua-users.org/wiki/MathLibraryTutorial](http://lua-users.org/wiki/MathLibraryTutorial) — Math Library Tutorial.

---

It's also possible to try Lua right in a browser, which may be convenient while learning:

- [https://defold.com/codepad/](https://defold.com/codepad/) — a small online editor for Defold using predefined project templates.
- [https://repl.it](https://repl.it) — a generic online code editor that supports Lua 5.1.

There are a few points that are important to know when you start with Lua in Defold:

- In Lua, arrays start at 1 instead of 0.
- Array is a table with integer indices in order.
- The `#` operator for a **table** (the keys are explicit, for example, `tbl` or `tbl2`) returns a sequence from 1 to an interruption of the sequence. For an **array** (the indices are not explicitly specified as in `array` and `array2`), any `nil` may interrupt a sequence. That means that any use of sequences with "holes" (`nil`) may lead to unpredictable results with operator `#`. Examples:

```lua
local tbl = {[1] = "one", [2]="two",[3]="three", [4]=nil, [5]="five", six = "six"}
print(#tbl) -- 3 because indices in order are only 1,2,3, and 4 is nil

local tbl2 = {["a"] = 1, ["b"] = 2}
print(#tbl2) -- 0

local array = {"one", "two", "three", nil, "five", "six"}
print(#array) -- 6

local array2 = {"one", "two", "three", nil}
print(#array2) --3
```

- If you forget to write `local` before a variable or a function, then it will be global
- The global table is accessible by `_G`
- Functions in Lua should be created before the place you call them
- A local variable in `*.script` or `*.gui_script` is available in all instances of this script. It is a static class variable in comparison with other languages. If you use the same script on several objects, then changes of such variables in one script will be available in the other objects.
- `self` is used to write unique data for each instance
- To iterate from larger to smaller, remember to specify the third step parameter:

```lua
-- a regular for loop from 1 to 10
for i = 1, 10 do
    -- do things
end

-- a for loop from 10 to 1
for i = 10, 1, -1 do
    -- do things
end
```

### Editors

In addition to the built-in code editor in Defold Editor itself, plugins are available for the following editors:

- [Visual Studio Code](https://forum.defold.com/t/vscode-extensions-for-defold-aka-defold-extension-pack/72508?u=agulev)
- [Intellij IDEA](https://github.com/d954mas/IntelliJ-Defold-Api)
- [Sublime Text 3](https://defold.com/assets/defoldapiforsublimetext3/)
- [ZeroBrane](https://studio.zerobrane.com) — Lua IDE.

### For advanced users

A few links for a more in-depth study:

- [https://www.lua.org/gems/sample.pdf](https://www.lua.org/gems/sample.pdf) — Lua Performance Tips
- [https://springrts.com/wiki/Lua_Performance](https://springrts.com/wiki/Lua_Performance) — Lua Performance tips&tricks.
- [http://luatut.com/collectgarbage.html](http://luatut.com/collectgarbage.html) — `collectgarbage` function in Lua
- [http://lua-users.org/wiki/CoroutinesTutorial](http://lua-users.org/wiki/CoroutinesTutorial) — Coroutines Tutorial

---

And finally, [a large collection of links to various materials about Lua](https://forum.defold.com/t/big-list-of-lua-resources/1586?u=agulev).

---

Feel free to share in the comments any interesting materials on the topic.
