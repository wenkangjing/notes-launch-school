$("header a").on("click", function(e) {
  e.preventDefault();
  var $a = $(e.target),
      href = $a.attr('href');
  switchPage(href) ;
  history.pushState({ idx: href }, $a.text(), location.pathname + href);
});

$(window).on("popstate", function(e) {
  var state = e.originalEvent.state;

  switchPage(state === null ? "#page_1" : state.idx);
});

function switchPage(idx) {
  $(".active").removeClass("active");
  $("nav a[href='" + idx + "']").closest("li").addClass("active");
  $("article").hide().filter(idx).show();
}

switchPage("#page-1");