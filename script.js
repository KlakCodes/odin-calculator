let num1;
let num2;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a- b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (opr, num1, num2) {
    switch(opr) {
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
}

console.log(add(1, 2));
console.log(subtract(10, 4));
console.log(multiply(4, 5));
console.log(divide(40, 5));

console.log(operate("/", 10, 6));