Promise
------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

https://promisesaplus.com/

Promise vs Callback
- A `promise` represents the **future result** of an asynchronous operation
- `promise` is more than callbacks
- `promise` syntactic sugar, chained, catch error in `.error()` and `.catch()`
- `callback` could be nested layer by layer
- `callback` hard to handle errors and exceptions

  ```js
  api().then(function(result){
      return api2();
  }).then(function(result2){
      return api3();
  }).then(function(result3){
      // do work
  }).catch(function(error) {
      //handle any error that may occur before this point
  }).then(function() {
      //do something whether there was an error or not
      //like hiding an spinner if you were performing an AJAX request.
  });
  ```

Promise is a `object`

async method returns a `promise` object to supply the value at some point in the future.
- states: `pending`, `fulfilled` with a value, `rejected` with a reason
- `.then()` `.catch()` returns a promise object, can be chained


`promise.then(onFulfilled, onRejected)`
- Both `onFulfilled` and `onRejected` are optional arguments:
- If `onFulfilled` is a function:
  - must be called exactly once **after promise is fulfilled**
  - `.value`
- If `onRejected` is a function,
  - must be called exactly once **after promise is rejected**
  - `.reason`

  
### async function call

[co](https://github.com/tj/co)

**yield a Promise**  in Generator Function

> 阮一峰老师在《ECMAScript 6 入门》一书中对于 Generator 函数自动执行的原理有一个精准的结论：“自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。”我们还是以 Promise 对象为例解释一下这句话：将通过 yield 返回的对象的 value 保持为一个 Promise 对象，执行之，即可拿到程序的执行权。然后通过 Promise.then 和 Promise.reject 方法中调用 generator 的 next 方法，可以交还程序执行权。如此达到自动执行 generator 函数的效果。
>
> 最后，感谢 co 这样的优秀项目作为开拓者，才有了后来的 async/await ，让 JavaScript 开发人员不再因为这门语言独特的单线程特性而深陷异步编程带来的困扰。