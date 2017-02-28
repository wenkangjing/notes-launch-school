var map = {
  width: 600,
  height: 420,
  zoom: 13,
  buildURL: function() {
    var base = "https://maps.googleapis.com/maps/api/staticmap",
        coords =  this.position.coords.latitude + "," + this.position.coords.longitude;
    base += "?zoom=" + this.zoom;
    base += "&size=" + this.width + "x" + this.height;
    base += "&center=" + coords;
    base += "&markers=" + "color:yellow|label:A|" + coords;
    return encodeURI(base);
  },
  buildImage: function() {
    var $img = $("<img/>", {
      width: this.width,
      height: this.height,
      src: this.buildURL()
    });
    $("#map p").html($img);
  },
  build: function(position) {
    console.log(position);
    this.position = position;
    this.buildImage();
    weather.build();
  }
};

var weather = {
  endpoint: "http://api.openweathermap.org/data/2.5/weather", 
  appId: "ec11a0ebf0aa8c01d6f31a107492a4af",
  $el: $("#weather"),
  get: function() {
    var dfd = $.ajax({
      method: "get",
      url: this.endpoint,
      dataType: "json",
      data: {
        lat: map.position.coords.latitude,
        lon: map.position.coords.longitude,
        APPID: this.appId,
      }
    });
    dfd.done(this.render.bind(this));
  },
  processData: function(json) {
    return {
      city: json.name,
      temperature: json.main.temp  + "&deg;F",
      icon: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png",
      cod: json.cod,
      description: json.weather[0].description,
    };
  },
  render: function(json) {
    console.log(json);
    this.$el.html(this.template(this.processData(json)));

  },
  build: function() {
    this.template = Handlebars.compile($("#weather_card").html());
    this.get();
  }
}

function K2F(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
};

function onError(position_error) {
  console.warn(position_error);
}

navigator.geolocation.getCurrentPosition(map.build.bind(map), function(position_error) {
  console.warn(position_error);
});
