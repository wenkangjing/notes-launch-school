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


# 3	Assignment: Managing Collections in JavaScript (a bite on MVC)
 
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


## inventory order - walk through video 

good reading: https://medium.com/@jayshenk/how-being-stumped-by-one-line-of-code-helped-me-understand-context-in-javascript-2968c83e2771#.6oc9a4uai

OOP in js
- put logic in inventory object, not global scope
- put `.on(event, cb)` in  bindEvents function
- seperate data and UI
  - `add()` for data + `addItem` for UI
  - remove(id)  for data + `removeItem` for UI


jQuery object .html()
- convinient way to print element in console

HTML template
- replace ID with increamental id, rather than use `.data('id', id)`
```html
<!--template-->
<input type="hidden" name="item_id_ID" value="ID" />

<!--dynamically inserted-->
<input type="hidden" name="item_id_1" value="1" />
<input type="hidden" name="item_id_2" value="2" />
```

mind type `.val()` and integer
- .val() returns string
- id or idnex in our data is integer
- `idx = +idx`

event delegate
- `$this` with be the parent
- `e.target` is the child that fired the event
- `.on(event, data, callback)`
  - data is a selector that jQuery can find within this parent element

Array.forEach
- return false to stop the loop



# 4	HTML Templating With JavaScript

client-side templating libraries to generate HTML using data
- mustache JS
  - does not include a way to add logic to your HTML templates

- underscore js
  - Underscore templates allow you to write plain-old JavaScript within your template to be executed when it renders

- handlebarsjs
  - adding logic and support for partials, but keeping the JavaScript out of the HTML. 
  - It has no dependencies of any kind

Handlebars
- add a script tag in html, provide an id
- Handlerbars.compile(tamplete html), returns a function
- iterating data, for each item, pass to the  returned function
- get the rendered html 

[A Beginner’s Guide to Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/)

[x] read thru
[x] fix products.js

> Handlebars is a logic-less templating engine that dynamically generates your HTML page. It’s an extension of Mustache with a few additional features. Mustache is fully logic-less but Handlebars adds minimal logic thanks to the use of some helpers (such as if, with, unless, each and more) 


```html
// HTML - includes
<script src="/path/to/handlebars.min.js"></script>

// HTML - template
<script id="handlebars-demo" type="text/x-handlebars-template">
   <div>
      My name is {{name}}. I am a {{occupation}}.
   </div>
</script>
```

```js
// JS - retrieve the template data from the HTML
var template = $('#handlebars-demo').html();

// JS - Compile the template data into a function
var templateScript = Handlebars.compile(template);

// JS - data
var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

// JS - pass data into the template function, returning the rendered html
var html = templateScript(context); // html = 'My name is Ritesh Kumar. I am a developer.'

// JS - Insert the HTML code into the page
$(document.body).append(html);

```

### Handlebars Syntax

property
- {{name}} 

proeprty escape
- {{{name}}}

comments 
- {{!--comments--}}

property in comments
- <!-- I am learning {{language}} --> - returns <!-- I am learning Handlebars -->

blocks

```html
{{#if boolean}}
   Some Content here
{{/if}}

{{#each names}}
  My name is {{firstName}} {{lastName}}.<br/>
{{/each}}
```

path - ../ 

```
This article is available on {{website.name}}.<br/>

{{#each names}}
  I am a {{../occupation}}. My name is {{firstName}} {{lastName}}.<br/>
{{/each}}

var context = {
  "occupation" : "developer",
  "website" : {
    "name" : "sitepoint"
  }
  "names" : [
    {"firstName" : "Ritesh", "lastName" : "Kumar"},
    {"firstName" : "John" , "lastName" : "Doe"}
  ]
}

This article is available on sitepoint.
I am a developer. My name is Ritesh Kumar.
I am a developer. My name is John Doe.

```

### Handlebars Helpers

each helper with @index, {{this}} is equal to {{.}} 

```
{{#each countries}}
  {{@index}} : {{this}}<br>
{{/each}}
```

if helper

```
{{#if countries}}
  The countries are present.
{{else}}
  The countries are not present.
{{/if}}
```

custom function helper

```js

var context = {
  "students":[
    {"name" : "John", "passingYear" : 2013},
    {"name" : "Doe" , "passingYear" : 2016}
  ]
}

Handlebars.registerHelper("studyStatus", function(passingYear) {
   if(passingYear < 2015) {
      return "passed";
   } else {
      return "not passed";
   }
})
```

```html
{{#each students}}
  {{name}} has {{studyStatus passingYear}}.<br>
{{/each}}

```

custom block helper

### Partial Templates

> Handlebars partials are templates that can be shared among different templates. They are written as {{> partialName}}. Before using them in the HTML, we need to register the partial using Handlebars.registerPartial() method.

```
Handlebars.registerPartial(
  'partialTemplate',
  '{{language}} is {{adjective}}. You are reading this article on {{website}}.'
);

var context={
  "language" : "Handlebars",
  "adjective": "awesome"
}

// html
{{> partialTemplate website="sitepoint"}} <br>
{{> partialTemplate website="www.sitepoint.com"}}

// output
Handlebars is awesome. You are reading this article on sitepoint
Handlebars is awesome. You are reading this article on www.sitepoint.com

```

# 5	Exercises: Handlebars Basics

each
- *posts* is the keyword to link html/js

```
{{#each posts}}
{{/each}}

$(document.body).append(postsTemplate({ posts: postsArray }));
```

partial
- *tagsTemplate* is the keyword to link html/js

```
 {{> tagsTemplate}}

let postsTemplate = Handlebars.compile($('#posts').html());
let tagsTemplate = Handlebars.compile($('#tags').html());

Handlebars.registerPartial('tagsTemplate', $('#tags').html());
```

# 6	Assignment: Managing Collections in JavaScript with Handlebars


# 7	AJAX Requests

# 8	Project: Photo Gallery - Introduction and Server Setup
ignore node_moduels in git

# 9	Project: Photo Gallery, Part 1 - Fetch Data and Render on Page Load

1. cache all template into an object, id as key, compiled function as value
2. get data from server `$.get(url)`

jQuery ajax functions are callbacks


**Network tab** for ajax response


# 10	Project: Photo Gallery, Part 2 - Slide Show

Use jQuery's `.prev()` and `.next()`, `last()`, `first()`

check jQuery object `.length`

cached jQuery object may not valid after `append/remove/replace` node in the DOME

```js
// Update ui text
$e.text(function(i, txt) {
  return txt.replace(/\d+/, json.total);
});
```




# 11	Project: Photo Gallery, Part 3 - Like, Favorite and Comment

reset form after submit
- $form.trigger("reset")

