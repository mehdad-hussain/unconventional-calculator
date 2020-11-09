alert("NICE GOING ! ما شاء الله");

const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("sub-btn");
const multiplyBtn = document.getElementById("mul-btn");
const divideBtn = document.getElementById("div-btn");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
const resetBtn = document.getElementById("reset-btn");
let currentResult = 0;
let calcDescription = 0;
const logEntries = [];

function outputResult(result, text) {
  // printing result
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function calculation(calculationType) {
  let operationType;
  const initialResult = currentResult;
  const enteredNumber = parseFloat(userInput.value);
  if (calculationType === "Addition") {
    currentResult += enteredNumber;
    operationType = "+";
  } else if (calculationType === "Subtraction") {
    currentResult -= enteredNumber;
    operationType = "-";
  } else if (calculationType === "Multiplication") {
    currentResult *= enteredNumber;
    operationType = "*";
  } else if (calculationType === "Division") {
    currentResult /= enteredNumber;
    operationType = "/";
  }
  outputLog(operationType, enteredNumber);
  logWithObject(calculationType, initialResult, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);
}

function outputLog(operatorSign, keyboardInput) {
  // generating calculation description
  calcDescription = ` ${calcDescription} ${operatorSign} ${keyboardInput}`;
}

function logWithObject(
  operationIdentifier,
  previousResult,
  cutInput,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: previousResult,
    currentInput: cutInput,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  alert(logEntry.operation);
  // console.log(logEntries[0]);
}

function addition() {
  calculation("Addition");
}

function subtract() {
  calculation("Subtraction");
}

function multiply() {
  calculation("Multiplication");
}

function divide() {
  calculation("Division");
}
function reset() {
  currentCalculationOutput.textContent = 0;
  currentResultOutput.textContent = 0;
  currentResult = 0;
  calcDescription = 0;
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply); // adding event listener to html button
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", reset);

/* function printName(i) {
  console.log("Hello Bangladesh!");
  if (i <= 10) {
    i = i + 1;
    printName(i);
  }
}

printName(1); */
