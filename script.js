let num1;
let num2;
let operator;

// Add first number to second
function add(a, b) {
    return +a + +b;
};

// Subtract second number from the first
function subtract(a, b) {
    return a - b;
};

// Multiply first number by the second
function multiply(a, b) {
    return a * b;
};

// Divide first number by the second
function divide(a, b) {
    return a / b;
};

// Call the specified function and run calculation
function operate(opr, num1, num2) {
    switch (opr) {
        case "+":
            value = add(num1, num2);
            break;
        case "-":
            value = subtract(num1, num2);
            break;
        case "*":
            value = multiply(num1, num2);
            break;
        case "/":
            value = divide(num1, num2);
            break;
    }

    return value;
};

document.addEventListener('DOMContentLoaded', () => {
    // AC button - Clears display and variables
    document.querySelector("#ac").onclick = () => {
        display.textContent = "";
        num1 = "";
        num2 = undefined;
        operator = undefined;
    };

    let display = document.querySelector(".display");

    // Update display and variable after each key press
    function enterNum(input) {
        if (operator === undefined && num2 === undefined) {
            num1 = display.textContent + input;
            display.textContent = num1;
        } else if (num2 === undefined) {
            display.textContent = "";
            num2 = display.textContent + input;
            display.textContent = num2;
        } else {
            num2 = display.textContent + input;
            display.textContent = num2; 
        }
    };

    // Display selected number on screen when pressed
    const btnNums =  document.querySelectorAll(".btnNum");
    btnNums.forEach((btn) => {
        btn.addEventListener("click", () => {
            enterNum(btn.id);
        });
    });

    // If equals is pressed then calculate, if operator is pressed 
    // then store as variable
    const btnOps = document.querySelectorAll(".btnOp");
    btnOps.forEach((btn) => {
        btn.addEventListener("click", () => {
            if(btn.id === "=") {
                console.log(`${num1} ${operator} ${num2}`);
                num1 = operate(operator, num1, num2);
                num2 = undefined;
                operator = undefined;
                display.textContent = num1;

            } else {
                operator = btn.textContent;
                display.textContent = operator;
            }
        })
    });
});