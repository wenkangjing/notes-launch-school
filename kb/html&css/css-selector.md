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
> Selects an element that follows **directly after** the prior element, in which both elements share the same parent

- `A ~ B` general sibling, A B are sibling(same parent), B after A
> Selects an element that follows **anywhere after** the prior element, in which both elements share the same parent

## Universal selector

`*` a single element of any type `* { border: 1px solid black }`

> Universal selectors are generally discouraged for performance reasons.

>1 People may use the markup incorrectly and use elements besides the classes we have created as direct children.
>2 Asterisk selectors can be very cpu-intensive for a browser, and using it twice like this compounds the problem.

----

## Pseudo class selector

>A pseudo-class is way of selecting certain parts of a HTML document, based in principle not on the HTML document tree itself and its elements or on characteristics like name, attributes or contents, but on other phantom conditions like language encoding or the dynamic state of an element.

#### action
`:hover` mouse hover

`:link` select links inside elements

`:visited` select only links that have been visited.

`:active` select the link while it is being activated 

#### input

`:focus` change background or border to hightlight

`:enabled`

`:disabled` gray out

`:checked` checkbox ticked

`:indeterminate` none radio buttons selected

`:target` triggered by on page links

#### postion

`:root`

`:first-child, :last-child, only-child, :nth-child, :nth-last-child` `tr:nth-child(odd)` `tr:nth-child(even)`
> x child element of **its parent**. e.g. first child of a parent, 3rd child, last child of its parent


`:first-of-type, :last-of-type, only-of-type, :nth-of-type, :nth-last-of-type, :only-of-type` 
> at the same level. e.g. first/last child of its type


#### text

`::first-letter, ::first-line`
 
#### content

`:not(), :empty`

## Pseudo element selector
> They may only appear at the end of a selector chain

`::after`
`::before`
`::first-letter`
`::first-line`
`::selection`
`::backdrop`
`::placeholder`
`::marker`
`::spelling-error`
`::grammar-error`

e.g.

```css
::selection {
  background: #ff7b29;
}
```

## Attribute selector
`input[type="text"]`


## Q&A 

#### enlarge first letter in p, if p is the first child of its parent.

```css
p:first-child:first-letter { 
  font-size: 5rem ; 
}
```

#### how to use use :after and :before

```css
a:after {
  color: #9799a7;
  content: " (" attr(href) ")";
  font-size: 11px;
}
```

```css
.clearfix:after { 
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

#### how to use nth-child, nth-of-type

https://www.sitepoint.com/web-foundations/understanding-nth-child-pseudo-class-expressions/

- 2: the second
- 3n: every 3rd element. 3,6,9,12,15
- 2n+1: the first element and every 2 elements after that. 1,3,5,7,9
- 3n+2: the second element and every 3 elements after that. 2, 5, 8, 11
- odd: 2n+1
- even:2n
