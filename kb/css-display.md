https://css-tricks.com/almanac/properties/d/display/

`inline, block, inline-block, none`

### inline

`span, em, storng`

- accept `margin`, `padding`, but only work horizontally not vertically
- not accept `width`, `height`


1. width and height are not accpeted
2. margin top and bottom are ignored
3. the content will dictate the dimensions 
4. Borders are still applied, but content may be overlapping
5. the right and left padding affect its proximity to content that comes before or after it, the top and bottom do not

- span
- b, i, u
- strong, em
- a
- abbr
- sub and sup
- time
- mark


### block 

`div section ul h1...h6`

1. take the entire row
2. margin, border, padding: top, right, bottom, left
3. if no width, expand naturally to fill its parent 
4. if no heigth, expand to fit its content 

- h1 through h6
- p
- blockquote
- ul, ol, dl
- dt, dd
- div
- section
- article
- aside
- header
- footer
- nav
- figure and figcaption
- form and fieldset

### inline-block
- accept `margin`, `padding`
- accept `width`, `height`
- has `vertical-align`

used for horizontal nav bar and layout blocks

1. width and height are set 
2. padding and margin are added on all sides
3. it does not automatically take up its own row for its dimensions
4. they can be placed side by side along with other inline-block or inline elements.
5. `vertical-align:middle`

- button
- input
- select
- textarea

### none

totally remove the element from the page, used for **clearfix**


### flex

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Q&A

#### 1. precentage width doesn't fit in one row (50%/50%, 25%/75%)
- padding?
- margin?
- font-size on contain element?, e.g. `ul` `dl`

#### 2. center a block element horizontally
margin:0 auto

#### 3. box-sizing
- whenever a padding applied, change to border-size, 
- or set every element

`* { box-sizing: border-box; }`
