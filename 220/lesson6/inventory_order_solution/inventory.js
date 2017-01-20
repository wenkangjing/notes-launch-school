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
      let $template = $("#inventory_item").remove(); // still cache
      this.template = $template.text(); // add a new property to this
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
    remove: function (idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== inx;
      });
    },
    newItem: function(e) {
      e.preventDefault();
      let item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));
      
      $("#inventory").append($item);
      console.log($item.html());
      let $item = $(e.target).closest("tr").remove();

      this.remove($item.find("input[type=hidden]").val());
    },
    deleteItem: function(e) {
      e.preventDefault();

    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this));
      $("#inventory").on("click", "a.remove", this.deleteItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

function newItem() {
  let item = {
    id: inventory.lastId++,
    name: "",
    stockNumber: "",
    quantity: 1,
  };
  return item;
}

$(inventory.init.bind(inventory));
