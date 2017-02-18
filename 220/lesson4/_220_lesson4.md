jQuery
===========

# 1	Introduction

jQuery is a JavaScript library that provides a convenient and consistent API across many browsers and platforms.

Every method in jQuery can be accomplished with JavaScript and the DOM methods. 


# 2	Douglas Crockford Lecture: The Metamorphosis of Ajax

https://www.youtube.com/watch?v=Fv9qT9joc0M

# 3	Read: Introduction to jQuery

>jQuery, at its core, is a function that wraps a DOM element or collection of elements in a collection of convenience methods that can be called to either manipulate the objects or use those elements in combination with other jQuery methods. 

> in jQuery, **$()** is an alias to **querySelector()**

To get jQuery version `$(document).jquery`

```js

$(document).ready(function() {
  // DOM is now loaded
});

$(window).load(function() {
  // DOM is loaded, img tags are loaded
});

// DOMContentLoaded callback
$(function() {
  // DOM is now loaded
});

$content.css('font-size', '18px');

console.log($content.css('font-size'));

// setter and getter
var width = $content.width();  // 800
$content.width(width / 2);     // Sets to 400
console.log($content.width()); // now 400

// css methold chain
$content.css('font-size', '18px').css('color', '#b00b00');

// css method by given object
$content.css({
  'font-size': '18px',
  color: '#b00b00'
});

// querySelector or getElementsByTagName
var $lis = $('li');
console.log($lis.length);
```

jQuery function
- return jQuery objects by giving stirng or element
- callback functions by giving a function

# 4	Demo: jQuery Overview

**jQuery object vs DOM element**

Part1: jQuery from a CDN, called on DOM ready
- DOM ready 
  - $(document).ready(function(){});
  - $(function(){})

- window load `$(window).load(function (){})`

Part2: selectors and traversal, setter and getter
- `$('p').css({fontSize: '20px', backgroundColor: '#cccccc'});`
- `$content.css('font-size', '30px').css('color', 'red');`

Part3: query elements
- filter
- `$( "li" ).filter( ":even" ).css( "background-color", "red" );`

Part4: jQuery variable
- returns in an Array
- `$('li').length` check length to see if selector works
- each, `$(this)`
- eq, `$('li').eq(0) eq(-2)`


Part5: jQuery CSS selectors
- find
- addClass

Part6: form controls
- `:input`: Selects all input, textarea, select and button elements.
- `.val()`
- `.prop()`


Part7: navigating the DOM
- `.parent()` `parents()`
- `.closest`

Attributes vs. Properties
- Attributes is from HTML document, loaed into properties when page loaded
- Properties is on the DOM

# 5	Read: jQuery Events

http://api.jquery.com/category/events/

