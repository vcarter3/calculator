function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "zeroDiv"
    }
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return addition(a, b);
    } else if (operator == "-") {
        return subtraction(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    }
    else if (operator == "/") {
        return divide(a, b);
    }

}

function concat(a, b) {
    // concatenation of 2 integers
    return parseFloat(a.toString() + b.toString());
}

const displayValue = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

var operatorHistory = "";
var store = "0";
var solution = "";

function updateDisplay(char) {
    if (displayValue.textContent == "0") {
        // start
        displayValue.textContent = char;
        store = char;

    } else {
        displayValue.textContent = displayValue.textContent + char.toString();
        store = concat(store, char)
    }

}

function clearDisplay() {
    store = "0";
    solution = "";
    displayValue.textContent = "0";
}


numbers.forEach(number => number.addEventListener("click", function () {
    // number pressed is stored into var store
    updateDisplay(number.id);
}));

window.addEventListener('keydown', function (e) {
    if (e.key in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        updateDisplay(e.key);
    }
}, false);


operators.forEach(operator => operator.addEventListener("click", function () {

    if (operator.id == ".") {
        if (displayValue.textContent == 0) {
            displayValue.textContent = "0."
            store = "0."
        } else {
            displayValue.textContent += operator.textContent;
            store += ".";
        }
        return
    }

    if (operator.id == "C") {
        // clear operation
        return clearDisplay();
    }

    if (store == "" && solution != ""){
        // when midway through pair cal, cannot add more operators
        return
    }

    displayValue.textContent += operator.textContent;

    if (solution == "") {
        // start 
        solution = store;
        operatorHistory = operator.id;
        store = "";

    } else {
        solution = operate(operatorHistory, parseFloat(solution), parseFloat(store));
        if (solution == "zeroDiv") {
            store = "";
            solution = "";
            displayValue.textContent = "Division by zero!";
            return
        } else {
            solution = Number(solution.toFixed(3));
        }
        store = "";

        if (operator.id == "=") {
            // save current to store and display then reset
            displayValue.textContent = solution;
            store = solution;
            solution = "";
        } else {
            operatorHistory = operator.id;
        }

        console.log(operatorHistory);

    }
}));

