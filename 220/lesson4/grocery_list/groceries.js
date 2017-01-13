$(function() {

  $('form').on('submit', function (e) {
    e.preventDefault();
    let $form = $(this),
        $name = $form.find('#name'),
        $quantity = $form.find('#quantity'),
        $groceries = $('#groceries');

    // get form value
    let newItem = {
      name: $name.val(),
      quantity: $quantity.val() || 1,
    };

    // compose list item
    $groceries.append("<li>" + newItem.quantity + " " + newItem.name  + "</li>");

    // reset form value
    // $name.val('');
    // $quantity.val('');
    $form.trigger('reset');
    $form[0].reset();
  });

  // DevTools 
  let $test = $(document).find('#name');
  console.log($test.get(0));
  console.dir($test.get(0));

  let table = [{a:'A', b:'B'}, {a:'1', b:'2'}];
  console.log(table);
  console.dir(table);
  console.table(table);
});


