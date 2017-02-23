// catch all Handlebar tempaltes 
(function() {
  var templates = {};
  $("[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    templates[$template.attr("id")] =  Handlebars.compile($template.html());
  });
})();