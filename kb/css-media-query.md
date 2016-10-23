
## @media

- 320px (iPhones) to 480px for phones
- up to 600px for small tablets
- up to 768px for iPad-style tablets
- a final layout for everything beyond that.

```css
@media (max-width: 480px) { /* ...mobile styles here... */ }
@media (max-width: 600px) { /* ...small tablets... */ }
@media (max-width: 768px) { /* ...tablet styles here... */ }
@a final layout for everything beyond that.
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