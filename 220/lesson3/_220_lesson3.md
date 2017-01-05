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

![event phases](../../kb/dom/event_phases.png)

> Capturing vs. Bubbling
>
>As a general rule, you should define event listeners for the bubbling phase of events, which does not require the use of the third useCapture argument. Most code you write will work in this way.
>
>We have covered the capturing phase in order to provide a complete picture of how event dispatch works within the browser and so that you would be aware of that phase of event handling should you encounter it.

# 10	Preventing Propagation and Default Behaviors

- event.stopPropagation()
- preventDefault()

> It is a good practice to call preventDefault() or stopPropagation() as early as possible in an event handler. 

# 11	Event Delegation

This technique of *attaching a single event handler at a higher location in the DOM* is called event delegation.

When To Use Event Delegation?

- The best approach is to start out directly binding event handlers to elements as needed when a project is new and small. As the size of the code increases, there may be situation where it makes sense to use event delegation to decrease the number of event handlers required by a page. jQuery (which we'll look at in an upcoming lesson) also includes some functionality to make using this technique simpler and avoids its main downside, which is the complexity of identifying which element and behavior need to be invoked in response to an event.

# 12	What is the Event Loop?

[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## JS runtime: 
- single thread, single call stack, single task queue
- async call back, event handler

## webapis
- concurrency 
- event loop / task queue or call back queue

## callback queue
- just one queue
- pick cb fron callback  queue **when stack is clear** (whenthread is idle)

## render queue
- when sync executing, reunder queue is blocked, ui is stucked


```
JS stack `setTimeout(5s)`
webapis `timer(callback)` running
callback queue

JS stack 
webapis `timer(callback)` 5 seconds...
callback queue

JS stack 
webapis 
callback queue `callback`

JS stack `callback`
webapis 
callback queue 
```


# 13	Assignment: Guessing Game


# 14	Assignment: Build an Input Box


# 15	Summary


# 16	Assessment: Context, Events, and the DOM