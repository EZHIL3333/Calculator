let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperator(newOperator) {
    operator = newOperator;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '0';
    } else {
        calculateResult();
    }
}

function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    if (operator === '+') {
        displayValue = (firstOperand + secondOperand).toString();
    } else if (operator === '-') {
        displayValue = (firstOperand - secondOperand).toString();
    } else if (operator === '*') {
        displayValue = (firstOperand * secondOperand).toString();
    } else if (operator === '/') {
        if (secondOperand !== 0) {
            displayValue = (firstOperand / secondOperand).toString();
        } else {
            displayValue = 'Error';
        }
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
}

updateDisplay();
