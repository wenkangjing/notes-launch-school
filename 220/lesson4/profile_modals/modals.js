$(function(){
  $("#team ul a:not('.close')").on('click', function (e) {
    e.preventDefault();
    
    $('#team .modal').css('display', 'block');
    $('#team .modal-layer').css('display', 'block');
    console.log($(this));
  });

  $("#team .close").on('click', function (e) {
    e.preventDefault();
    
    $('#team .modal').css('display', 'none');
    $('#team .modal-layer').css('display', 'none');
    
    console.log($(this));
  });  
});