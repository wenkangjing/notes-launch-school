$(function() {
  // catch templates and data
  let templates = {},
      photos = [],
      current_idx = 0;

  catchTempaltes();
  reloadPhotos();

  function catchTempaltes() {
    // cache the compiled templates
    $('script[type="text/x-handlebars"]').each(function() {
      var $tmpl = $(this);
      templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
    });

    // register partial
    $("[data-type=partial]").each(function () {
      var $partial = $(this);
      Handlebars.registerPartial($partial.attr("id"), $partial.html());
    });
  }

  function reloadPhotos() {
    // get photos and render in success callback
    $.ajax({
      url: "/photos",
      success: function(json) {
        photos = json;
        renderPhotos();
        navigateTo(current_idx);
      }
    });
  }

  function renderPhotos() {
    $("#slides").append(templates.photos({photos: photos}));
  }

  function showPhoto(idx) {
    $("#slides").children().hide();
    $("#slides").children().eq(idx).show();
  }

  function renderPhotoInformation(idx) {
    $("section > header").children().remove();
    $("section > header").append(templates.photo_information(photos[idx]));
  }

  // get comments by photo id and render in success callback
  function getCommentsFor(idx) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + idx,
      success: function(comment_json) {
        $("#comments ul").children().remove();
        $("#comments ul").append(templates.comments({comments: comment_json}));
      }
    });
  }

  function navigateTo(idx) {
    showPhoto(idx);
    renderPhotoInformation(idx)
    getCommentsFor(photos[idx].id);
  }


  // User Interactions
  $("a.next").on("click", function(e) {
    e.preventDefault();
    let idx = getNext();
    navigateTo(idx);
  });

  $("a.prev").on("click", function(e) {
    e.preventDefault();
     let idx = getPrev();
     navigateTo(idx);
  });

  function getNext() {
    var length = photos.length;
    if (current_idx === length - 1) {
      current_idx = 0;
    } else {
      current_idx++;
    }
    return current_idx;
  }

  function getPrev() {
    var length = photos.length;
    if (current_idx === 0) {
      current_idx = length - 1;
    } else {
      current_idx--;
    }
    return current_idx;
  }
});