`.on()`
- $('form').on('submit', function(e) {
- $('a').on('click', function(e) {

 `$(document).on()`
 - 

`.trigger('click')`
- trigger click event on the element

`.click()` or `.submit()`
- $('a').click(function(e) {
- $('form').submit(function(e) {

# 6	Read: jQuery DOM Traversal

http://api.jquery.com/category/traversing/

`.parent()` `.parents()` optional [selector]

`.closest(selector)`
- a closest element

`.find()`
- by selector or element
- Get the **descendants** of each element


`filter()`
- by selector or function
- Reduce the **set of matched elements**


`.children(])` 
- optional [selector]

`.nextAll()`
- optional [selector] 

`.prevAll()`

`.siblings()`

`.eq(i)` 
- 0 based
- same as [i]

`.next()` `.last()`

Selectors

`:not()`

`:contains`

# 7	Exercises: Using jQuery Selectors
http://d3jtzah944tvom.cloudfront.net/jquery_selectors/index.html

```js
// manipulate class
$("h1").removeClass('highlight')
$("h1").addClass('highlight')
$("h1").toggleClass('highlight')

// selector 
$('table').find('tr').filter(':odd');
// or
$('table').find('tr:odd');

// index function
$('table td').last();
// or
$('table td').eq(-1);

// index selector
$("article li:eq(2)");


// not can be function or selector
$('td').not('.protected');
// or
$('td:not('.protected')');

// attribute selector
$('a[href^=#]');           // starts with
$("input[name$='letter']") // ends with
$('[class*=block]');       // contains

```

# 8	Exercises: jQuery Events
[Exercise](./jq_event.html)

# 9	Assignment: Arithmetic Calculator
[Exercise](./jq_calculator.html)

# 10	Assignment: Removing jQuery

[Exercise](./raw_calculator.html)

```js

// selector
$("#element_id")
document.getElementById('#element_i')

// event
$("form").on("submit", function(e) {})
document.getElementById("calculator").onsubmit = function(e) {})

// value
$("#left").val()
document.getElementById("left").value

// text
$("#right").val()
document.getElementById("output").textContent 

// window onload
$(window).load(function(){

})

window.onload = function() {

};

window.addEventListener('load', function(){

});

// dom ready
$(function(){

});

$(document).ready(function (){

});

document.addEventListener('DOMContentLoaded', function() {

});

```

# 11	Assignment: Grocery List

print.css
- add `media` attribute
- `<link rel="stylesheet" media="print" href="print.css" />`

reset text in form
- document.querySelector('form').reset()
- $form.trigger('reset');
- $form[0].reset();

css
- box-shadow
- text-shadow
- linear-gradient

js
- caching selectors in jQuery object
- know how to use `$(this)` in callback

# 12	Assignment: DOM Shuffling

looping jquery object
- `.eq()` returns jQuery object
- `[]` or `.get()` returns element

manipulate DOM
- .append(), .appendTo(), .prepend(), .prependTo()
- .before() .after()
- .remove()
- .text()
- .prop()
- .attr()
- .data() // store and retrieve back


# 13	Assignment: Team Member Profile Modals

`on()` callback
- let `$e = $(this)` to cache current elemnt in callbacks
- `scrollTop()` `scrollLeft()` to get current window offset
- `.nextAll()` next all siblings
- `siblings()`

- `.fadeIn()` show/display element by fade them in
-  `fadeOut()` hide elements by fade them out 
- `.toggle` Display or hide the matched elements.

# 14	Assignment: Photo Gallery Slideshow

http://d3jtzah944tvom.cloudfront.net/lesson_5/photo_gallery_slideshow/index.html

You can also use CSS transitions instead of jQuery animations to transition the elements' opacity value.

navigation
- use `.active` to address selected
- `hasclass(), removeClass(), addClass()`
- `prop()`
- `index()`

event
- `e.currentTarget` The current DOM element within the event bubbling phase.
- `e.target` The DOM element that initiated the event.

animation
- hide() / fadeOut()
- `delay()` before fadeIn(0)
- show() / fadeIn()
- `stop()`Stop the currently-running animation on the matched elements.

Filtering by visibility
- filter by `:visible` or `:hidden`
- `.end()` **End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.**

# 15	Lecture: Chrome Debugging Tools for Front End Development

console tab
- drop down list to select *current html*
- navigating to elements tab - click/right click

console function
- `clear()` or CTRL+L on Windows

- %d, %i, %f, or %c css format `console.log('%cHello world!', 'font-size: 30px; color: red; background-color: green')`

- `console.dir()` Displays an interactive list of the properties of the specified JavaScript object.
- `console.table` display array or object in a table

- `console.time(label)` and timeEnd to log timestmap
- `console.profile(label)`and profileEnd  to gether profile

- `copy(obj` to copy to clipboard
- `getEventListeners()`
- keys() values()

$ sign without jquery
- `$` alias of querySelector, first one
- `$$` return an array, all

blackboxing 
- jquery min
- regexp pattern

event listener breakpoints
- submit
- keypress
- mouse scroll
- ...

conditional breakpoints

# 16	Assignment: Refactoring


credit card validation

[Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
- to verify id numbers
- mod 10
- checksum formula
- This won't tell you whether or not the card has the funds to pay for a purchase, but it will indicate whether or not a card number is valid, preventing a call to a merchant service to check it instead.

refactoring
 - use object to reduce switch case
 - use `toggleClass()`
 - use `toggle(bool)` to show/hide