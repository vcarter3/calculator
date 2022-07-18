function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    if (operator == "+"){
        return addition(a,b);
    }else if (operator == "-"){
        return subtraction(a,b);
    }else if (operator == "*"){
        return multiply(a,b);
    }
    else if (operator == "/"){
        return divide(a,b);
    }
}

const displayValue = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => number.addEventListener("click", function() {
        displayValue.textContent = number.id;
}));
