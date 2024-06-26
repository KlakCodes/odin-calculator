let num1 = "";
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
    if (isFinite(a / b)) {
        return a / b;
    } else {
        return "Good one..."
    }
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
            num1 += input;
            display.textContent = num1;
        } else if (num2 === undefined) {
            num2 = ""
            display.textContent = "";
            num2 += input;
            display.textContent = num2;
        } else {
            num2 += input;
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

    // Operate the given inputs and store the answer as num1
    function calculate() {
        num1 = operate(operator, num1, num2);
        num2 = undefined;
        operator = undefined;
        display.textContent = num1;
    }

    // If equals is pressed then calculate, if operator is pressed then store as variable
    const btnOps = document.querySelectorAll(".btnOp");
    btnOps.forEach((btn) => {
        btn.addEventListener("click", () => {
            if(btn.id === "=" && num2 !== undefined) {
                console.log(`${num1} ${operator} ${num2}`);
                calculate();
            } else if (btn.id !== "=" && operator !== undefined && num2 !== undefined) {
                console.log(`${num1} ${operator} ${num2}`);
                calculate();
                operator = btn.textContent;
            } else if (btn.id !== "=") {
                operator = btn.textContent;
            }
        });
    });

    // Add a decimal point to the current active num
    document.querySelector("#dot").onclick = () => {
        if(num2 === undefined && num1 !== undefined) {
            if(num1.toString().includes(".") === false) {
                num1 += ".";
                display.textContent = num1;
            };
        } else if (num2 !== undefined) {
            if(num2.toString().includes(".") === false) {
                num2 += ".";
                display.textContent = num2;
            }
        }
    };

    // Remove last character from the display
    document.querySelector("#backspace").onclick = () => {
        if(num2 === undefined && num1 !== undefined) {
            let arr = display.textContent.split('');
            arr.pop();
            num1 = arr.join('');
            display.textContent = num1;
        } else if (num2 !== undefined) {
            let arr = display.textContent.split('');
            arr.pop();
            num2 = arr.join('');
            display.textContent = num2;            
        }
    };
});