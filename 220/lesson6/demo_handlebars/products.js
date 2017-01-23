var products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79,
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55,
}, {
  name: 'Orange',
  quantity: 10,
  price: 1.23,
  on_sale: true,
}];


/*
Without Handlebars
- nested html element
- logic based on data

*/
$(function(){
  var products_html = [];
  products.forEach(function(item) {
    var html = '<li><h3>' + item.name + '</h3><dl><dt>Quantity:</dt><dd>' + item.quantity + '</dd><dt>Price:</dt><dd>$' + item.price;
    if (item.on_sale) { // logic based on data
      html += ' <strong>SALE!</strong>';
    }

    html += '</dd></dl></li>';
    products_html.push(html);
  });
  $("#products").html(products_html.join(''));
});


/*

With Handlebars
- 

*/
$(function(){
  // Compile both templates for use later
  var productsList = Handlebars.compile($('#productsList').html());
  var productTemplate = Handlebars.compile($('#productTemplate').html());

  // Also register the product template as a partial
  Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

  $("#list").html(productsList({ items: products }));

  // Create a new product
  var newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29,
  };

  // Render the new product with the product template
  $("#list").append(productTemplate(newProduct));

  // without {{#each items}}
  // var products_html = [];
  // products.forEach(function(item) {
  //   products_html.push(productTemplate(item));
  // });

  // $("#list").html(products_html.join(''));

});