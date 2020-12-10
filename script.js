let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

// For Screen
const calcScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}


// Operator
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currNumber;
    };
    
    calcOperator = operator;
    currNumber = '';
}

// Number
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value);
        updateScreen(currNumber);
    }); 
});

const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number
    } else {
        currNumber += number
    }
}

// Calculation
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currNumber);
});

const calculate = () => {
    let result ='';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break
        case "*":
            result = prevNumber * currNumber;
            break
        case "/":
            result = prevNumber / currNumber;
            break
        default:
            break
    }
    currNumber = result;
    calcOperator = '';

}

// AC (All Clear) Button
const clearBtn = document.querySelector(".all-clear");

const clear = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '';
}

clearBtn.addEventListener('click', () => {
    clear();
    updateScreen(currNumber);
});

// Decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    if(currNumber.includes(".")) {
        return
    } 
    currNumber += dot
}

// Percentage (WIP)
const percent = document.querySelector(".percentage");

clearBtn.addEventListener('click', () => {
    currNumber = '0';
    updateScreen(currNumber);
});