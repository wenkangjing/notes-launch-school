https://zellwk.com/blog/rem-vs-em/
https://j.eremy.net/confused-about-rem-and-em/
http://pxtoem.com/

## Units

#### em

- `line-hight`, `font-size`, `margin-bottom`, `margin-top`
- calculated `font-size`
- represents the inherited `font-size`
- used to create scalable layouts (**vertical**)

```css
h1 { font-size: 20px } /* 1em = 20px */
p { font-size: 16px } /* 1em = 16px */
```

#### rem

- `1rem` is always equal to the font-size defined in `html`.

#### vh and vw
- 100vh 100% of the height of the viewport
- 50vw 50% of the width of the viewport

#### px
- pixel
- dot


## computed value

#### specified value
- from css
- inherited value from parent
- iniial value

#### 

## Q&A

#### 1. Common value and size

#### 2. em vs rem
> While `em` is relative to the `font-size` of its direct or nearest parent, `rem` is only relative to the `html` (root) `font-size`.

1. Size in em if the property scales according to it’s font-size
2. Size everything else in rem.

#### 3. best practice

> I use em for nearly everything, rem occasionally for padding or margins, but only in a pinch, and px some times for borders.

1. em everything (scale with `font-size`)
2. rem padding / margin if have to
3. px for border 
