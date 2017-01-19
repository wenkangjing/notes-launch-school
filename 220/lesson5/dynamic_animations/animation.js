$(function(){
  let $canvas = $('#canvas'),
      $form = $("form"),
      $start = $("#start"),
      $stop = $("#stop");

  function getFormObject($f) {
    let o = {};
    $f.serializeArray().forEach(function(input){
      o[input.name] = input.value;
    });
    return o;
  }

  function createElement(values) {
    let $element = $('<div class="shape"></div>').addClass(values.shape);
    
    // save ending point in data
    $element.data('start_x', values.start_x | 0);
    $element.data('start_y', values.start_y | 0);
    $element.data('end_x', values.end_x | 0);
    $element.data('end_y', values.end_y | 0);
    
    let data = $element.data();
    console.log(data);

    resetElement($element);

    $canvas.append($element);
  }

  function resetElement($e) {
    let data = $e.data();

    $e.css({
      top: +data.start_x,
      left: +data.start_y,
    });
  }

  function playAnimations() {
    $canvas.children().each(function(index){
      let $e = $(this),
          data = $(this).data();
      
     resetElement($e);

      // animate to ending point
      $e.animate({
        top: +data.end_x,
        left: +data.end_y
      }, 1000);
    });
  }

  function stopAnimations() {
    $canvas.children().stop();
  }

  $form.on("submit", function (e) {
    e.preventDefault();

    let $form = $(this);
    let obj = getFormObject($form);

    createElement(obj);
  });

  $start.on("click", function(e){
    e.preventDefault();

    playAnimations();
  });

  $stop.on("click", function(e){
    e.preventDefault();
    stopAnimations();
  });
}); 