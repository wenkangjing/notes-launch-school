function ModelConstructor(opts) {
  var id_count = 0;

  function Model(attrs) {
    id_count++;
    this.attributes = attrs || {};
    this.id = id_count;
    this.attributes.id = id_count;

    if (opts && opts.change && _.isFunction(opts.change)) {
      this.__events.push(opts.change);
    }
  };

  Model.prototype = {
    __events: [],
    set: function(name, value) {
      this.attributes[name] = value;
      this.triggerChange();
    },
    get: function(name) {
      return this.attributes[name];
    },
    remove: function(key) {
      delete this.attributes[key];
      this.triggerChange();
    },
    triggerChange: function() {
      this.__events.forEach(function(cb) {
        cb();
      });
    },
    addCallback: function(cb) {
      this.__events.push(cb);
    },
  };
 
  _.extend(Model.prototype, opts);

  return Model;
}

function CollectionConstructor(opts) {
  function Collection(model_constructor) {
    this.model = model_constructor;
    this.models = [];
  };

  Collection.prototype = {
    reset: function() {
      this.models = [];
    },
    add: function(model) {
      var old_m = _(this.models).findWhere({ id: model.id }),
          new_m;

      if (old_m) { return old_m; }

      new_m = new this.model(model);
      this.models.push(new_m);

      return new_m;
    },
    remove: function(model) {
      model = _.isNumber(model) ? { id: model } : model;

      var m = _(this.models).findWhere(model);

      if (!m) { return; }

      this.models = this.models.filter(function(existing_m) {
        return existing_m.attributes.id !== m.id;
      });
    },
    set: function(array) {
      this.models = [];
      array.forEach(this.add.bind(this));
      // array.forEach(function(m) {
      //   this.add(m);
      // }, this);
    },
    get: function(id) {
      return _(this.models).findWhere({id: id });
    },
  };

  _.extend(Collection.prototype, opts);
  return Collection;
};