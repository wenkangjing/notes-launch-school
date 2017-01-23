/*

We defined inventory as a global variable, and used an IIFE to assign it to an object that contains all the app logic. The advantage of exposing inventory to the global namespace is that we can inspect the inventory variable in the console to check its state, which we won't be able to do if we hide the inventory inside jQuery's document ready callback function: 

The purpose of the IIFE, together with the global inventory is to say that inventory is the only variable that can be observed from the outside, and any other variables declared in this app should be private and not leaked to the global namespace.


*/
var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],

    setDate: function() {
      let now = new Date();
      $("#order_date").text(now.toUTCString());
    },
    cacheTemplate: function() {
      // compile template into a function
      let template  = $("#inventory_item").html();
      this.template = Handlebars.compile(template);
    },
    add: function() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stockNumber: "",
        quantity: 1
      };
      this.collection.push(item);
      return item;
    },
    get: function(id) {
      let found_item;
      inventory.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      })
      return found_item;
    },
    remove: function (idx) {
      idx = +idx;
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    update: function($item) {
      let id = this.findId($item);
          item = this.get(id);
      item.name = $item.find("input[name^='item_name']").val();
      item.stockNumber = $item.find("input[name^='item_stock_number']").val();
      item.quantity = $item.find("input[name^='item_quantity']").val();
    },
    findParent: function(e) {
      return $(e.target).closest("tr");
    },
    findId: function($item) {
      return +$item.find("input[type=hidden]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      let item = this.add(),
          $item = $(this.template(item));
      console.log($item.html());
      $("#inventory").append($item);
    },
    deleteItem: function(e) {
      e.preventDefault();
      let $item = this.findParent(e).remove();
      this.remove(this.findId($item));
    },
    updateItem: function(e) {
      e.preventDefault();
      let $item = this.findParent(e);
      this.update($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this));
      $("#inventory").on("click", "a.delete", this.deleteItem.bind(this));
      $("#inventory").on("blur", "input", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$(inventory.init.bind(inventory));
