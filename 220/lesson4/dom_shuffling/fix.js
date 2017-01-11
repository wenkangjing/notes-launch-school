$(function(){
   let $body = $('body'),
       $header = $body.children('header'),
       $main =  $body.children('main'),
       $footer = $body.children('footer'),
       $site = $main.children('h1');

  // fix styles
  // $('body *').css({
  //   backgroundColor: '#c0f0c0',
  //   boxSizing: "border-box",
  // });

  // fix header position
  $header.prepend($site);
  $main.before($header);

  // move figure to article
  let $figures = $main.find('figure');
  $figures.appendTo('article')
  
  // swap img 
  $imgA = $figures.eq(0).find("img");
  $imgB = $figures.eq(1).find("img");

  $imgA.insertBefore($figures.eq(1).find('figcaption'));
  $imgB.insertBefore($figures.eq(0).find('figcaption'));
});


 $(window).load(function (){

 });


/*

$(function() {
  (function fixHeader() {
    var $header = $("body > header");

    $header.prependTo(document.body);
    $("main > h1").prependTo($header);
  })();

  (function fixFigures() {
    var $figures = $("figure"),
        $img = $figures.eq(0).find("img").remove();

    $figures.appendTo("article");
    $figures.find("img").insertBefore($figures.eq(0).find("figcaption"));
    $figures.eq(-1).find("figcaption").before($img);
  })();
});

*/