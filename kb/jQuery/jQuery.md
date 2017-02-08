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
- .index()

# Selector
- :visible :hidden
- :not :empty
- :even :odd
- :checked
- :first :last :first-child :last-child
- :focus :submit :selected :enabled
- :checkbox :input :radio


# jQuery Attribute Selector

contains 
- *
- `[name*="value"]`

end with 
- $
- `[name$="value"]`

start with
- ^
-  `[name^="value"]`

not
- !
-  `[name!="value"]`

# Manipulate

- .append(), .appendTo(), .prepend(), .prependTo()
- .before() .after()
- .remove()
- .text()
- .prop()
- .attr()
- .data() // store and retrieve back

- .show() .hide() .toggle()
- .fadeIn() .fadeOut()
- .delay() .stop()

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