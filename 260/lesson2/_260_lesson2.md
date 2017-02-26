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

> ajax calls, callbacks

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

`toJSON` 
- method only returns the data, leaving out the Backbone-specific properties and methods.

`fatch`
- with `{reset: true}` reset the collection rather than update it
- `success` or `error` callback function (model, response, opts)


# 6	Project: Managing Multiple Models

- extend, urlRoot
- id(server), cid(client id)
- get/set/reset/clear
- fetch/save/sync
- on(event, cb(model, response, opts))

# 7	Backbone Collections
- extend, 
- model as model constructor,
- url
- models, list of model
- fatch/save
- set/get/add
- create = add + save
- `.pluck("email")`
- paser - paser the response of fetch, clean restructure the data

# 8	Exercises: Backbone Collections
# 9	Project: Adding a Backbone Collection

Backbone Events

- "add" (model, collection, options) — when a model is added to a collection.
- "remove" (model, collection, options) — when a model is removed from a collection.
- "update" (collection, options) — single event triggered after any number of models have been added or removed from a collection.
- "reset" (collection, options) — when the collection's entire contents have been reset.
- "sort" (collection, options) — when the collection has been re-sorted.
- "change" (model, options) — when a model's attributes have changed.
- "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
- "destroy" (model, collection, options) — when a model is destroyed.
- "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
- "sync" (model_or_collection, response, options) — when a model or collection has been successfully synced with the server.
- "error" (model_or_collection, response, options) — when a model's or collection's request to the server has failed.
- "invalid" (model, error, options) — when a model's validation fails on the client.
- "route:[name]" (params) — Fired by the router when a specific route is matched.
- "route" (route, params) — Fired by the router when any route has been matched.
- "route" (router, route, params) — Fired by history when any route has been matched.
- "all" — this special event fires for any triggered event, passing the event name as the first argument followed by all trigger arguments.

Backbone.Model collection property
- The model.collection property is normally created automatically when you first add a model to a collection. 
- Note that the reverse is not true, as passing this option to the constructor will not automatically add the model to the collection. Useful, sometimes.

Backbone.View collection property



# 10	Backbone Views

properties
- `el`  **parent** element (string)
  - set `el` in constructor, a selector stirng 
  - $el is just a reference, easy to use `this.$el.html()`
- `id` in css
- `className` in css
- `tagName`
- `attributes`
- `events`
- `template`: `this.$el.html(template(data))`

events
- a hash
- an events object to map event types and callbacks 
- event name and optional CSS selector
- customized event
  - view.listenTo(this.collection, 'rerender', this.render)
  - items.trigger("rerender");

handlebars
- with block, no comments
- view.collection.toJSON(), pull attributes out



# Backbone Events
- on
- off
- listenTo `view.listenTo(model, 'change', view.render);`

# 11	Project: Completing the Backbone App


# 12	Project: Todo App Revisited


# 13	Summary

- [ ] go thru Live Session on Backbone Overview 
