$(function() {
  // catch templates and data
  let templates = {},
      photos = [];

  $('script[type="text/x-handlebars"]').each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
  });

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      console.log(photos);
    }
  });

});