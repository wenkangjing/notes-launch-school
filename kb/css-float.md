https://css-tricks.com/almanac/properties/f/float/

https://css-tricks.com/all-about-floats

## Layout

### 1. Auto scaled sidebar



### 2. Fixed sidebar

- sidebar: fixed width, float left, height 100vh
- content: width 100%, height 100vh

```css
.sidebar {
  width:100px;
  height:100vh;
  background:red;
  float:left;
}

.content {
  width:100%;
  height:100vh;
  background:green;
}
```
or

- container: pull right: set margin-left 100px
- siderbar: pull left: set margin-left -100px

```css
.container {
  margin:0 0 0 100px;
}

.sidebar {
  float:left;
  margin:0 0 0 -100px;
  width:100px;
  height:100vh;
  background:red;
}
.content {
  margin:0;
  width:100%;
  height:100vh;
  background:green;
}
```

### 3. Three columns

- html: left, right, put content after sidebars
- left bar float left
- right bar float right
- content width 100%, height 100vh

```css
.left {
  float:left;
  width:100px;
  height:100vh;
  background:red;
}
.right {
  float:right;
  width:100px;
  height:100vh;
  background:red;
}
.content {
  margin:0;
  width:100%;
  height:100vh;
  background:green;
}
```

or

- html: left, content, right
- leftbar float left, pull left
- content float left
- rightbar float right, pull right

```css
.container {
  margin:0 100px 0 100px;
}
.left {
  float:left;
  margin-left:-100px;
  width:100px;
  height:100vh;
  background:red;
}

.content {
  float:left;
  margin:0;
  width:100%;
  height:100vh;
  background:green;
}

.right {
  float:right;
  margin-right:-100px;
  width:100px;
  height:100vh;
  background:blue;
}
```

----

## Ways to clear float

### 0. Set clear on the direct followed block

simply clear the direct block element

### 1. Add empty div after last float
- add a empty div element after the last float element
- set clear:both on it

`<div style="clear: both;"></div>`

> div has no browser default styling. div gets the job done and doesn't hurt anybody

### 2. Set overflow on parent

- set parent element overflow:hidden
- the parent element will expand to contain the floats

> Be careful not to hide content or trigger unwanted scrollbars.

### 3. Clearfix on parent
- give parent a class name "clearfix"
- clear container:after 

```css
.clearfix:after { 
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

