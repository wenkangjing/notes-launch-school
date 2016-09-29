HTML and CSS - Lesson 1 Preparations
=====================================

# Tips
- Use Gist or Pastebin for code sharing
- markdown
- know how to ask question


# Shay Howe's HTML & CSS Tutorial

## HTML

HTML Validation: https://validator.w3.org/

```html
<a href="www.google.com">Shay Howe</a>
```
- tag: <bala>
- element: a
- attribute: href="www.google.com"
- attribute name: href
- attribute value: "www.google.com"

HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>

```
```
!DOCTYPE 
    |-- html lang, charset
          |-- head
          |-- body
```

Block vs Inline Elements
- block: new line
- inline: inside block element
  - a
  - strong, em

Div vs Span
  - div is block
  - span is inline

Comments
  - html <!-- -->
  - css /*    */

HTML tags
- h1 to h6
- p for paragraph
- bold with strong
- italicize with em
- a href
  - href="url"
  - href="#top", element id
  - mailto:ba@gmail.com?subject=Email%20Title&body=Fareware%20Email%20To%20All
  - target="_blank":open in new window 

HTML Structure
- header is new in HTML5, top in body
- head vs body

```plaintext
html
  |--head
  |    |--title, link, meta
  |--body
      |--header
      |--nav,aside, article, section
      |--footer
```

## CSS

CSS Validation: http://jigsaw.w3.org/css-validator/

CSS Selector

CSS Reset
- plain html
- for CI
- cross browser testing

- type selector:  

```css
p {...} div{...} 

h1, h2, h3, h4 {
  color: #648880;
}
```

- class selector: class name can be duplicated

```html 
.awesome {...} 
<div class="awesome">...</div>
```

- ID selector: unique

```html
#clientname {...} 
<div id="clientname">...</div>
```

- Combining selector

```html
<div class="hotdog"> 
  <p>...</p> /brown/
  <p>...</p> /brown/
  <p class="mustard">...</p> /yellow/
</div>
```

```css
.hotdog p {
  background: brown;
}

/* bad - class, type.class*/
.hotdog p.mustard {
  background: yellow;
}

/*good - use class selector*/
.hotdog .mustard {
  background: yellow;
}      
```


Weights
- inline style > ID Selector > Class Selector > Type Selector
0. Type selectors (e.g., h1) and pseudo-elements (e.g., :before).
1. Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
2. ID selectors (e.g., #example).

Cascade
- overwritten if same weight

Color
- predefined: red, maroon, silver
- HEX: #RRGGBB
- RGB & RGBa: rgb(0,128,128), alpha as transparency
- HSL & HSLa: hsl(120, 100%, 50%)  /* green */

Size
- Absolute 
- Relative
- Percentages 
- 2 em is 2 times size of current font 

```css
xxx {
  font-size: 14px;
  width: 5em;
  width: 50%;
}
```

CSS Pseudo element

```css
p::first-letter {
    color: #ff0000;
    font-size: xx-large;
}

p::first-line {
    color: #ff0000;
    font-variant: small-caps;
}

h1::before {
    content: url(smiley.gif);
}

h1::after {
    content: url(smiley.gif);
}

::selection {
    color: red; 
    background: yellow;
}

```

CSS Pseudo

```css

```
## Box Model

```
|--margin：
    |--border **with style and color**
        |--paddind 
            |--content

```
- width + padding-left + padding-right + border-left + border-right
- height + padding-top + padding-bottom + border-top + border-bottom


```css
/*
320px (box width)
+ 20px (left + right padding)
+ 10px (left + right border)
+ 0px (left + right margin)
= 350px
*/
div {
    width: 320px; /*content width*/
    padding: 10px;
    border: 5px solid gray;
    margin: 0; 
}

/*left right*/
div {
  margin: 10px 20px; 
}

/*clock wise: top, right, bottom, left*/
div {
  margin: 10px 20px 0 15px;
}

div {
  margin-top: 10px;
  padding-left: 6px;
  border-bottom: 6px solid #949599;
}

div {
  border-radius: 5px;
}

```

## Positioning
- float: block elements, originally design for wrap contents around image
- clear: left, right, and both.
- position
```css
/*parent*/
.offset {
  left: 20px;
  position: relative;
  top: 20px;
}

/*window*/
div {
  position: absolute;
  right: 20px;
  top: 20px;
}

```

1. What floats are and how to use them to position content
2. How to clear and contain floated elements
3. How to position content with inline-block elements
4. How to remove the white space between inline-block elements
5. How to uniquely position content with relatively and absolutely positioned elements

## Typography

typeface vs font
- typeface is how text looks, (song)
- font is a file contains a typeface (mp3)
 
```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-variant: small-caps;
  font-weight: bold;  /*600*/
  line-height: 22px;
}

