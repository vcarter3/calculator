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
    if(b == 0){
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


var store = "0";
var solution = "";

numbers.forEach(number => number.addEventListener("click", function () {
    // number pressed is stored into var store
    
    if (displayValue.textContent == "0") {
        // start
        displayValue.textContent = number.id;
        store = number.id;

    } else {
        displayValue.textContent = displayValue.textContent + number.id.toString();
        store = concat(store, number.id)
    }

}));

operators.forEach(operator => operator.addEventListener("click", function () {

    if (operator.id == ".") {
        if (displayValue.textContent==0){
            displayValue.textContent="0."
            store = "0."
        }else{
        displayValue.textContent += operator.textContent;
        store += ".";
        }
        return
    }
    
    if (operator.id == "C") {
        // clear operation
        store = "0";
        solution = "";
        displayValue.textContent = "0";
        return
    }

    displayValue.textContent += operator.textContent;
    console.log("sol", solution, "store", store)


    if (solution == "") {
        // start 
        solution = store;
        op = operator.id;
        store = "";

    } else {
        solution = operate(op, parseFloat(solution), parseFloat(store));
        if(solution == "zeroDiv"){
            store = "";
            solution = "";
            displayValue.textContent = "Error: You tried division by zero!";
            return 
        }else{
            solution = Number(solution.toFixed(2));
        }
        store = "";

        if (operator.id == "=") {
            // save current to store and display then reset

            console.log("sol", solution, "store", store)

            displayValue.textContent = solution;
            store = solution;
            solution = "";

        } else {
            op = operator.id;
        }

    }
}));

