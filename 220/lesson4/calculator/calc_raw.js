document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calc").addEventListener('click', function (e) {
      e.preventDefault();
      
      let left = parseFloat(document.getElementById("left").value, 10);
      let right = parseFloat(document.getElementById("right").value, 10);

      let result = 0;
      let op = document.getElementById("operator").value;

      if (op === '+') {
        result = left + right;
      } else if (op === '-') {
        result = left - right;
      } else if (op === '*') {
        result = left * right;
      } else if (op === '/') {
        result = left / right;
      }

      document.getElementById("output").textContent = result;
    });
  });