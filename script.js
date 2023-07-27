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

// CButton.addEventListener('mouseup', () => {
//   currentNumber = [];
//   resultScreen.textContent = "0";
// });

// sevenButton.addEventListener('mouseup', () => {
//   currentNumber.push(7);
//   numberButtonProcessing();
// });

// eightButton.addEventListener('mouseup', () => {
//   currentNumber.push(8);
//   numberButtonProcessing();
// });

// nineButton.addEventListener('mouseup', () => {
//   currentNumber.push(9);
//   numberButtonProcessing();
// });

// fourButton.addEventListener('mouseup', () => {
//   currentNumber.push(4);
//   numberButtonProcessing();
// });

// fiveButton.addEventListener('mouseup', () => {
//   currentNumber.push(5);
//   numberButtonProcessing();
// });

// sixButton.addEventListener('mouseup', () => {
//   currentNumber.push(6);
//   numberButtonProcessing();
// });

// oneButton.addEventListener('mouseup', () => {
//   currentNumber.push(1);
//   numberButtonProcessing();
// });

// twoButton.addEventListener('mouseup', () => {
//   currentNumber.push(2);
//   numberButtonProcessing();
// });

// threeButton.addEventListener('mouseup', () => {
//   currentNumber.push(3);
//   numberButtonProcessing();
// });

// zeroButton.addEventListener('mouseup', () => {
//   currentNumber.push(0);
//   numberButtonProcessing();
// });



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

let firstNumber = [];
let secondNumber = [];

const operators = document.querySelectorAll('.operatorButton');
let selectedOperator;
operators.forEach((operator) => {
  operator.addEventListener('mouseup', () => {
    selectedOperator = operator;
    firstNumber = currentNumber;
  });
});

