$(function () { 
  $("#calc").on('click', function (e) {
    e.preventDefault();
    
    let left = parseFloat($("#left").val(), 10);
    let right = parseFloat($("#right").val(), 10);
    let op = $("#operator").val();

    let result = 0;
    if (op === '+') {
      result = left + right;
    } else if (op === '-') {
      result = left - right;
    } else if (op === '*') {
      result = left * right;
    } else if (op === '/') {
      result = left / right;
    }

    $("#output").text(result);

  });
});