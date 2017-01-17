$(function(){
  let $blinds = $("div[id^=blind]"),
      delay = 1500,
      speed = 250;

  function playAnimation () {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      $blind.delay(delay * i + speed).animate({
        top: "+=" + $(this).height(),
        height: 0
      }, speed);
    });
  }

  
  $('#replay').on('click', function (e) {
    e.preventDefault();
    $blinds.finish(); // add finish() here
    $blinds.removeAttr('style');
    playAnimation();
  });

  playAnimation();
});