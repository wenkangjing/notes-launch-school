Event-Driven and Asynchronous Programming
===========================================


# 1	Introduction

# 2	Timeouts and Intervals

setTimeout(func, delay) clearTimeout(timeoutID)

setInterval(func, delay) clearInterval(intervalID)

# 3	User Interfaces and Events

event
- info about *what and where* it happened
- `addEventListener`
- [event type](https://developer.mozilla.org/en-US/docs/Web/Events) 

# 4	A Simple Example
- addEventListener
- onclick

# 5	Page Lifecycle Events

```
html file
-> html parse +  js evalation
-> DOM tree
-> `DOMContentLoaded` event
-> page displayed
-> assets loaded
-> `load` event

```

![semicomplete page loading](../../kb/dom/semicomplete_page_loading.png)

![complete page loading](../../kb/dom/complete_page_loading.png)

# 6	User Events

Keyboard
- keydown,
- keyup,
- keypress

Mouse	
- mouseenter,
- mouseleave,
-  mousedown,
-  mouseup,
- click

Touch	
- touchdown,
- touchup,
- touchmove

Window
- scroll,
- resize

Form 
- submit

# 7	Adding Event Listeners

- Register on the event handler of `DOMContentLoaded`
- after the DOM tree constructed


# 8	The Event Object
- `e.type` a string, case insensitive, e.g. click
- `e.target` The object the event originally was fired upon.
- `e.currentTarget` The object that is currently being targetted as the event bubbles up the DOM. This will be the object the event handler was attached to.

keyboard event
- which // keyCode **preferred**
- key // letter
- keyup/keydown/keypress(only for none modifier keys)

# 9	Capturing and Bubbling


# 10	Preventing Propagation and Default Behaviors


# 11	Event Delegation


# 12	What is the Event Loop?


# 13	Assignment: Guessing Game


# 14	Assignment: Build an Input Box


# 15	Summary


# 16	Assessment: Context, Events, and the DOM