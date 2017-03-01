//postMessage("I\'m working before postMessage(\'ali\').", []);

onmessage = function(oEvent) {
  console.log("main -> worker", oEvent.data);
  postMessage('Hi ' + oEvent.data);
};