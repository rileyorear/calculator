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
  });
});

ACButton.addEventListener('mouseup', () => {
  currentNumber = [];

  
  numberHistory = [];
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
    
    resultScreenHistory.textContent =
    resultScreenHistory.textContent + ` ${currentNumber.join("")} ${selectedOperator}`;
    operate();
    resultScreen.textContent = resultNumber;
    currentNumber = [];
  });
});

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

function operate () {
  if (selectedOperator === "+") {
    add(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (selectedOperator === "-") {
    subtract(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (selectedOperator === "*") {
    multiply(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (selectedOperator === "/") {
    division(+(numberHistory[numberHistory.length-2]), +(numberHistory[numberHistory.length-1]));
  }
  else if (selectedOperator === "=") {
    
  }
}