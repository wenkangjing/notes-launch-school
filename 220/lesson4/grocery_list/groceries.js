$(function() {
  $('form').on('submit', function (e) {
    e.preventDefault();
    
    let newItem = {
      name: $('#name').val(),
      quantity: $('#quantity').val(),
    };

    console.log(newItem);

    
    $('groceries').
  });
});