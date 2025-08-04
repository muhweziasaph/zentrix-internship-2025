// calculator.js

function add() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result = a + b;
  document.getElementById("result").innerText = "Result: " + result;
}

function subtract() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result = a - b;
  document.getElementById("result").innerText = "Result: " + result;
}

function multiply() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result = a * b;
  document.getElementById("result").innerText = "Result: " + result;
}

function divide() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  if (b === 0) {
    document.getElementById("result").innerText = "Result: Cannot divide by zero!";
  } else {
    let result = a / b;
    document.getElementById("result").innerText = "Result: " + result;
  }
}
