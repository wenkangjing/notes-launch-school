Lesson 1: Build a MVC Framework
===================================

# 1	Introduction

nodemon reload, automatically.

SPA
- no page refresh

.data() 
- pull html5 data-* automatically


# 2	Project: Creating a Single Page App



# 3	Read: The Basics of MVC Frameworks

- **Model**: This is your raw data. Think of this as the content you would either send back to the server for saving or what you'd receive from the server in order to render to the view. This layer can exist without the view and controller. Typically, when a model changes, it notifies its observers of the change.
- with **collection**

- **View**: This is what we've been building in HTML and CSS (and DOM events). The visual representation of the model and the controls necessary to interact with the data. A view will usually be listening for any change to a model or series of models, and responding to those changes appropriately.

- **Controller**: Typically, this manages any logic and user input, while sometimes fetching models and optionally processing them before sending them up to the view. This acts as an intermediary to the models and views.
- In many front end applications, the controller acts as our **global application object**. 

# 4	Creating an MVC Framework

- a function that returns a constructor function 
  - can be extended by given options
  - with  prototype objects

# 5	Project: *Model Constructor* Getter and Setter
- add attributes property to Model.prototype

# 6	Project: Model Constructor *Seeding and Change Events*
- __events store array of callbacks
- trigger all callbacks in setter 

# 7	Project: *Collection Constructor*: Add, Remove, Reset
- store Model Constructor
- keep model instance array
- when add, check plain object or model object

# 8	Project: Collection Constructor: Set, Get


# 9	Project: *View Constructor*: Render, Remove
- store model
- model stores a reference of view
- parent element
- render

# 10	Project: View Constructor: Binding Events

```
Collection        Model             View              App
                  callbacks ------> render 
                  get/set <-------- events (type/cb)  register event/callbacks 
```

# 11	Project: Todo App

http://d3905n0khyu9wc.cloudfront.net/todo_app/index.html

$ with attributes
- `$("<div></div>", { foo: "bar", hello: "world" })`
- >> `<div foo="bar" hello="world"></div>`

`e.preventDefault()` is equal to `return false`

unbind event `$(e.target).off(e);`

# 12	Summary


