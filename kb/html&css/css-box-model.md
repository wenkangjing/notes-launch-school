[Box modal in css-tricks](https://css-tricks.com/the-css-box-model/)
[Box Sizing in css-tricks](https://css-tricks.com/box-sizing/)
[Introduction_to_the_CSS_box_model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
[css-box-model.html](./css-box-model.html)

## Box Model
- content: with text, color and background

- padding: transparent, no color, share same background as content
> The padding area extends to the border surrounding the padding. When the content area has a background, color, or image set on it, this will extend into the padding, which is why you can think of the padding as extending the content. 

- border: width, style, color

- margin: empty area, transparent, used to separate the element from its neighbors

> for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined by the line-height property, even though the border and padding appear visually around the content.

## Box Sizing

set to content-box by default

```css
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

## Q&A

#### padding vs margin
- margin is transparent, in other word, there no color in margin area

```
TA reply: 
  - padding creates space between the element's contents and its border, 
  - margin creates space between the element's border and other elements.
```

#### when to use padding
- when there is background color on the gap area
- big peice

