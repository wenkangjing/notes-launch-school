HTML and CSS - Lesson 5: More Projects
==================================================

# 1	Introduction
- nutrition facts
- resposive blog site
- how to show a modal without js

# 2	Project: Nutrition Facts Label

goals:
- use as few class and id attributes to apply styles as possible
- Use of headings, tables, and definition lists are a necessity.

tips:
- use table to orgnize data <caption>, <thead>, <tbody>, and <tfoot>
- [organizing-data-with-tables](http://learn.shayhowe.com/html-css/organizing-data-with-tables/)
- Border Collapse

> The border-collapse property determines a table’s border model. There are three values for the border-collapse property: collapse, separate, and inherit. By default, the border-collapse property value is separate, meaning that all of the different borders will stack up next to one another, as described above. The collapse property, on the other hand, condenses the borders into one, choosing the table cell as the primary border.

```css
/* border collapse */
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #cecfd5;
  padding: 10px 15px;
}

/* border seperate with spacing */
table {
  border-collapse: separate;
  border-spacing: 4px;
}
table,
th,
td {
  border: 1px solid #cecfd5;
}
th,
td {
  padding: 10px 15px;
}
```

> Code Review by Victor Paolo Reyes (TA)
> the semantic meaning of the element
> A general rule is that the section element is appropriate only if the element's contents would be listed explicitly in the document's outline.
> The div element has no special meaning at all.


# 3	Project: Web Store Catalog


Goals:
- use flosts to list product, clear float
- click to show modal 
  - absolute positioning and a fixed position pseudo element

tips 
- :nth-of-type(4n+1) to clear:both **every 4 elements take the first one**
- li:first pull left by nagetive margin left
- li:last pull right by nagetive margin right
- center element with absolute
  - dimenssion  
    + fixed width
    + margin-left: - 1/2 wodtj
  - position
    + a fixed top
    + 50% left

```css
input:checked + figure img {
  position:absolute;
  top:100px;
  width:400px; 
  left: 50%;
  margin-left: -200px;
}

```

# 4	Project: Responsive Blog Design

mobiel < `400` < small tab < `600` < tab < `760` < desktop

# 5	Assignment: Responsive Blog Design - The Blog Post Index Page
- anchor as button, given a class name
- give max-width on body>header, body>main, body>footer
- nav: page that links to other pages or to parts within the page

# 6	Assignment: Responsive Blog Design - A Blog Post Show Page
- nested article as comments
- article which can contain multiple sections which can contain nested articles

# 7	Assignment: Responsive Blog Design - Add Responsive Break Points

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```
# 8	Summary