onmessage = function(e) {
  console.warn("worker",'Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.warn("worker",'Posting message back to main script');
  undefined.abc;
  postMessage(workerResult);
}