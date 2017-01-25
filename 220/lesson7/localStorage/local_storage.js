$(function () {
  var tabs = {
    tab1: "tab1tab1tab1tab1tab1tab1tab1tab1tab1",
    tab2: "tab2",
    tab3: "tab3",
  };

  renderTab(localStorage.getItem('tab'));
  renderBgColor(localStorage.getItem('bgcolor'));

  $("main nav").on("click", "a", function(e) {
    e.preventDefault();

    var $e = $(e.target),
        name = $e.text().toLowerCase();

    renderTab(name);
    localStorage.setItem('tab', name);
  })

  $("form").on('click', 'input[type=radio]', function(e) {
    var $f = $("form"),
        $e = $(e.target),
        bgcolor = $e.val();

    renderBgColor(bgcolor);
    localStorage.setItem('bgcolor', bgcolor);
  });

  function renderTab(name) {
    var $anchors = $("main nav a"),
        $active = $anchors.filter(function() {
          return $(this).text().toLowerCase() === name;
        }),
        $p = $("#tabs p");

    $anchors.removeClass('active');
    $active.addClass('active');
    $p.text(tabs[name]);
  }

  function renderBgColor(color) {
    $("body").css({
      background: color
    });

    $("form input[type=radio]").filter(function() {
      return $(this).val() === color;
    }).prop('checked', true);
  }
});