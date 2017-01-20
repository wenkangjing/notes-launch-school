Advanced jQuery and Dynamic Content Creation
============================================

# 1	Introduction

- HTML templating systems with JavaScript to make the creation of HTML elements much easier. 

- single-page application using a Node server to save and retrieve data.

# 2	jQuery Event Delegation

listen to parent
- parent.on(event, child, cb)
- child.chosest()

```js
$('ul').on('click', 'a', function(e) {
  e.preventDefault();
  $(e.target).closest('li').remove();
});
```

event.namespace
- a string
- This will likely be used primarily by plugin authors who wish to handle tasks differently depending on the event namespace used.

`Returning false` from an event handler 
- will automatically call `event.stopPropagation()`
- `$(document).on("click", "a", false);`


attach multiple event in one call

```js
$("#text").on({
  focus: function() { $(this).addClass("focused"); },
  keyup: function(e) {
    $("#which b").text(e.which);
    $(this).val("");
  },
  blur: function() { $(this).removeClass("focused"); }
});
```

e.which
- make keycode, keychar is transparent for you

fire event
- $("a").trigger('click')

`currentTarget` is `this`

`delegateTarget` is `parent`, the delegated parent element

tricky index 
- the index of all of the siblings, whether it filtered or not

```HTML
<div id="index">
  <p>Index 0</p>
  <p>Index 1</p>
  <article>Index 2</article>
  <p>Index 3</p>
</div>
```

context in jQuery
- jQuery `.proxy(func, context)`
- js 
  - `func().bind(context)`
  - `func.call(context)`

position() vs offset()
- `position()` relative to positioned parent, match top/left in css, **imclude margin**
- `offset()` relative to the window

Dimensions in jQuery (**not same as in css**)
- `.height() .weight()`
- `.innerHeight()` content including padding not border
- `outerHeight()` including padding and border

custom event



# 3	Assignment: Managing Collections in JavaScript
 
HTML template
- to add them dynamically on the page later.
- `<script type="text/template" id="inventory_item">` script tag type as text/template

IIFE

```js
(function() {
  console.log("IIFE");
};

})();
```

global varible and **IIFE**

> We defined inventory as a global variable, and used an IIFE to assign it to an object that contains all the app logic. The advantage of exposing inventory to the global namespace is that we can inspect the inventory variable in the console to check its state, which we won't be able to do if we hide the inventory inside jQuery's document ready callback function: 
>
>The purpose of the IIFE, together with the global inventory is to say that inventory is the only variable that can be observed from the outside, and any other variables declared in this app should be private and not leaked to the global namespace.


# 4	HTML Templating With JavaScript


# 5	Exercises: Handlebars Basics


# 6	Assignment: Managing Collections in JavaScript with Handlebars


# 7	AJAX Requests


# 8	Project: Photo Gallery - Introduction and Server Setup


# 9	Project: Photo Gallery, Part 1 - Fetch Data and Render on Page Load


# 10	Project: Photo Gallery, Part 2 - Slide Show

# 11	Project: Photo Gallery, Part 3 - Like, Favorite and Comment