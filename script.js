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
const resultScreen = document.querySelector('.result')

let currentNumber = [];
let firstNumber = "";
let secondNumber = "";

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
  firstNumber = "";
  secondNumber = "";
  resultScreen.textContent = 0;
});

CButton.addEventListener('mouseup', () => {
  currentNumber = [];
  resultScreen.textContent = 0;
});

const operators = document.querySelectorAll('.operatorButton');
let selectedOperator;
operators.forEach((operator) => {
  operator.addEventListener('mouseup', () => {
    selectedOperator = operator;
    if (firstNumber == "")
      firstNumber = currentNumber.join("");
      else if (secondNumber != "") {
        firstNumber = secondNumber;
        secondNumber = currentNumber.join("");
      }
    else if (firstNumber != "")
      secondNumber = currentNumber.join("");
  });
});

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function division (a, b) {
  return a / b;
}