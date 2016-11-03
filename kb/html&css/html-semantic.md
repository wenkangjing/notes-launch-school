## semantic

### Head

`head` `link` `meta` `title` `script` `style` like header files in C/C++

### Sections

`body` content of HTML document, only one.

`main` main content of `body`

`article` can contain 'header', 'section', 'footer', can contains multiple sections

> The <article> element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the <article> element to mark up blog posts, newspaper articles, user-submitted content, and the like.

`section`: A general rule is that the section element is appropriate only if the element's contents would be listed explicitly in the document's outline.

>The <section> element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The grouping of content within the <section> element may be generic in nature, but it’s useful to identify all of the content as related.

```
article
  |--header, p...p, footer
  |
  |--section (comments)
  |     |--article (header, p, footer with one comment)
  |     |--article (header, p, footer with one comment)
  |
  |--section (form)
        |-- form (name, comments, button)

```

`header`

`footer`

`h1 ~ h6` Avoid skipping heading levels. Just One `h1` per `section`.

`aside` sidebars, related links, etc

`nav` navigation, usually contains `ul`, `li`. page that links to other pages or to parts within the page

`address` supplies contact information for its nearest 'article' or 'body' ancestor; in the latter case, it applies to the whole document. Can be placed inside `footer`. rendered `i` or `em`

### Groupings

`div` no special meaning at all

`span` does not inherently represent anything. something can to **hook** the css to

`p` is paragraph

`hr` Represents a paragraph-level thematic break. The "paragraph-level" bit means between blocks of text

`blockquote` is quotation `cite` attribute providing source URL, rendered indent

`figure` `figcaption`

### List

`dl` `dt` `dd` description list, aka definition list

`ul` `ol` `li` list elements, rendered indent

### Table

`table` `thead` `tbody`* `tfoot`

`caption` for `table` only

`tr` table row

`th` `td` header cell and normal data cell

`col` `colgroup`

### Form

`form` to submit data to server

`fieldset` group controls within a form

`legend` represents a caption of its parent `fieldset`

`optgroup` within `select`, to group `select`

`input` 

`button` submit, reset, button, menu

`label` for attribute, ref by ID or wrap control. **to set width, must change to `inline-block` or `block`**

`textarea`

### Text level

`a` `em`/`i` `strong`/`b` 

`u` underline, `s` strikethrough, `del` line through

`sub` shorter n smaller , `sup` higher n smaller

`small` smaller

`q` short inline quote wrapped by ""

`cite` wrapped by [], e.g. `<cite>[ISO-0000]</cite>.`

`br` line break, not for gap between elements

`code` 

`time` machine-readable translation

`dfn` 

`abbr` Many user agents present this as a tooltip. 

`kbd` keyboard input element, e.g. `<kbd>Ctrl</kbd> + <kbd>S</kbd>`

`samp` identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console).

### others

`details` contains`summary `element, click to view detailed info


## Tips

### Don’t use section as a wrapper for styling. 

`section` is not a wrapper, a semantic section help construct a document outline. 

### Don't over use header. 

`header` represents introductory or navigations

### Not every image is a figure. 

Your logo is not a figure. Figure can be more than an image

#### Self closing elements

```html
<br> <embed> <hr> <img> <input> <link> <meta> <param> <source> <wbr>
```