let currentValue = "";
let operator = "";
let firstValue = "";
// Button Number Function
function apendNumber(num){
    currentValue = currentValue + num;
    document.getElementById('display').value = currentValue;
}

// Operator Function
function setOperator(op){
    document.getElementById('operator').innerHTML  = op; 
    if(currentValue === "") return;
    firstValue = currentValue;
    operator = op;
    currentValue = "";

}

// Calculate Function
function calculate(){
    if(firstValue === "" || currentValue === "" || operator === "") return;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(currentValue);
    let result;

    switch(operator){
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            return;
    }
    document.getElementById('display').value = result;
    firstValue = "";
    currentValue = result.toString();
    operator = "";
     document.getElementById('operator').innerHTML  = "=";

}

// Clear Function
function clearInput (){
     currentValue = "";
     operator = "";
     firstValue = "";
     document.getElementById('display').value = "0";
     document.getElementById('operator').innerHTML  = "";
}