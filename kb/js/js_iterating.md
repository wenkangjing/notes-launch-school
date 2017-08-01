Iterators and Generators
---------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators


### Interators

provide a `next()` method, returns 2 properties: `done`(true/false) and `value`(next element). 
- To to express `for( i = 0;i < n; i++> )`
- create a closure to on a given `array` store `index`


```js
function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

### Generators
- for async operation
- `function*` is a generator function, `yield` the next object
- **it will return a generator object called an iterator**
- **not execute the body of the function like a regular function**

```js
function* idMaker() {
  var index = 0;
  while (index < 3) // stop at
    yield index++; // move next
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
```

```js
function* makeIterator() {
  
}

```

**yeild**
- return each element one at a time

**return**
- return a collection

```cs
public class PowersOf2
{
    static void Main()
    {
        // Display powers of 2 up to the exponent of 8:
        foreach (int i in Power(2, 8))
        {
            Console.Write("{0} ", i);
        }
    }

    public static System.Collections.Generic.IEnumerable<int> Power(int number, int exponent)
    {
        int result = 1;

        for (int i = 0; i < exponent; i++)
        {
            result = result * number;
            yield return result;
        }
    }

    // Output: 2 4 8 16 32 64 128 256
}
```



#### Symbol.iterator
- array, string, map, set

```js
> let arr = ['a', 'b', 'c'];
> let iter = arr[Symbol.iterator](); // create a iterator on array

> iter.next()
{ value: 'a', done: false }
> iter.next()
{ value: 'b', done: false }
> iter.next()
{ value: 'c', done: false }
> iter.next()
{ value: undefined, done: true }

```

#### user defined iterables

```js
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
```


http://thejsguy.com/2016/10/15/a-practical-introduction-to-es6-generator-functions.html
 
what is generator functions? 
- we can use generators to manage flow control
- generators allow us to pause execution, we can easily cancel asynchronous operations
- Generators also allow us to turn asynchronous code into synchronous-looking code.



#### Generator in Depth
http://2ality.com/2015/02/es6-iteration.html
http://2ality.com/2015/03/es6-generators.html

> functions that can be paused and resumed

> We used the **yield** keyword to pause the generator function twice and send values to the caller. 

- Implementing iterables
- Blocking on asynchronous function calls


