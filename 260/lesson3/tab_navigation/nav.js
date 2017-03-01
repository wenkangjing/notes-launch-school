$("header a").on("click", function(e) {
  e.preventDefault();
  var $a = $(e.target),
      href = $a.attr('href');
  switchPage(href) ;
  history.pushState({ idx: href }, $a.text(), location.pathname + href);
});

$(window).on("popstate", function(e) {
  var state = e.originalEvent.state;
  switchPage(state === null ? "#page-1" : state.idx);
});

function switchPage(href) {
  href = href || "#page-1";
  $(".active").removeClass("active");
  $("nav a[href='" + href + "']").closest("li").addClass("active");
  $("article").hide().filter(href).show();
}

function getName(href) {
  return $("nav a[href='" + href + "']").text();
}

if (location.hash) {
  switchPage(location.hash);
}

switchPage("#page-1");