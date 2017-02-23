Lesson 2: Backbone Basics
===========================

# 1	Introduction

https://addyosmani.com/backbone-fundamentals/


# 2	Backbone Overview

- small library rather than a framework
- model + view + collection
- dependencies: Underscore + jQuery
- Backbone and Underscore are created by created by DocumentCloud. 

Dependencies
- http://backbonejs.org/
- http://underscorejs.org/
- loading order
  * head: underscore, backbone, handlebars if needed
  * body: appjs

Test without a backend
- fake online rest api
- e.g. JSON placeholder: http://jsonplaceholder.typicode.com/

versions
- development
- production + source map
- edge 

Node http-server
- check global pkg `npm -g ls --depth=0`

Backbone Model
- extend model
- urlRoot
- on sync
- on change
- model listenTo another model

Backbone Collection
- super set of array of model
- url
- on change
- comparator (sort)
- pluck


Tips from walk thru video
- don't trust console tab, try put code in js files
- [ ] go thru after the lesson 2

# 3	Backbone Models

http://backbonejs.org/#Model

.extend
- sets up the prototype chain
- by given object with functions in it
- futher extended
- `.defaults` to specify the default attributes

// my_ford.__proto__.__proto__ === Car.prototype

```js
var Car = Backbone.Model.extend({
  defaults: {
    doors: 4,
    wheels: 4
  },
  setFullName: function() {
    this.set("full_name", this.get("make") + " " + this.get("model"));
  }
});
var my_car = new Car();
var Ford = Car.extend({
  defaults: {
    make: "Ford"
  }
});
var my_ford = new Ford();
```

.get
- attribute by given name

.set
- attributes by given key/value or object 
- chain
- may trigger `change`

.unset
- remove 

.id
- unique id
- able to re-map by idAttribute

.cid
- client id, when has not yet been saved to server

.on(event, callback) or .on({event: cb, event: cb})
- callback of model chagned, same as jquery on
- event 
  - `change` // all properties
  - `change:name` // on particular property
  - `change destroy` // multiple event 
  - 

.toJSON
- return object
- call JSON.stringify to return a JSON string



Events
- http://backbonejs.org/#Events-catalog


# 4	Exercises: Backbone Models

- GET  /books/ .... collection.fetch();
- POST /books/ .... collection.create();
- GET  /books/1 ... model.fetch();
- PUT  /books/1 ... model.save();
- DEL  /books/1 ... model.destroy();

Prefer toJSON over direct access to attributes property

```js
// Works, but accessing attributes directly may lead to accidental attribute modification
console.log(post_1.attributes);
// Will safely collect post_1's attributes into a new plain object to avoid accidental attribute modification
console.log(post_1.toJSON());
```

`success` and `error` callbacks 
- this is window
- function(model, response, options)  use `model` instead

short circus

```js
if (this.has("userId")) {
  this.setUser();
}

this.has("userId") && this.setUser();
```

# 5	Project: Editing a Backbone Model


# 6	Project: Managing Multiple Models

_.without()



# 7	Backbone Collections


# 8	Exercises: Backbone Collections


# 9	Project: Adding a Backbone Collection


# 10	Backbone Views


# 11	Project: Completing the Backbone App


# 12	Project: Todo App Revisited


# 13	Summary

- [ ] go thru Live Session on Backbone Overview 
