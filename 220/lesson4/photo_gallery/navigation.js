$(function(){
  $('#thumbnail li').on('click', function(e){
    let $e = $(this);
    
    // return if reclick the active one
    if ($e.find('img').hasClass('active')) {
      return;
    }

    // change thumbnail border
    $e.parent().find('.active').removeClass('active');
    $e.find('img').addClass('active');

    // change example image
    let $example = $('#example img');

    $example.stop().fadeOut(300);
    $example.prop('src', $e.find('img').prop('src'));
    // $example.delay(300).fadeIn(300);
    $example.fadeIn(300);
  })
});


/*

// solution video walkthrough 
$(function() {
  var $slideshow = $("#slideshow"),
      $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest("li"),
        idx = $li.index();

    $slideshow.find("figure").stop().filter(":visible").fadeOut(300);
    $slideshow.find("figure").eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  });
});


*/