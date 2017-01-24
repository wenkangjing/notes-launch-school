$(function() {
  // catch templates and data
  let templates = {},
      photos = [];

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

  // get photos and render in success callback
  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      renderPhotos();
      slideshow.init();
    }
  });

  var slideshow = {
    $el: $("#slideshow"),
    prevSlide: function(e) {
      e.preventDefault();

      var $current = this.$el.find("figure:visible"),
          $prev = $current.prev("figure");
      if (!$prev.length) {
        $prev = this.$el.find("figure").last();
      }
      $current.fadeOut(500);
      $prev.delay(500).fadeIn(500);

      this.renderPhotoContent($prev.data('id'));
    },
    nextSlide: function (e) {
      e.preventDefault();

      var $current = this.$el.find("figure:visible"),
          $next = $current.next("figure");
      if (!$next.length) {
        $next = this.$el.find("figure").first();
      }
      $current.fadeOut(500);
      $next.delay(500).fadeIn(500);

      this.renderPhotoContent($next.data('id'));
    },
    renderPhotoContent: function(id) {
      renderPhotoInformation(id);
      getCommentsFor(id);
    },
    bind: function() {
      this.$el.find("a.prev").on("click", this.prevSlide.bind(this));
      this.$el.find("a.next").on("click", this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
      this.renderPhotoContent(photos[0].id);
    }
  }

  function renderPhotos() {
    $("#slides").append(templates.photos({photos: photos}));
  }

  function renderPhotoInformation(id) {
    $("section > header").children().remove();
    var photo = photos.filter(function(item) {
      return item.id === id;
    });
    $("section > header").append(templates.photo_information(photo));
  }

  // get comments by photo id and render in success callback
  function getCommentsFor(id) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + id,
      success: function(comment_json) {
        $("#comments ul").children().remove();
        $("#comments ul").append(templates.comments({comments: comment_json}));
      }
    });
  }


});