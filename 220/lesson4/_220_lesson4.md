jQuery
===========

# 1	Introduction

jQuery is a JavaScript library that provides a convenient and consistent API across many browsers and platforms.

# 2	Douglas Crockford Lecture: The Metamorphosis of Ajax

https://www.youtube.com/watch?v=Fv9qT9joc0M

# 3	Read: Introduction to jQuery

>jQuery, at its core, is a function that wraps a DOM element or collection of elements in a collection of convenience methods that can be called to either manipulate the objects or use those elements in combination with other jQuery methods. 

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
  - `$(document).ready(function(){});`
  - `$(function(){});`

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

`.on()`
- $('form').on('submit', function(e) {
- $('a').on('click', function(e) {

`.click()` or `.submit()`
- $('a').click(function(e) {
- $('form').submit(function(e) {

# 6	Read: jQuery DOM Traversal

`.parent(selector)`

`.closest(selector)`

# 7	Exercises: Using jQuery Selectors


# 8	Exercises: jQuery Events


# 9	Assignment: Arithmetic Calculator


# 10	Assignment: Removing jQuery


# 11	Assignment: Grocery List


# 12	Assignment: DOM Shuffling


# 13	Assignment: Team Member Profile Modals


# 14	Assignment: Photo Gallery Slideshow


# 15	Lecture: Chrome Debugging Tools for Front End Development


# 16	Assignment: Refactoring