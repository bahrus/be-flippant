# be-flippant [TODO]


Apply the FLIP technique while [transitioning between two elements](https://jackyef.com/posts/transitioning-between-2-different-elements-with-flip).



Add the [flip](https://github.com/googlearchive/flipjs) behavior to an element declaratively.

```html
<div>
    <button>test</button>
    <img class=src-element>
    <img class=dest-element>
    <script be-flippant='{
        "transition": ".src-element",
        "to": ".dest-element",
        "on": "click",
        "of": "button",
        "nudge": true, // allow trigger element to be disabled until behavior latches on
    }'>
        export const animate = ({delataX, delataY, deltaScaleX, deltaScaleY}) =>  [
            [
                // The first keyframe contains the inverting transformation
                {
                    "transform": "translate(${deltaX}px, ${deltaY}px) scale(${deltaScaleX}, ${deltaScaleY})",
                },
                // The second keyframe undo the inverting transformation
                { 
                    "transform": "none" 
                },
            ],
            { "duration": 300, "easing": "ease-in-out" }
        ]
    </script>
    
</div>
```

If editing use the may-it-be compiler, use a function for transform:

```JavaScript
{
    transform: ({deltaX, deltaY, deltaScaleX, deltaScaleY}) => `translate(${deltaX}px, ${deltaY}px) scale(${deltaScaleX}, ${deltaScaleY})`
}
```

Maybe provide a script tag option if the animation gets more complex?

```html
<div be-flippant='{
    "transition": ".src-element",
    "to": ".dest-element",
    "on": "click",
    "of": ".trigger-element",
    "nudge": true, // allow trigger element to be disabled until behavior latches on
    "animate": [
        [
            // The first keyframe contains the inverting transformation
            {
                "transform": "translate(${deltaX}px, ${deltaY}px) scale(${deltaScaleX}, ${deltaScaleY})",
            },
            // The second keyframe undo the inverting transformation
            { 
                "transform": "none" 
            },
        ],
        { "duration": 300, "easing": "ease-in-out" }
    ]
}'>
```


## Integrating with custom script



