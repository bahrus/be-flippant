# be-flippant [TODO]



Apply the FLIP technique while [transitioning between two elements](https://jackyef.com/posts/transitioning-between-2-different-elements-with-flip).



Add the [flip](https://github.com/googlearchive/flipjs) behavior to an element declaratively.

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





