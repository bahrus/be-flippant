# be-flippant [TODO]

Use Case:

Our web page, or a part of the web page, consists of two "scenes".  There's some button that enables switching from one scene to the other.  

In both scenes there is a "main character" (DOM element), that the user is meant to be drawn to.

We would like to gracefully switch from the first scene to the next scene, with the user's eye focused on that "main character", which should smoothly morph between the two scenes.

That's what be-flippant does.  Behind the scenes it uses some boring math to figure it all out, and some [mature api's](https://caniuse.com/web-animation) to make it happen, and some acronym or other to give it some buzz.


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
        "transition": "the-heirs-of-the-dragon>rhaenyra-targaryen",
        "to": "the-black-queen>rhaenyra-targaryen",
        "with-effects": { "duration": 300, "easing": "ease-in-out" }
    }'
    >Switch Episodes</button>
</house-of-the-dragon>
```





