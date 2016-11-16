
## @media

```html
 <meta name="viewport" content="width=device-width,initial-scale=1">
```

desktop by default, use max-width from biggest size to smallest size

```css
/* desltop by default */
@media (max-width: 768px) { /* ...tablet styles here... */ }
@media (max-width: 600px) { /* ...small tablets... */ }
@media (max-width: 480px) { /* ...mobile styles here... */ }
```

```css
/* exclusive */
@media (min-width:601) and (max-width: 768px) { /* ...tablet styles here... */ }
@media (min-width:481) and (max-width: 600px) { /* ...small tablets... */ }
@media (min-width:0) and (max-width: 480px)   { /* ...mobile styles here... */ }
```

## Q&A

#### smaller nav on mobile 

```css  
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}
```