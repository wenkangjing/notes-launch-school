HTML and CSS - Lesson 3: Working with Design Files
==================================================

# 1. Introduction

CSS
- core css concepts
- small subset of features in the industry

Photoshop
- retrieve assets from design files using
- read attributes, text, shape
- transfer to CSS and HTML 

# 2. Inspecting

elements inspector
- debugging html and css
- tag and dimension, blue for element, orange for margin, refer to box model tab
- element hierarchy at the bottom


Style
- our css files
- user agent - browser default
- inherited


DevTools Cheatsheet [link](http://anti-code.com/devtools-cheatsheet/)
- open dev tool: F12
- inspect element: Ctrl + Shift + C
- next/previous tab: Ctrl + [ / ]
- undo: Ctrl Z
- redo: Ctrl Y


# 3. Exercises: fixing css using the inspector

Tips from Walkthrough video
- font-family: comma , to separate each font

- remove space between li tag: 
  - ul font-size:0, 
  - li font-size:1rem

- The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element.

- symble in html
  - edit as html to modify the real html, don'd double click
  - https://dev.w3.org/html5/html-author/charref
  - or :before :after content

- float and clear [css tricks](https://css-tricks.com/all-about-floats/)

```css
main:after {
  display: block;
  clear: both;
  content: "";
}
```
# 4. Assignment: Company Splash Page
# 5. Solution: Company Splash Page

css properties only for inline
- text-align 

css properties only for block


alignment **text-aglin**
- text-align css property: how inline content like text is aligned in its parent block element.
  - used in center li in ul, inline-block
   
- align-content css property:aligns a flex container's lines within the flex container when there is extra space on the cross-axis.

- align as html attribute
  - embedded into html
  - bad

background
  - always set background color in case background-iamge is not found

To ensure page alignment

```css
header, main, footer {
  width: 100opx;
  margin: 0 auto;
}
```

# 6. Exercises: CSS Selectors

basic
  - type: elemeng tag
  - class: .
  - id: #
  - universal: *
  - attribute: header[role="banner"]

combined
- A > B   direct child  
- A B     descendant         
- A + B   immediately after/follow
- A ~ B   A B are sibling(same parent), B after A  

pseudo elements
- ::after ::before
- ::first-line
- ::selection

pseudo class
- :hover
- :focus
- :required
- :checked
- :enabled
- :read-only
- :first-child
- :last-child
- nth-child
  - tr:nth-child(odd)   Represents the odd rows of an HTML table.
  - tr:nth-child(even)  Represents the even rows of an HTML table.
- nth-of-type(odd)



# 7. The Box Model

block

1. take the entire row
2. margin, border, padding: top, right, bottom, left
3. if no width, expand naturally to fill its parent 
4. if no heigth, expand to fit its content 

- h1 through h6
- p
- blockquote
- ul, ol, dl
- dt, dd
- div
- section
- article
- aside
- header
- footer
- nav
- figure and figcaption
- form and fieldset

inline

1. width and height are ignored
2. the content will dictate the dimensions 
3. Borders are still applied, but content may be overlapping
4. margin top and bottom are ignored
5. the right and left padding affect its proximity to content that comes before or after it, the top and bottom do not

- span
- b, i, u
- strong, em
- a
- abbr
- sub and sup
- time
- mark

inline-block

1. width and height are set 
2. padding and margin are added on all sides
3. it does not automatically take up its own row for its dimensions
4. they can be placed side by side along with other inline-block or inline elements.
5. vertical-align:middle

- button
- input
- select
- textarea

[Box Model](https://css-tricks.com/the-css-box-model/) 
[shay howe](http://learn.shayhowe.com/html-css/opening-the-box-model/)


# 8. Floats and Page Layout

floating elements
- floating inline or inline-block elements will chnage its disaply to block level
- only take up as much width as is needed or as you specify
- if no enough space, show in next row

 overflow
- overflow: visible;/* Content is not clipped */
- overflow: hidden;/* Content is clipped, with no scrollbars */
- overflow: scroll;/* Content is clipped, with scrollbars */
- overflow: auto; /* Let the browser decide */

**tricks to layout sidebar**
- idea: sidebar shows in left margin of container 
- fixed width on sidebar and auto adjust width on primary content
- container margin-left = sidebar width 
- primary width:100, float right
- sidebar float left
-  box-sizing: border-box;

# 9. Containing Floats

Elements that are floated or set to absolute or fixed position are not elements that normally affect the dimensions of their parents because they're taken out of the normal flow.
- clearfix: For floated elements, we need either some element after the floated elements to clear them and allow the container to calculate a proper height
- Elements following a floated element will wrap around the floated element, we do not want this to happen, so I applied the 'clear: both' property to the third div, there are 2 other properties for clear, that's the left and the right. I chose to clear both, just to be sure.
- Basically, you just put the ::after pseudo-element on the containing parent element of the floated contents.

```css
#container:after {
  display: block;
  clear: both;
  content: "";
}
```

# 10. Exercises: Floats (1)

***take up the remaining space***
- You can set overflow on a container to have it take up the remaining space within a row of floated elements. This is useful if your last element can take up the leftover space in a variable width layout.

```css
section {
  overflow: hidden;
}

aside {
  overflow: hidden;
}
```

**clear**
- The clear CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The clear property applies to both floating and non-floating elements.

# 11. Exercises: Floats (2)
Done in Browser inspector

# 12. CSS Positioning

static position (default value)

relative position (to its current position)
- affect surrounding elements

absolute (to the screen)
- remove the elements from layout
- as if it were outside all other elements

> Absolutely positioned elements are moved in relation to their closest relatively positioned parent element.

fixed (to the windows)
- leaves it there even as the user scrolls the page
- the majority of fixed position elements are located at the top or bottom of the page.


>An absolutely positioned element is positioned within its nearest containing element that has a position: relative (strictly speaking, any position value other than static would work, but most often position: relative is used). If none of its containing elements is relatively positioned, the absolutely positioned element is then positioned relative to the <body> element.


```css
.item {
  position: relative;
  top: 10px;
  left: 10px;
}

#top-bar {
  position: fixed;
  right: 0;
  top: 0;
}

```

# 13. Exercises: Positioning

To horizontally center a fixed width element that is positioned, you can move the element to the center of the window with position and move it back in the opposite direction with negative margin. In our example, we're moving the element from the left edge to the center of the page, then moving it back towards the left edge by half its width using negative margin.

```css
#top-centered {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left:-200px;
  box-sizing:border-box;
}
```


viewpoint width and height

```css
#fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
#fixed {
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
}
```


# 14. Project: Summary of Box Model, Positioning, Floats Rules

[summary](https://d3jtzah944tvom.cloudfront.net/lesson_3/the_box_model/box_model.html)


# 15. Learning CSS Layout


# 16. Assignment: Install Photoshop



# 17. Working with Design Files


# 18. CSS Resets



# 19. Walkthrough: starting the Photography Blog Project



# 20. Assignment: Finish the Photography Blog



# 21. Solution: Finish the Photography Blog




# 22. Summary










