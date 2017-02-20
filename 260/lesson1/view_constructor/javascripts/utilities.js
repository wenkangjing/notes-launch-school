
(function() {
  // utility method on a given element
  var _ = function(element) {
    var u = {
      first: function () {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var black_list = Array.prototype.slice.call(arguments);
        return element.filter(function(current) {
          return black_list.indexOf(current) === -1;
        });
      },
      lastIndexOf: function(value) {
        var idx = -1;
        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === value) {
            idx = i;
            break;
          }
        }
        return idx;
      },
      sample: function(quantity) {
        var sample = [],
            copy = element.slice(0),
            get = function () {
              var idx = Math.floor(Math.random() * copy.length);
                  el = copy[idx];
                  copy.splice(idx, 1);
              return el;
            };

        if (quantity === undefined) {
          return get();
        }

        while (quantity > 0) {
          sample.push(get());
          quantity--;
        }

        return sample;
      },
      findWhere: function(props) {
        var match = undefined;

        element.some(function(obj) {
          if (Object.keys(props).every(function(prop) {
            return (prop in obj) && obj[prop] === props[prop];
          })) {
            match = obj;
            return true;
          }
        });
        return match;
      },
      where: function(props) {
        var matches = [];

        element.some(function(obj) {
          if (Object.keys(props).every(function(prop) {
            return (prop in obj) && obj[prop] === props[prop];
          })) {
            matches.push(obj);
          }
        });
        return matches;
      },
      pluck: function(prop) {
        var values = [];
        element.forEach(function(obj) {
          if(obj[prop]) {
            values.push(obj[prop]);
          }
        })
        return values;
      },
      keys: function() {
        var keys = [];
        for (var prop in element) {
          keys.push(prop);
        }
        return keys;
      },
      values: function() {
        var values = [];
        for (var prop in element) {
          values.push(element[prop]);
        }
        return values;
      },
      pick: function() {
        var result = {},
            names = [].slice.call(arguments);

        names.forEach(function(name) {
          if (!!element[name]) {
            result[name] = element[name];
          }
        });
        return result;
      },
      omit: function() {
        var result = {},
            names = [].slice.call(arguments);

        names.forEach(function(name) {
          if (!element[name]) {
            result[name] = element[name];
          }
        });
        return result;
      },
      has: function(prop) {
        return {}.hasOwnProperty.call(element, prop);
        //return (prop in element);
      },
    };

    ["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"].forEach(function(method) {
      u[method] = function() {
        _[method].call(u, element);
      } 
    });
    return u;
  } // end of _ function

  // utility method attached directly to _
  _.range = function(start, end) {
    var array = [];

    if (end === undefined) {
      end = start;
      start = 0;
    }

    for (var i = start; i < end; i++) {
      array.push(i);
    }
    return array;
  };

  // _.extend = function() {
  //   var args = [].slice.call(arguments),
  //       merge = function (target, source) {
  //         for (var prop in source) {
  //           target[prop] = source[prop];
  //         }
  //         return target;
  //       };

  //   for (var i = args.length - 1; i >= 1; i--) {
  //     merge(args[i - 1], args[i]);
  //   }
  //   return args[0];
  // };

  // recursive way
  _.extend = function() {
    var args = [].slice.call(arguments),
       old_obj = args.pop(), 
       new_obj = args[args.length - 1];

    for (var prop in old_obj) {
      new_obj[prop] = old_obj[prop];
    }

    return (args.length === 1) ? 
      new_obj:
      _.extend.apply(_, args);
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === Node.ELEMENT_NODE;
  };

  _.isArray  = Array.isArray || function(obj) {
    return  toString.call([]) === "[object Array]";
  };

  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'object' || type ===  'function';
  };

  _.isFunction = function(obj) {
    return typeof obj === 'function';
  };

  _.isBoolean = function(obj) {
    return toString.call(obj) === "[object Boolean]";
  };

  _.isString = function(obj) {
    return toString.call(obj) === "[object String]";
  };

  _.isNumber = function(obj) {
    return toString.call(obj) === "[object Number]";
  };

  window._ = _;
  
})(); // 



/*

Array methods to create:

first, return the first element in an array.
last, return the last element in an array.
without, return a new array that does not contain the value passed to it.
range, return an array of values starting at 0 when a single number is supplied. If two arguments are supplied, returns an array of values that start with the first argument and ends with the second value.
lastIndexOf, return the last index of the supplied value.
sample, return a single value from an array when no argument is supplied. Return an array of multiple, non-repeated elements when a quantity is supplied.



Object and object collection methods to create:

findWhere, return the first object with properties that match the supplied object. If no objects match all the supplied properties, undefined is returned.
where, return an array of all objects with properties that match the supplied object.
pluck, return an array of the values that match the supplied key from a collection of objects.
keys, return an array of the keys from an object.
values, return an array of the values from an object.
extend, takes two or more objects, taking the properties and values from the last argument and adding them to the argument before it. Object extensions occur recursively from last argument to first. The first argument ends up being modified to include all properties and values from the other objects passed in.
pick, return a new object with the passed in properties taken from the old object. Accepts one or more arguments.
omit, return a new object with any passed in properties omitted.
has, return true when the property passed in exists, false if it doesn't.


Utility methods, added directly on the _ object.

isElement, return true if argument is a DOM element.
isArray, return true if argument is an array.
isObject, return true if argument is an object or a function.
isFunction, return true if argument is a function.
isString, return true if argument is a string.
isNumber, return true if argument is a number. Also returns true for objects created with the Number constructor.
isBoolean, return true if argument is a boolean. Also returns true for objects created with the Boolean constructor.

*/
