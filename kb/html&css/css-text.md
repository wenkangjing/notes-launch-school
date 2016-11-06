## text related

#### font

`font`

`font-size`

`font-weight` 

`font-style` : `italic normal bold`

`font-variant`

`line-height`

`font-family`

#### text

`text-decoration` : `none, underline red, underline wavy red, line-through overline underline`

`text-transform` : `capitalize; uppercase; lowercase; none;`

`letter-spacing` `word-spacing`

`word-break`

`text-align` `text-indent`

`vertical-align` for an **inline** or table-cell box.

`mark`

`em`

`strong`

## Q&A

#### what is vertical-align
> Initial value	baseline, apply to inline-level and table-cell elements. It also applies to ::first-letter and ::first-line.

#### text-align vs vertical-align

- text-align: horizontaly
- vertical-align: inline element, or table cell, doesn't work on float elements

https://css-tricks.com/what-is-vertical-align/


#### text formatting

```css
body {
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 140%;
}
```