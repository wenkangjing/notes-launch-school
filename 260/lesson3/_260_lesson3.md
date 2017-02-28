Lesson 3: Advanced Browser-based Javascript
================================================

- 1	Introduction


- 2	Exploring Global Properties and Functions with the Window Object
- 3	Exercises: Window Object

https://developer.mozilla.org/en-US/docs/Web/API/Window

DOM node with id ~  object property **BAD**

setTimeout/setInterval

document 

navigator

history
- window.history.back() or window.history.go(-1);


location
- window.location.reload(); // reload
- window.location = "http://www.google.com"; //  new path
- location.search
- properties
  - hostname: root url
  - pathname: path
  - href: host + path
  - origin
  - protocle: file: http: https:
  - search

```js
// Obtain the search string from the URL at https://www.google.com/finance?q=NASDAQ%3AAAPL and pull out the stock symbol ("AAPL").
window.location.search.replace(/^.+%3A/, "");
// Or
window.location.search.match(/%3A(.+)$/)[1];
```


dimention 
- https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx

- document
  - document.documentElement.clientWidth
  - document.documentElement.clientHeight
- viewport
  - window.innerWidth
  - window.innerHeight
- screen  
  - window.screen.height
  - window.screen.width


```js
var unused_dimensions = {
  width: window.screen.width - document.body.clientWidth,
  height: window.screen.height - document.body.clientHeight
};
```

scroll
  - window.scroll(0, 600)
  - scrollHeight

```js
(function() {
  var duration = 500,
      framerate = 8,
      browser_height = document.body.clientHeight,
      height = document.body.scrollHeight,
      distance_per_call = height / (duration / framerate);

  var scrollPage = function() {
    window.scrollTo(0, window.scrollY + distance_per_call);
    if (window.scrollY + browser_height < height) {
      setTimeout(scrollPage, framerate);
    }
  };
  scrollPage();
})();
```

object to query string
- `{ foo: "bar", baz: "quux" }` =>  `?foo=bar&baz=quux`

```js
var params = {
  tab: 4,
  category: "Javascript",
  comment: "In vel erat non felis congue posuere in non velit. Etiam venenatis tincidunt metus et feugiat. Morbi vehicula malesuada nulla vel&oops= faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris faucibus efficitur diam, in pellentesque urna consequat at."
};

var params_string = "?";
for (var property in params) {
  params_string += property + "=" + window.encodeURIComponent(params[property]) + "&";
}
params_string = params_string.replace(/&$/, "");
```


- 4	Speeding Up Searches and Substitutions with Regular Expressions
- 5	Exercises: Regular Expressions


- 6	The Geolocation API
- 7	Project: Geolocated Google Map

window.navigator.geolocation

```js
// get normal geo location
navigator.geolocation.getCurrentPosition(
  function(position) { // success cb
    console.log(position);
  }, function(err) { // error cb
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }, { // options
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
);

{
  coords: {
    accuracy: 72,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 40.215474,
    longitude: -100.6130937,
    speed: null
  },
  timestamp: 1432748526470
}  
```

```js
// high accurate
function onLocationSuccess(position) {
  console.log(position);
}

function onLocationError(position_error) {
  console.warn(position_error);
}

navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, {
  enableHighAccuracy: true,
  timeout: 30000
});
```

```js
// watch position -  called every time the position changes
function onSuccess(position) {
  console.log(position);
}

function onError(error) {
  console.warn(position_error);
}

var watch_id = navigator.geolocation.watchPosition(onSuccess, onError);

// Application settings change
navigator.geolocation.clearWatch(watch_id);
```


- 8	The History Object
- 9	Project: Manipulating History with Tabbed Navigation


- 10	Web Workers
- 11	Exercise: Web Workers


- 12	Project: Live Image Editing with Web Workers


- 13	Summary

