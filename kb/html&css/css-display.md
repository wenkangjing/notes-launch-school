https://css-tricks.com/almanac/properties/d/display/

`inline, block, inline-block, none`

### inline

1. not accept `width`, `height`
  - the content will dictate the dimensions

2. accept `margin`, `padding` **horizontally only** 
  - the right and left padding affect its proximity to content that comes before or after it, the top and bottom do not

3. accept `border` but may be overlapping

- span
- b, i, u
- strong, em
- a
- abbr
- sub and sup
- time
- mark

> Floating an element automatically makes it into a box.

### block 

1. take the entire row
2. `margin, border, padding` **4 directions**
3. if no `width`, expand naturally to fill its parent 
4. if no `heigth`, expand to fit its content 

> Block level elements do not sit inline but break past them. By default (without setting a width) they take up as much horizontal space as they can.

- h1 ~ h6
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
- accept `width`, `height` **4 directions**
- has `vertical-align`, `baseline` by default

used for horizontal nav bar and layout blocks

1. accept `width` `height` 
2. accept `padding` `margin`
3. it does not automatically take up its own row for its dimensions
4. they can be placed side by side along with other inline-block or inline elements.
5. `vertical-align:middle`

- button
- input
- select
- textarea

The Space Between Inline-Block Elements
> One important distinction with inline-block elements is that they are not always touching, or displayed directly against one another. Usually a small space will exist between two inline-block elements.

Align inline-block elements

[Vertical Align](https://css-tricks.com/what-is-vertical-align/)

> as a: inline + block elements properties (width and height). 
>
> as if: float - the clear property.

### none

- totally remove the element from the page, used for **clearfix**
- Note that while the element is still in the DOM, i.e. can bef found in dev tool

### flex

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Q&A

#### 1. precentage width doesn't fit in one row (50%/50%, 25%/75%)
- padding? margin?
- box-sizing
- font-size on contain element?, e.g. `ul` `dl`

#### 2. center a block element horizontally
- add a container `div`
- set `margin: 0 auto`

#### 3. box-sizing
- whenever a padding applied, change to border-size, 
- or set every element
- **box-sizing reset**

#### 4. h ow to remove spaces between inline-block elements
[Fighting the Space Between Inline Block Elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)

- comment hack
- set `font-size: 0` **inpect descendents**
- Minimized HTML
- float them instead

```html
<ul>
	<li>Item content</li><!--
 --><li>Item content</li><!--
 --><li>Item content</li>
</ul>
```