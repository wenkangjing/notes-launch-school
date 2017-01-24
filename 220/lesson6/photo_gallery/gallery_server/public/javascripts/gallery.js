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


  // like/favorite
  $("section > header").on('click', '.actions a.button',function(e) {
    e.preventDefault();
    var $e = $(e.target);

    $.ajax({
      method: "POST",
      url: $e.attr("href"),
      data: "photo_id=" + $e.data('id'),
      success: function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        });
      }
    });
  });

  // add comment
  $("form").on("submit", function(e) {
    e.preventDefault();
    var $form = $(this);

    $.ajax({
      method: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize(),
      success: function(json) {
        $("#comments ul").append(templates.comment(json));
        $form.trigger("reset");
      },
    });
  });

  var slideshow = {
    $el: $("#slideshow"),
    duration: 500,
    current: function() {
      return +this.$el.find("figure.visible").data("id");
    },
    prevSlide: function(e) {
      e.preventDefault();

      var $current = this.$el.find("figure:visible"),
          $prev = $current.prev("figure");
      if (!$prev.length) {
        $prev = this.$el.find("figure").last();
      }
      $current.fadeOut(this.duration);
      $prev.delay(this.duration).fadeIn(this.duration);

      this.renderPhotoContent($prev.data('id'));
    },
    nextSlide: function (e) {
      e.preventDefault();

      var $current = this.$el.find("figure:visible"),
          $next = $current.next("figure");
      if (!$next.length) {
        $next = this.$el.find("figure").first();
      }
      $current.fadeOut(this.duration);
      $next.delay(this.duration).fadeIn(this.duration);

      this.renderPhotoContent($next.data('id'));
    },
    renderPhotoContent: function(id) {
      $("[name=photo_id]").val(id);
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
  } // end of slideshow

  function renderPhotos() {
    $("#slides").append(templates.photos({photos: photos}));
  }

  function renderPhotoInformation(id) {
    var $photo_info = $("section > header");
        photo = photos.filter(function(item) {
          return item.id === id;
        })[0];
    $photo_info.children().remove();
    $photo_info.append(templates.photo_information(photo));
  }

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