
## @media

```html
 <meta name="viewport" content="width=device-width,initial-scale=1">
```

```css
@media (max-width: 480px) { /* ...mobile styles here... */ }
@media (max-width: 600px) { /* ...small tablets... */ }
@media (max-width: 768px) { /* ...tablet styles here... */ }
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