/*shorthand font - font-size, font-family are must*/
html {
  font: italic small-caps bold 14px/22px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

text
- text-align: left, right, center, justify
- text-decoration:none, underline, overline, line-through, and inherit
- text-intend
- text-shadow
- text-transform:none, capitalize, uppercase, lowercase, and inherit.
  - vs font-variant

```css
p {
  text-align: center;
  text-decoration: underline;
  text-indent: 20px;
  text-shadow: 3px 6px 2px rgba(0, 0, 0, .3);
  text-transform: uppercase;
  letter-spacing: -.5em;
  word-spacing: .25em;
}
```

font safe fonts
- safe
- pre installed on every device

embedded fonts

```css
@font-face {
  font-family: "Lobster";
  src: local("Lobster"), url("lobster.woff") format("woff");
}
```


## Background & Gradients
[css tools](http://www.cssmatic.com/)
- gradient generator
- border radius
- box shadow


```css
/*background*/
div {
  background-color: #b2b2b2;
  background-color: rgba(0, 0, 0, .3);
  
  background-position: 20px 10px;
  background-image: url("alert.png");
  background-repeat: no-repeat;
}

/*shorthand*/
div {
  background: #b2b2b2 url("alert.png") 20px 10px no-repeat;
}

/*gradient*/
div {
  background: #466368;
  background: linear-gradient(#648880, #293f50);
  background: linear-gradient(to right bottom, #648880, #293f50);
  background: radial-gradient(#648880, #293f50);
}
```

## Creating Lists

List
- ol
  - reversed
  - start 
- ul
  - none
  - disc
  - circle
  - square

- li
  - value

```css
ul {
  list-style-type: square;
  list-style-position: inside;
}

```

```html
<ol start="30"> 
  <li>this is item 30</li>
  <li value="3">this is item 3</li>
</ol>

<ul>
  <li>bullet</li>
  <li>bullet</li>
</uol>
```

description list
- description Lists
- description term

horizontal list

```css
li {
  display: inline-block;
  margin: 0 10px;
}
```

floating list

```css
li {
  float: left;
  margin: 0 20px;
}
```

navi list
```html
<nav class="navigation">
  <ul>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><a href="#">Notifications</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</nav>
```

```css
.navigation li {
  display: inline-block;
}

.navigation li {
  display: inline-block;
}
.navigation a {
  background: #395870;
  border: 1px solid rgba(0, 0, 0, .3);
  color: #fff;
  padding: 12px 20px;
  text-decoration: none;
}
.navigation a:hover {
  background: #314b60;
}

```

## Media

```html
<img src="image url, absolute or relative path" alt="show if image not found">
<video src="earth.ogv" controls poster="earth-video-screenshot.jpg"></video>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12607.144722993997!2d144.96669070000002!3d-37.818476999999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b60b270907%3A0x605ebae4aedc9a2f!2sMelbourne+Town+Hall%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1474958166090" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
<audio controls>
  <source src="jazz.ogg" type="audio/ogg">
  <source src="jazz.mp3" type="audio/mpeg">
  <source src="jazz.wav" type="audio/wav">
</audio>
```

```css
img {
  background: #eaeaed;
  border: 1px solid #9799a7;
  float: right;
  margin: 8px 0 0 20px;
  padding: 4px;
  width: 200px;
}
```
[prefered format](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
[converter](http://media.io/)

## Form

```html
types
<input type="text" name="username">
<input type="date" name="birthday">
<input type="time" name="game-time">
<input type="email" name="email-address">
<input type="url" name="website">
<input type="number" name="cost">
<input type="tel" name="phone-number">
<input type="file" name="file">

editer
<textarea name="comment">Add your comment here</textarea>

radio
<input type="radio" name="day" value="Friday" checked> Friday
<input type="radio" name="day" value="Saturday"> Saturday
<input type="radio" name="day" value="Sunday"> Sunday

checkbox
<input type="checkbox" name="day" value="Friday" checked> Friday
<input type="checkbox" name="day" value="Saturday"> Saturday
<input type="checkbox" name="day" value="Sunday"> Sunday

dropdown single selection
<select name="day">
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>

dropdown multiple selection
<select name="day" multiple>
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>

fieldset and legend
<fieldset>
  <legend>Login</legend>
  <label>
    Username
    <input type="text" name="username">
  </label>
  <label>
    Password
    <input type="text" name="password">
  </label>
</fieldset>

```

## Table
- table root
- tr table row
- th table header
- td cell

> Tip: Use the colspan and rowspan attribute to let the content span over multiple columns or rows! 


## Best Code

HTML coding proactices

1. css id is unique
- id is unique
- class can be duplicated

2. use semantic element
- use h1, p, strong, div
- no br, span

3. strucutre
- html = head + body

4. syntax
- lowercase 
- indent
- always double quotes
- no / at the end of self-closing element

5. use alt text attribute on images

6. separate style

7. avoid too man div
- reduce markup

8. continually refactor code

CSS coding practises

1. Comments
- commments on top of each style /* Primary header */

2. multiple lines
- one property per line

3. class name
- lowercase
- use hyphen delimiters

4. selectors
- avoid id selector
- use class selector
- only 2 or 3 level nested, specific class if needed

5. prefer shorthand

6. prefer 3-char shorthand hex color


7. drop units from 0
- use 0
- not 0px or 0%

8.  Group & Align Vendor Prefixes

```css
Bad: not align, not easy to read
div {
  background: -webkit-linear-gradient(#a1d3b0, #f6f1d3);
  background: -moz-linear-gradient(#a1d3b0, #f6f1d3);
  background: linear-gradient(#a1d3b0, #f6f1d3);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

Good
div {
background: -webkit-linear-gradient(#a1d3b0, #f6f1d3);
background:    -moz-linear-gradient(#a1d3b0, #f6f1d3);
background:         linear-gradient(#a1d3b0, #f6f1d3);
-webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
}

```
# QA
- always provide code snipets
- test in chrome first


# Code Reviews
- check provide solution first
- when I have different solution
- when there is question
