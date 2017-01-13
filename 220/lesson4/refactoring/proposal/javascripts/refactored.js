$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next().show();
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").hide();
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    ($(this).next(".accordion").toggleClass("opened"));
  });

  $("form").on("submit", function(e) {
    e.preventDefault();

    var cc_number = $(this).find("[type=text]").val();
    var isValid = cardValidation(cc_number);

    $(this).find(".success").toggle(isValid);
    $(this).find(".error").toggle(!isValid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");

  
    var stones = {
      January: "garnet",
      February:"amethyst",
      March:"aquamarine or bloodstone",
      April:"diamond",
      May:"emerald",
      June:"pearl, moonstone, or alexandrite",
      July:"ruby",
      August:"peridot",
      September:"sapphire",
      October:"opal or tourmaline",
      November:"topaz or citrine",
      December:"turquoise, zircon, or tanzanite",
    };

    $stone.text("Your birthstone is " + stones[month]);
  });
});

function cardValidation(ccNumber) {
  if (!ccNumber) {
    return false;
  }
  
  let odd_total = 0,
      even_total = 0;

  ccNumber = ccNumber.split("").reverse();
  for (var i = 0, len = ccNumber.length; i < len; i++) {
    if (i % 2 == 1) {
      ccNumber[i] = (+ccNumber[i] * 2) + "";
      if (ccNumber[i].length > 1) {
        ccNumber[i] = +ccNumber[i][0] + +ccNumber[i][1];
      }
      else {
        ccNumber[i] = +ccNumber[i];
      }
      odd_total += ccNumber[i];
    }
    else {
      even_total += +ccNumber[i];
    }
  }
  return (odd_total + even_total) % 10 == 0;
}