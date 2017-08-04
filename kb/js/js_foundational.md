Memory Management
--------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

https://www.ibm.com/developerworks/web/library/wa-memleak/

### Mark-and-sweep algorithm

This algorithm reduces the definition of "an object is not needed anymore" to "an object is unreachable".

This algorithm assumes the knowledge of a set of objects called roots (In JavaScript, the root is the global object). Periodically, the garbage-collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.

>As of 2012, all modern browsers ship a mark-and-sweep garbage-collector


### memory leak

https://www.ibm.com/developerworks/web/library/wa-memleak/

A circular reference resulting in a memory leak

```html
  <html>
    <body>
    <script type="text/javascript">
    document.write("Circular references between JavaScript and DOM!");
    var obj;
    window.onload = function(){
    obj=document.getElementById("DivElement");
            document.getElementById("DivElement").expandoProperty=obj;
            obj.bigString=new Array(1000).join(new Array(2000).join("XXXXX"));
            };
    </script>
    <div id="DivElement">Div Element</div>
    </body>
  </html>

  <html>
    <head>
      <script type="text/javascript">
        document.write("Circular references between JavaScript and DOM!");
        function myFunction(element)
        {
            this.elementReference = element;
            // This code forms a circular reference here
            //by DOM-->JS-->DOM
            element.expandoProperty = this;
        }
        function Leak() {
            //This code will leak
            new myFunction(document.getElementById("myDiv"));
        }
      </script>
    </head>
    <body onload="Leak()">
      <div id="myDiv"></div>
    </body>
  </html>
```

> As you can see in the above listing, the JavaScript object obj has a reference to the DOM object represented by DivElement. The DOM object, in turn, has a reference to the JavaScript object through the expandoProperty. A circular reference exists between the JavaScript object and the DOM object. Because **DOM objects are managed through reference counting**, neither object will ever be destroyed.

### Avoid memory leak



Event Loop
---------------------

http://latentflip.com/loupe/

```js
// 1. register DOM cb -> c++
$.on('button', 'click', function onClick() {
    // 5. register cb -> c++
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});
// 2. print
console.log("Hi!");
// 3. register cb -> c++
setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);
// 4. print
console.log("Welcome to loupe.");
/*
Output:
Hi!
Welcome to loupe.
Click the button!
You clicked the button!
*/
```

### walk through
- 1. register `onClick` to c++
- 2. pirnt hi
- 3. register `timeout`  to c++ (fire timer)
- 4. print welcome

- 5s later, c++ add `timeout()` to *Queue*
- *Event loop* pick `timeout()` and execute it
- pirnt

- user click button
- c++ add `onClick()` to *Queue*
- *Event loop* pick `onClick()` from the *Queue* and execute it
- in `onClick`, register `timer()` to c++ (fire timer)

- 2s later, c++ add `timer()` to *Queue*
- *Event loop* pick `timer()` from the *Queue* and execute it
- pirnt   

