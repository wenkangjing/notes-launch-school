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


> cascade vs class per tag



# 8. html exercises: block elements


# 9. styling definition lists


# 10. html exercises: form


# 11. html exercies: talbes

# 12. css exercises: text formatting


# 13. css exercises: dimension and spacing


# 14. improving


# 15. summary

# discussions