HTML and CSS - Lesson 2 Your First Web Page
============================================

# 1. before

!!what the fx?! w3school is outdated, oh my god!!

google with "MDN" and "w3c.org"

Read thru w3.org/

- use chrome
- use html validation  https://validator.w3.org/

# 2. intro
- gist for html sketch


# 3. walk thru - first web Page
- [safe web font](http://web.mit.edu/jmorzins/www/fonts.html)
- font category
  - sans-serif
  - serif
- css
  - add padding-bottom if too cramped


# 4. image types

- jpg
  - compressed jpg is loosy image
  - not using jpg as background image in css
  
- png
  - lack of compression
  - lots of details
  - alpha

- gif
  - supports animation

# 5. adding images to web pages

img tag
  - src the image url
  - alt 
    - the alternative text if cannot display image
    - some browser show as tool tips when hoving

figcaption

```html
<figure>
  <img src="masthead.jpg" alt="Sunset over the forest" />
  <figcaption>Sunset over the forest</figcaption>
</figure>
```

# 6. walk thru - creating blog

Tips:
- border-radius: 50% is circle

Lecture
- copy everything to editor then adding html tag inline
- use time tag
- at least validate html once

Q&A
 - html block quote vs quote
 - image align center
 - video size
 - video and image wider than body tag border
 

# 7. walk thru - styling blog

cascade, write less code, override styles

```css
p {
  /* style, weight/line height font family */
  font: italic 14px/24px Georgia, serif;
}
```

Tips:

- font
  - Georgia, serif;
  - Helvetica, Arial, sans-serif;

- css specificity 
  - embedded
  - id selector
  - class selector :hover :focus
  - type selector :before :after
  - [css specificity caculator](https://specificity.keegan.st/)

- avoid too many overwritten
- prefer flatten and direct selector
- know when to use margin, border, padding
- prefer shorthand, e.g. border, font
- debug tool, select element, right panle, sytle 


# 8. html exercises: block elements

Goals: 
- wrap text content in the HTML elements that best fit semantically.

Tips:
- dl: definition list(container), dt： term, dd: description

block
- div
- h1-6
- p
- ul, ol, dl // list
- li, dt, dd // list item
- table
- pre // pre-formatted

inline
- span // should avoid
- a
- strong
- em
- img
- br // should avoid
- input
- abbr
- acronym

QA: 
- should use article, main tags

# 9. styling definition lists

when to use definition list
- dd can contain block element e.g. p, ul
- key value pair
- chat, dt as name, dd as message
- bad
  - dt connot contain block element
  - search engine will not index dl content vs heading content
  - not for complex tabular data

examples:
[Definition List examples](http://maxdesign.com.au/articles/definition/)

- as box
- as table
- as floating image/description
- as calendar event

# 10. html exercises: form

[MDN Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
[An Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)

Components:
- label: Name: Email, 
- input fields: text, dropdown, checkbox, email, ip, password
- action: Ok, cancel, save, update
- help: 
- messages: success or failed
- validation: field validation


Tips
- right align label as prompt

- form 
  - action required
  - method required
  - use fieldset to group filed 

- textarea
  - rows: visible rows

- aglin label

label {
  display: inline-block;
  width:100px;
  text-align:right;
}

- label prompt text
  - easy styling
  - put check box, radio inside label

- id vs name vs value
  - id is global attribute
  - name is input attribute, submit with form as key 
  - value is initial value, submit with form as value
  - value is independent to localization, <>localized</>, value is the consistent value


Q&A
- input tag with button type vs button tag
- input is self closing tag, ending with > or />
- use lable tag to show prompt text around input  

# 11. html exercies: talbes

[organizing data](http://learn.shayhowe.com/html-css/organizing-data-with-tables/)

row headings
- th tag scope attribute
- default is col, can be set to row

row group
- th rowspan =  how many rows a cells is extended
- th colspan = how many columns a cells is extended


# 12. css exercises: text formatting

meaningless paragraph generator: [lorem ipsum](http://generator.lorem-ipsum.info/_latin)

font shorthand
- mandatory: font-size and font-family
- size/line height font family (last)
- So many caveats [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

```css
/* size | family */
font: 2em "Open Sans", sans-serif;

/* style | size | family */
font: italic 2em "Open Sans", sans-serif;

/* style | variant | weight | size/line-height | family */
font: italic small-caps bolder 16px/3 cursive;

/* style | variant | weight | stretch | size/line-height | family */
font: italic small-caps bolder condensed 16px/3 cursive;

/* The font used in system dialogs */
font: message-box;
font: icon;

/* Global values */
font: inherit;
font: initial;
font: unset;
```

font-decoration
- uderline,
- overline, 
- line-through, 


text-transform // not transform
- uppercase
- lowercase
- full-width

transform
- modify coordination
- translateX // move along X
- rotateX
- scaleY // scale along Y asix
- ...


tips:
- prefer sematic em over font-stype:italic 



# 13. css exercises: dimension and spacing

Tips:

horizontally centering (to left and to right)

```css
1. block element: margin:auto
img {
  display: block;
  margin:auto;

  position: absolute;
  left:50%;
  transform:translateX(-50%);
}

2. inline element: set parent text-align:center 

body{
  text-align:center;
}

3. transform, asix, viewpoint, 2D sense
img {
  position: absolute;
  left:50%;
  transform:translateX(-50%);
}
```


# 14. improving


# 15. summary

# discussions