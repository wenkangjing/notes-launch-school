Promise
------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

https://promisesaplus.com/

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

