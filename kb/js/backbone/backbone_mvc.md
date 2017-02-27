Backbone - client side MVC
===========================

# resources

https://addyosmani.com/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app

260 -  Lesson 2

# Summary

https://launchschool.com/lessons/b9b67674/assignments/b383a8e7

## Backbone basics
- Reasons for choosing Backbone
- Difference between a framework and a library
- Total file size and load time for Backbone vs. popular frameworks
- Including its dependencies, jQuery and Underscore
- Creating our own constructors by extending the Backbone constructors

## Ajax calls
- GET  /books/ .... collection.fetch();
- POST /books/ .... collection.create();
- GET  /books/1 ... model.fetch();
- PUT  /books/1 ... model.save();
- DEL  /books/1 ... model.destroy();

## Events

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


## Models
- Fetching model data from the server
- Populating model data locally
- **Always using `toJSON` to obtain a copy of the model's attributes**
- Common methods and properties
- `set` an attribute
- `get` an attribute
- `unset` an attribute
- `on` to bind events
- `initialize` called when a model is created
- `defaults` used to set initial values of attributes
- `urlRoot` to specify where the model obtains its data
- `fetch` to obtain the remote data
- `save` to send the model's data back to the server

## Collections
- Setting a model constructor `model`
- Populating the collection's `models` with data using both local data and fetched data
- **Always using `toJSON` to obtain a copy of the collection's models attributes**
- Common methods and properties
- `reset` to clear out the collection and feed in the new data
- `fetch` to obtain the remote collection of models
- `get` to get a model by its ID
- `set` to either create a new model or to update attributes on one or more existing models
- `initialize` called when a collection is created
- `on` to bind events
- `add` to create a new model
- `create` to both add a model and save it to the server
- `where` to filter out models using attribute values, `findWhere` returns the first
- `first` and `last` to get the first and last models in a collection
- `comparator` to change what attribute is used to `sort`
- `remove` a model or an array of models
- `pluck` to obtain an array of attribute values from the collection
- `parse` to change how the data model should be structured if different than the data returned by the server

## Views
- Passing a **model or collection** in automatically assigns a property to the view
- Entire view is built off of a parent element `el` a view property in string
- **View should `listenTo` and `trigger` events rather than access methods directly on models and collections**
- DOM events can be bound automatically by utilizing the events object
- Common methods and properties
- initialize to run any setup automatically when a view is created
- `template` to store a template function to be used to render the view
- `render` to define how to render the template
- `el` and `$el` to change the element used **as the parent**
- `events` object to automatically bind DOM events to the view upon creation
- `delegateEvents` to manually attach DOM events. 
- `remove` to remove the view and undelegate the events associated
- `listenTo` and `trigger` to send and receive messages between the view object and data structures


# Tips

### Model

`idAttribute: id`
- when you want  manage your id in client side rather than generated in server side when creation.

`last_id`
- create a clourse and make it IIFE to create a private scope


### Collection




### View


