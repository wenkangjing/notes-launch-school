Position
================

## relative 

to its normal flow

## absolute

to its first parent with relative position

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
 



