# be-flippant

Use Case:

Our web page, or a part of our web page, consists of two "scenes".  There's some (button) element that enables switching from one scene to the other.  

In both scenes there is a "main character" (DOM element), that the user is meant to be drawn to.

We would like to gracefully switch from the first scene to the next scene, with the user's eye focused on that "main character", which should smoothly morph between the two scenes.

That's what be-flippant does.  Behind the scenes it uses some boring math to figure it all out, and some [mature api's](https://caniuse.com/web-animation) to make it happen, and some acronym or other to give it some buzz.

[![Playwright Tests](https://github.com/bahrus/be-flippant/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-flippant/actions/workflows/CI.yml)

<a href="https://nodei.co/npm/be-flippant/"><img src="https://nodei.co/npm/be-flippant.png"></a>

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-flippant?style=for-the-badge)](https://bundlephobia.com/result?p=be-flippant)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-flippant?compression=gzip">


```html
<house-of-the-dragon season=1>
    <the-heirs-of-the-dragon>
        <rhaenyra-targaryen actress="Milly Alcock"></rhaenyra-targaryen> 
    </the-heirs-of-the-dragon>
    <the-black-queen style="display:none">
        <rhaenyra-targaryen actress="Emmy D'Arcy"></rhaenyra-targaryen>
    </the-black-queen>
    <button be-flippant='{
        "transform": {
            "theHeirsOfTheDragonE": {
                "style": {"display": "none"}
            },
            "theBlackQueenE":{
                "style": {"display": "initial"}
            }
        },
        "link": ["the-heirs-of-the-dragon>rhaenyra-targaryen", "the-black-queen>rhaenyra-targaryen"],
        "animOptions": { "duration": 300, "easing": "ease-in-out" }
    }'
    >Switch Episodes</button>
</house-of-the-dragon>
```





