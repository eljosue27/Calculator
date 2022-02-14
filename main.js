let operand1 = null,
  operation = null,
  currentInput = "";
let screen = document.getElementById("result");

function handleNumber() {
  currentInput += this.value;
  screen.value = currentInput;
}

function handleDecimal() {
  currentInput += ".";
  screen.value = currentInput;
}
function handleOperation() {
  operation = this.value;
  operand1 = currentInput;
  currentInput = "";
  screen.value = 0;
}

function handleEquals() {
  screen.value = calculate(operand1, operation, currentInput);
  currentInput = " ";
  operation = null;
  operand1 = null;
}

function calculate(o1, op, o2) {
  switch (op) {
    case "+":
      return parseFloat(o1) + parseFloat(o2);
    case "-":
      return parseFloat(o1) - parseFloat(o2);
    case "*":
      return parseFloat(o1) * parseFloat(o2);
    case "/":
      return parseFloat(o1) / parseFloat(o2);
  }
}

function clear() {
  operand1 = null;
  operation = null;
  currentInput = "";
  screen.value = 0;
}

let numbers = document.getElementsByClassName("number");
let operations = document.getElementsByClassName("operator");

for (let i = 0; i < numbers.length; ++i) {
  numbers[i].addEventListener("click", handleNumber, false);
}
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", handleOperation, false);
}

document.getElementById("equals").addEventListener("click", handleEquals);
document.getElementById("decimal").addEventListener("click", handleDecimal);
document.getElementById("clear").addEventListener("click", clear);
