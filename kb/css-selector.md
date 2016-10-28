[css specificity caculator](https://specificity.keegan.st/)

## Selectors

- Type selector: `a { text-decoration: none; }` 
- Class selector: `.container {}` could be multiple
- ID selector: `#logo {}`should be just one i
- Embedded: `<div style="clear: both;"></div>` highest weight

>  embedded > id > class > type 

## Conbinator

- `A > B` direct child: 
- `A B`   descendant 
- `A + B` adjacent sibling / next-sibling selector, immediately after/follow
- `A ~ B` general sibling, A B are sibling(same parent), B after A  

## Universal

`*` a single element of any type `* { border: 1px solid black }`

>People may use the markup incorrectly and use elements besides the classes we have created as direct children.
Asterisk selectors can be very cpu-intensive for a browser, and using it twice like this compounds the problem.

----

## Pseudo

#### herf
`:hover` mouse hover

`:link` select links inside elements

`:visited` select only links that have been visited.

`:activ` select the link while it is being activated 

#### input

`:focus` change background or border to hightlight

`:enabled`

`:disabled` gray out

`:checked` checkbox ticked

`:indeterminate` none radio buttons selected

#### postion

`:root`

`:first-child, :last-child, :nth-child, :nth-last-child` x child element of **its parent**. `tr:nth-child(odd)` `tr:nth-child(even)`

`:first-of-type, :last-of-type, :nth-of-type, :nth-last-of-type, :only-of-type` at the same level 

s#### text

`::first-letter, ::first-line`

#### content

`:not(), :empty`

`::before, ::after`

## e.g. 

- enlarge first letter in p, if p is the first child of its parent. 
`p:first-child:first-letter { font-size: 5rem ; }`
