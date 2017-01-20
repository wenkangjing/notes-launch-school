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
    init: function() {
      this.setDate();
      this.cacheTemplate();
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

$(function() {
  let $form = $("form"),
      $table = $("#inventory"),
      $add = $("#add_item");

  function addItem() {
    inventory.collection.push(new_item);
  }

  function updateItem(item) {
    let index = inventory.collection.findIndex(function(current) {
      return item.id === current.id;
    });

    if (index !== -1) {
      inventory.collection[index].name = item.name;
      inventory.collection[index].stockNumber = item.stockNumber;
      inventory.collection[index].quantity = item.quantity;
    }
  }

  function deleteItem(id) {
    let index = inventory.collection.findIndex(function(current) {
      return id === current.id;
    });

    if (index !== -1) {
      inventory.collection.splice(index, 1);
    }
  }

  $add.on("click", function(e) {
    e.preventDefault();

    new_item = newItem();

    $table.append(inventory.template);
    $table.find(":last-child").find("input[name=item_id_ID]").data("id", new_item.id);

    addItem(new_item);
    console.table(inventory.collection);

    $table.off("blur", "input").on("blur", "input", function(e) {
      e.stopPropagation();

      let $e = $(this),
          $current_tr = $e.closest("tr"),
          item = {
            id: +$current_tr.find("input[name=item_id_ID]").data("id"),
            name: $current_tr.find("input[name=item_name_ID]").val(),
            stockNumber: $current_tr.find("input[name=item_stock_number_ID]").val(),
            quantity: $current_tr.find("input[name=item_quantity_ID]").val() | 1,
          };

      updateItem(item);
      console.table(inventory.collection);
    });

    $table.off("click", "a").on("click", "a", function(e) {
      e.preventDefault();
      e.stopPropagation();

      let $e = $(this),
          $current_tr = $e.closest("tr"),
          id = $current_tr.find("input[name=item_id_ID]").data("id");

      $current_tr.remove();

      deleteItem(id);
      console.table(inventory.collection);
    });
  });
});
