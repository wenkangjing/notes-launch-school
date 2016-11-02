https://css-tricks.com/almanac/properties/f/float/

https://css-tricks.com/all-about-floats

http://css.maxdesign.com.au/floatutorial/index.htm

[youtube float explaination](https://www.youtube.com/watch?v=xara4Z1b18I)

## float

- **Floating an element automatically makes it into a box.**
- **always set a width on floated items** 
- **positioned within the normal flow, then taken out of the flow and shifted to the left or right as far as possible.**


## Layout

### 1. Auto scaled sidebar

```css
nav {
  float: left;
  width: 25%;
}
section {
  margin-left: 25%;
}
```


### 2. fixed width leftbar

- Apply `float` and `width` to the leftnav
- Setting `margin-left` to the "content" div

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
  margin-left:100px;
  background:green;
}
```

### 3. Fixed width 3 column layout

- Start with the semantically marked up code, `leftnav, rightnav, content`
- Add width and `margin:0 auto` to the container
- Apply `float:left, width`, margin and padding to the `leftnav`
- Apply `float-right, width`, margin and padding to the `rightnav`
- Setting `margin-left, margin-right` to the `content` div


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
  margin-left:100px;
  margin-right:100px;
  width:auto;
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

## Clear float

### 0. Set clear on after box

simply clear the direct followed block element

### 1. Add empty div after last float
- add a empty div element after the last float element
- set clear:both on it

`<div style="clear: both;"></div>`

> div has no browser default styling. div gets the job done and doesn't hurt anybody

### 2. Set overflow on parent

- set parent element overflow:hidden
- the parent element will expand to contain the floats

> Be careful not to hide content or trigger unwanted scrollbars.

### 3. Clearfix on **direct** parent
- give parent a class name "clearfix"
- clear container:after 
- MUST clearfix on **direct parent**

```css
.clearfix:after { 
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

## Q&A

#### how to wrap around a float element?


#### how to float in multiple lines

Set element `float:left` and `clear:left`


#### what does clear mean?
- clear:left on A means no float elements are allowed on that side