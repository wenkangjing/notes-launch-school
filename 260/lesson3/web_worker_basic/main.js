var myWorker = new Worker('my_task.js');

myWorker.onmessage = function(oEvent) {
  console.log('worker -> main: ' + oEvent.data);
};

myWorker.onerror = function(e) {
  console.error("error occurs in worker thread", e);
};

myWorker.postMessage('ali');