jQuery
==========
# Basics

```js
// dom ready
$(document).ready(function() {});

$(function() {

});

// window load
$(window).load(function() {});

```

version 
- $(document).jquery


# Traversing

- .each(index, element)
- $("this").add("that") // add that to this collection, not change DOM at all. 
- .children()
- .closet("li")
- .filter(":even")  .filter(":visible") 
- .find("p")
- .siblings()
- .next() .nextAll()
- .slice()
- .first() .last() .eq()
- .prev() .next()
- .index()
- .not() .is()

# Selector
- :visible :hidden
- :not :empty
- :even :odd
- :checked
- :first :last :first-child :last-child
- :focus :submit :selected :enabled
- :checkbox :input :radio

# Form

```js
$f.serializeArray().forEach(function(input){
  o[input.name] = input.value;
});
```

# jQuery Attribute Selector

contains *
- `[name*="value"]`

end with $
- `[name$="value"]`

start with ^
-  `[name^="value"]`

not !
-  `[name!="value"]`

# Manipulate

- .append(), .appendTo(), .prepend(), .prependTo()
- .before() .after()
- .remove()
- .text()
- .addClass() .removeClass() .toggleClass()
- .prop()
- .attr() .removeAttr()
- .data() .removeData() // store and retrieve back
  - $('p').data("block") // returns gold cause in html `<p data-block="gold"> </p>`

```js
var $e = $("<div />", {
  "class": "shape circle",
  css: {
    top:10,
    left: 50
  }
});
```


# Animation
- .show() .hide() .toggle()
- .fadeIn() .fadeOut()
- .delay() .stop()

fade 
- `.fadeIn()` Display the matched elements by fading them to opaque.
- `.fadeOut()` Hide the matched elements by fading them to transparent.
- `.fadeTo()` Adjust the opacity of the matched elements.
- `.fadeToggle()` Display or hide the matched elements by animating their opacity.
- complete callback

slide
- `.slideDown()` Display the matched elements with a sliding motion.
- `.slideToggle()` Display or hide the matched elements with a sliding motion.
- `.slideUp()` Hide the matched elements with a sliding motion.

jQuery effect queue
- `.stop()` current the new animation
- `.finish()` stop all queued animations

turn off animation
- `$.fx.off` to disable animation



# Event

http://learn.jquery.com/events/

http://javascript.info/tutorial/bubbling-and-capturing


currentTarget === `this`
- 

target
- The deepest element which triggered the event is called the target or, the originating element.
- The target property can be the element that registered for the event or a descendant of it
- The DOM element that initiated the event.
- This property is very useful in event delegation, when events bubble.




preventDefault()
- Prevent the default action of the event (e.g. following a link).
- stop ancher redirect
- call it at the very beginning of callback functions just in case

stopPropagation()
- Stop the event from bubbling up to other elements.


link Namespacing Events
- $("p").on("click.bala", func...)
- $("p").off("click.bala")


attach multiple event in one call

```js
$("#text").on({
  focus: function() { 
    $(this).addClass("focused"); 
  },
  keyup: function(e) {
    $("#which b").text(e.which);
    $(this).val("");
  },
  blur: function() {
    $(this).removeClass("focused"); 
  }
});
```

fire event
- $("a").trigger('click')
