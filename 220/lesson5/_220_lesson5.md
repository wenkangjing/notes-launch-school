Putting it All Together
========================
# 1	Introduction

# 2	Read: jQuery Animations

what happens behind the scenes
- manipulating `opacity, padding, margin, width, height` anything in px, em, % 
- `display`

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

# 3	Assignment: Animating a Cartoon Strip

`$("div[id^=blind]")`
- * contains
- ^ starts with  // same as starts with of line in regex
- $ ends with    // same as ends with of line in regex
- ! not 

`finish`
- to stop all queued animation
- called before replay


`removeAttr('style')`
- remove the output of animatino
- called before replay

# 4	HTML Data Attributes

`id, class, value` are reserved html attribute for browser rendering or css cascading

custom data attributes 
- e.g. data-block, data-1, data-anything, *data + hyphen + anyting*
- store your data, used in JS, `.attr('data-block')` or `$link.data('block');`

> In short, if you want to get or set the value of an HTML data attribute, use the `.attr()` method. As a setter method, attr() will change the HTML markup. 
>
> If you want to set and retrieve custom data on an element **after the page has been rendered**, use the `.data()` method. As a setter method, data() will store the value on the node that can be retrieved with the data() method as a getter, but it will not update the HTML markup.

for older versions of IE
- use `dataset` of DOM Element

HTML attributes vs DOM properties
- html attr in html file (in file)
- dom prop is in the DOM tree (in memory)

# 5	Project: Search Filtering, Part 1: Structure and Styles
# 6	Project: Search Filtering, Part 2: Interactivity

checkbox on change, not click
- based on status changed
- in case click to label, and checkbox is not wrapped in label

get checkbox status in jQuery
 - `.is(":checked")`

cache all variables
- cache all need var at the beginning, debug to ensure all vars are correct, then
- code logics

filter using jQuery filter by data attribute
- `$items.filter("[data-id=" + item.id + "]").toggle(checked)`




# 7	Project: Dynamic Animations, Part 1: Structure and Styles
# 8	Project: Dynamic Animations, Part 2: Animations