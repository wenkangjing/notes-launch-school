Lesson 3: Advanced Browser-based Javascript
================================================

# 1	Introduction


# 2	Exploring Global Properties and Functions with the Window Object
# 3	Exercises: Window Object

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

e.g.
inner href is `location.pathname + href`


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


# 4	Speeding Up Searches and Substitutions with Regular Expressions
# 5	Exercises: Regular Expressions


# 6	The Geolocation API
# 7	Project: Geolocated Google Map

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

precent encoding uri
- https://en.wikipedia.org/wiki/Percent-encoding

!	#	$	&	'	(	)	*	+	,	/	:	;	=	?	@	[	]
%21	%23	%24	%26	%27	%28	%29	%2A	%2B	%2C	%2F	%3A	%3B	%3D	%3F	%40	%5B	%5D


with unicode symbol
- triple curly brace
- `<h3>{{{temperature}}}</h3>`

owfond
- http://websygen.github.io/owfont
- fond for open weather apis

fontawesome
- http://fontawesome.io/

- [X] ~~*to float the weather card on top of map*~~

# 8	The History Object
# 9	Project: Manipulating History with Tabbed Navigation

https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate

`history`
- .length, 
- .back, .forward
- .go(integer) // o forward that number of states or a negative value to go back that number.
- `pushState replaceState` with (data, title, url)
- `popstate` event on window object

jQuery callback 
- `e.originalEvent.state;`

DOM callback 
- `e.state`

location.hash
- Is a DOMString containing a '#' followed by the fragment identifier of the URL.

# 10	Web Workers
# 11	Exercise: Web Workers

* [ ] go thru examples, skip shared workers
  - https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
  - https://www.html5rocks.com/en/tutorials/workers/basics/

Worker
- background worker thread
- running a given js file
- in another global context
- must obey the same-origin policy.

Safety
- spawns real OS-level threads

Data Transfer
- **Data passed between the main page and workers is copied, not shared**
- serialized (JSON.stringify) main -> worker
- de-serialized (eval or JSON.paser) worker -> main


in main thread
- .postMessage // post data 
- .onmessage(e) // callback when data received from worker
- .onerror(e) message, filename, lineno) // callback when error occurs in worker thread
- worker.terminate(); // force terminate 

```js
var worker = new Worker("worker.js");
worker.postMessage("balabal");
worker.onmessage = function(e) {
  console.log(e.data);
};

worker.onerror = function(e) {
  e.message; // 
  e.lineno; // lineno in worker.js
  e.filename; // worker file name, e.g. worker.js
};
```


in worker thread
- .onmessage // callback when received from main
- .postMessage // post result after processing data
- .close(); // close itself when done
```js
onmessage = function(e) {
  var workerResult = "result from worker: " + String(e.data);
  postMessage(workerResult);
}
```

`importScripts`


# 12	Project: Live Image Editing with Web Workers

- [ ] check brightness

# 13	Summary

