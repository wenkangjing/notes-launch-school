https://css-tricks.com/the-css-box-model/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model


## Box Model
- content:color and background

- padding: transparent, no color, share same background as content
> The padding area extends to the border surrounding the padding. When the content area has a background, color, or image set on it, this will extend into the padding, which is why you can think of the padding as extending the content. 

- border:width, style, color 

- margin: transparent

## Box Sizing

content-box by default

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
- margin is white, in other word, there no color in margin area
> TA reply: The short answer is padding creates space between the element's contents and its border, margin creates space between the element's border and other elements.

#### when to use padding
- when there is background color on the gap area
- big peice

