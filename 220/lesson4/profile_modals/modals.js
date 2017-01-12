$(function(){
  $("#team li > a").off('click').on('click', function (e) {
    e.preventDefault();

    let $e = $(this);
    $e.siblings('.modal').css('top',String ($(document).scrollTop() + 30) + 'px');
    $e.nextAll('div').fadeIn(400);
  });

  $('#team .modal-layer, a.close').on('click', function (e) {
      e.preventDefault();
      $('.modal, .modal-layer').filter(':visible').fadeOut(400);
    });  
});