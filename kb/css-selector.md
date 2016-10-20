[css specificity caculator](https://specificity.keegan.st/)

## Selectors

- Type selector: `a { text-decoration: none; }` 
- Class selector: `.container {}` could be multiple
- ID selector: `#logo {}`should be just one i
- Embedded: `<div style="clear: both;"></div>` highest weight


## Conbinator

- `A > B` direct child: 
- `A B`   descendant 
- `A + B` adjacent sibling / next-sibling selector, immediately after/follow
- `A ~ B` general sibling, A B are sibling(same parent), B after A  

## Specificity 
- embedded > id > class > type 
- [css specificity caculator](https://specificity.keegan.st/)

