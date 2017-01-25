HTML5 APIs
===========

# 1	Introduction

# 2	Client-side Storage

cookies? 
- only hold 4KB (4096 bytes) of data per site
- have an expiration date
- Creating a cookie is a very messy process, since all cookie data is just stored in a single string. To modify a cookie value, we'd have to search the string, find the current key and value, and replace it with a new key and value. 

HTML5 ways
- `window.localStorage` stays around after the browser window or tab closes, being accessible as long as the browser hasn't deleted localStorage by some other means.
- `window.sessionStorage` only lasts the current session. In the case of a web browser, this means until the tab or window is closed. 
- holds 5MB
- is around until the user or our JavaScript removes it.
- localStorage, on the other hand, stores its values in an object of key and value pairs and has methods meant to set and get these properties, as well as methods to remove a property and to clear the entire storage object.

> We can **only save values as strings**. If we passed an object in as a value to setItem, the object's toString method would be called 

> Before we get further into these, it's important to note that in mobile Safari the data may be removed to free up space in the phone's cache, even if the user didn't tell the browser to delete it. In desktop browsers, though, unless the user deletes the localStorage it will remain indefinitely.


`localStorage`
- it is an object, with
- setItem/getItem/removeItem
- length/clear

`JSON.stringify` object to json string

`JSON.parse` json string to object



# 3	Assignment: Storing and Retrieving State with localStorage

`.index()` without arg
- returns of the zero-based index of jQuery object

save index not name

trigger event when loading
- `.click()`
- `.trigger('click')`

get body
- `$(document.body)` a little quick than `$("body")`

# 4	The Canvas API

canvas, context

move the last element of an array to the beginning
`array.unshift(array.pop());`

draw square
- `.fillRect()`

draw circle
- `.arc` 

draw
- beginPath and closePath
- .moveTo() and .lineTo()


canvas to image

```js
var img_src = canvas.toDataURL('png');
var img = document.createElement('img');

img.src = img_src;
document.body.appendChild(img);      
```

image to canvas

```js
var img = document.querySelector('img');
ctx.drawImage(img, 0, 0);
```

manipulate iamge in canvas
- `getImageData` and `putImagaData`

[ ] what is ImageData

# 5	Project: Canvas Shape Stamper

http://stackoverflow.com/questions/5034529/size-of-html5-canvas-via-css-versus-element-attributes

```
I don't get why the following pieces of code produce different results, because css would scale the canvas as it was zoomed in,

<style>
#canvas {
    width: 800px;
    height: 600px;
}
</style>
<canvas id="canvas"></canvas>
In contrast with this approach (that works as expected):

<canvas id="canvas" width="800px" height="600px"></canvas>

Yes, when you apply the css styling, the canvas fits 800x600 but the content inside it is "enlarged", it's like the canvas coordinate system keeps it's default size, but is "stretched". Let me know if I'm not clear enought. I'm using Firefox 4.0b11
```

# 6	Project: Image Manipulator