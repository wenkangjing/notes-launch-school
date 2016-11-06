Position
================

## relative 

to its normal flow

## absolute

https://css-tricks.com/absolute-positioning-inside-relative-positioning/

>closest positioned ancestor if any, or otherwise relative to the initial containing block

>An absolutely positioned element is positioned within its nearest containing element that has a position: relative (strictly speaking, any position value other than static would work, but most often position: relative is used). If none of its containing elements is relatively positioned, the absolutely positioned element is then positioned relative to the <body> element.

**position is not inherited. the position value doesn’t cascade**

To make the child element positioned absolutely from its parent element we need to
- set **relative** on the parent element
- set **absolute** on child element

```css
.parent {
  position: relative;
}
.child {
  position:absolute;
}
```

> absolutely positioned element is removed from the normal flow. This means you can put it anywhere, and it won’t affect or be affected by any other element in the flow. 

> absolute elements create a new coordinate system for child elements. 

## fixed

always there, e.g. footer always shows on the bottom, notifications


## left, right, top, bottom

the distance between the left margin edge of the element and the left edge of its 

- containing block or html if not found (absolute)
- normal position or itself (relative)
- relative to the viewport (fixed)

![position diagram](position_type.png)


## background-position

image < element
- positive value, 
- move image inside element
- use precentage, left, right, top, bottom, center
- use px

image > element
- negetive value
- sprites sheet
- move drag background left or up
- use px to set offset is easy
- precentage is hard to calculate

## Q&A

#### position fixed box is half transparent?
be careful with z-index [CSS absolute and fixed positioning](https://www.w3.org/wiki/CSS_absolute_and_fixed_positioning#The_third_dimension.E2.80.94z-index)
