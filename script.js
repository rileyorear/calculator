const ACButton = document.querySelector('#AC');
const CButton = document.querySelector('#C');
const modulosButton = document.querySelector('#modulos');
const divisionButton = document.querySelector('#division');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const additionButton = document.querySelector('#addition');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const multiplyButton = document.querySelector('#multiply');
const zeroButton = document.querySelector('#zero');
const decimalButton = document.querySelector('#equals');
const resultScreen = document.querySelector('.result');
const resultScreenHistory = document.querySelector('.resultHistory');

let currentNumber = [];
let numberHistory = [];
let resultNumberHistory = [];
let resultNumber = 0;

const numberButtons = document.querySelectorAll('.numberButton');

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('mouseup', () => {
    function numberButtonProcessing () {
      currentNumber.push(numberButton.textContent);
      if (currentNumber.length > 15) currentNumber.pop();
      resultScreen.textContent = currentNumber.join("");
    }
    numberButtonProcessing();
    if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "=") {
      resultScreenHistory.textContent = "";
      resultNumber = +currentNumber.join("");
    }
  });
});

ACButton.addEventListener('mouseup', () => {
  currentNumber = [];
  numberHistory = [];
  resultNumber = 0;
  resultScreen.textContent = 0;
  resultScreenHistory.textContent = "";
});

CButton.addEventListener('mouseup', () => {
  currentNumber = [];
  resultScreen.textContent = 0;
});

const operators = document.querySelectorAll('.operatorButton');
let selectedOperator;
operators.forEach((operator) => {
  operator.addEventListener('mouseup', () => {
    selectedOperator = operator.textContent;
    numberHistory.push(currentNumber.join(""));
    if (numberHistory[numberHistory.length-1] === "")
      numberHistory.pop();
    if (numberHistory.length === 1)
    resultNumber = currentNumber.join("");
    operate();
    if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "=") {
      resultScreenHistory.textContent = ` ${resultNumber} ${selectedOperator}`;
    }
    else {
        resultScreenHistory.textContent =
        resultScreenHistory.textContent + ` ${currentNumber.join("")} ${selectedOperator}`;
        resultScreen.textContent = resultNumber;
        resultNumberHistory.push(resultNumber);
        if (resultScreen.textContent === "Infinity") {
          resultScreen.textContent = "Not real";
          resultScreenHistory.textContent = "Not real";
        }
    }
    currentNumber = [];
  });
});

function operate () {
  if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "+") {
    add(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "-") {
    subtract(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "*") {
    multiply(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (resultScreenHistory.textContent.charAt(resultScreenHistory.textContent.length-1) === "/") {
    division(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  if (resultNumber.toString().includes("."))
    resultNumber = +resultNumber.toFixed(5);
  if (resultNumber.toString().length > 15)
    resultNumber = resultNumberHistory[resultNumberHistory.length-1];
}

function add (a, b) {
  if (numberHistory.length === 1) 
    resultNumber = currentNumber.join("");
  else if (numberHistory.length === 2)
    resultNumber = a + b;
  else
    resultNumber += b;
}

function subtract (a, b) {
  if (numberHistory.length === 1) 
    resultNumber = currentNumber.join("");
  else if (numberHistory.length === 2)
    resultNumber = a - b;
  else
    resultNumber -= b;
}

function multiply (a, b) {
  if (numberHistory.length === 1) 
    resultNumber = currentNumber.join("");
  else if (numberHistory.length === 2)
    resultNumber = a * b;
  else
    resultNumber *= b;
}

function division (a, b) {
  if (numberHistory.length === 1) 
    resultNumber = currentNumber.join("");
  else if (numberHistory.length === 2)
    resultNumber = a / b;
  else
    resultNumber /= b;
}