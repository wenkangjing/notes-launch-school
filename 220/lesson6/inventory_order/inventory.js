/*

We defined inventory as a global variable, and used an IIFE to assign it to an object that contains all the app logic. The advantage of exposing inventory to the global namespace is that we can inspect the inventory variable in the console to check its state, which we won't be able to do if we hide the inventory inside jQuery's document ready callback function: 

The purpose of the IIFE, together with the global inventory is to say that inventory is the only variable that can be observed from the outside, and any other variables declared in this app should be private and not leaked to the global namespace.


*/
var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      let now = new Date();
      $("#order_date").text(now.toUTCString());
    },
    cacheTemplate: function() {
      let $template = $("#inventory_item").remove(); // still cache
      this.template = $template.text(); // add a new property to this
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
    }
  };
})();

$(inventory.init.bind(inventory));

$(function() {
  let item = {
    id: 0,
    name: "",
    stockNumber: "",
    quantity: 1,
  };

  $("#add_item").on("click", function(e) {
    e.preventDefault();

    let $table = $("#inventory");
    $table.append(inventory.template);

    item.id++;
    inventory.collection.push(item)
  });

  $("input[name=item_name_ID]").blur(function(e) {
    console.log($(this).val());
  });

  $("input[item_stock_number_ID]").blur(function(e) {
    console.log($(this).val());
  });

  $("input[item_quantity_ID]").blur(function(e) {
    console.log($(this).val());
  });  
});
