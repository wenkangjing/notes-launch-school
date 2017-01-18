$(function(){
  let $categories = $('input[type=checkbox]');


 $categories.on('click', function(e) {
   
   let $e = $(this);
   let category = $e.parent().text();
   console.log($e.prop("checked"), );
  
    //$('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });
})
