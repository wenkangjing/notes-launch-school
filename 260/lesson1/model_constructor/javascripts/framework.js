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

