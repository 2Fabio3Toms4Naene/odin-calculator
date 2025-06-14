function add(leftOperand, rightOperand) {
    return Number(leftOperand) + Number(rightOperand);
};

function subtract(leftOperand, rightOperand) {
    return Number(leftOperand) - Number(rightOperand);
};

function multiply(leftOperand, rightOperand) {
    return Number(leftOperand) * Number(rightOperand);
};

function divide(leftOperand, rightOperand) {
    return resul = Number(leftOperand) / Number(rightOperand);
};


const displayFirstOperands = document.querySelector(".first-operands");
const displayOperator = document.querySelector(".operator");
const displaySecondOperands = document.querySelector(".second-operands");
const containerNumbers = document.querySelector(".container-numbers");
const containerSigns = document.querySelector(".container-signs");
const dot = document.querySelector(".dot");
const buttonDelete = document.querySelector("#delete");
const deleteAll = document.querySelector("#delete-all");
const buttonCalculation = document.querySelector("#calculation");


containerNumbers.addEventListener("click", (event) => {
    let typedText = event.target.id;

    displaySecondOperands.textContent += typedText;
});

function sendFirstOperandAndSign(operator) {
    if(displaySecondOperands.textContent.length >= 1  && operator != "calculation" && operator != "delete" && operator != "delete-all") {
        displayFirstOperands.textContent = displaySecondOperands.textContent;
        displaySecondOperands.textContent = "";
        displayOperator.textContent = operator;
    }
}

window.addEventListener("keydown", (event) => {
    let number = event.key;

    switch(number) {
        case "0":
            displaySecondOperands.textContent += 0;
            break;
            case "1":
                displaySecondOperands.textContent += 1;
                break;
                case "2":
                    displaySecondOperands.textContent += 2;
                    break;
                    case "3":
                        displaySecondOperands.textContent += 3;
                        break;
                        case "4":
                            displaySecondOperands.textContent += 4;
                            break;
                            case "5":
                                displaySecondOperands.textContent += 5;
                                break;
                                case "6":
                                    displaySecondOperands.textContent += 6;
                                    break;
                                    case "7":
                                        displaySecondOperands.textContent += 7;
                                        break;
                                        case "8":
                                            displaySecondOperands.textContent += 8;
                                            break;
                                            case "9":
                                                displaySecondOperands.textContent += 9;
                                                break;
                                                case "+":
                                                    sendFirstOperandAndSign("+");
                                                break;
                                                case "-":
                                                    sendFirstOperandAndSign("-");
                                                    break;
                                                    case "*":
                                                        sendFirstOperandAndSign("*")
                                                        break;
                                                        case "/":
                                                            sendFirstOperandAndSign("/")
                                                            break;
                                                            case ".":
                                                                conditionsForEnterDot();
                                                                break
                                                            case "=":
                                                                case "Enter":
                                                                    sendNumbersToCalculationAndDisplarResult();
                                                                    break;
                                                                    case "Backspace":
                                                                        deleteLastCharacter();
                                                                        break;
    };
});

function conditionsForEnterDot() {
    if(displaySecondOperands.textContent.length >= 1 && displaySecondOperands.textContent.endsWith(".") === false && displaySecondOperands.textContent.includes(".") === false) {
        displaySecondOperands.textContent += ".";
    }
    else{
        alert("You didn't enter a number yet or you have a dot in your number or you can't enter 2 dots");
    };
};

dot.addEventListener("click", () => {
    conditionsForEnterDot();
});

function deleteLastCharacter() {
    displaySecondOperands.textContent = displaySecondOperands.textContent.slice(0, -1);
}

buttonDelete.addEventListener("click", () => {
    deleteLastCharacter();
});

deleteAll.addEventListener("click", () => {
    if(displayFirstOperands.textContent.length >= 1 || displayOperator.textContent.length >= 1 || displaySecondOperands.textContent.length >= 1) {
        displayFirstOperands.textContent = "";
        displayOperator.textContent = "";
        displaySecondOperands.textContent = "";
        numberOfDot = 1;
    };
});

containerSigns.addEventListener("click", (event) => {
    let operator = event.target.id;
    
    sendFirstOperandAndSign(operator);
});

function clearFirstOperandsAndOperator() {
    displayFirstOperands.textContent = "";
    displayOperator.textContent = "";
};

function sendNumbersToCalculationAndDisplarResult() {
    if(displaySecondOperands.textContent.length >= 1) {
        if(displayOperator.textContent === "+") {
            displaySecondOperands.textContent = add(displayFirstOperands.textContent, displaySecondOperands.textContent);
            clearFirstOperandsAndOperator();
        }
        else if(displayOperator.textContent === "-") {
            displaySecondOperands.textContent = subtract(displayFirstOperands.textContent, displaySecondOperands.textContent);
            clearFirstOperandsAndOperator();
        }
        else if(displayOperator.textContent === "*") {
            displaySecondOperands.textContent = multiply(displayFirstOperands.textContent, displaySecondOperands.textContent);
            clearFirstOperandsAndOperator();
        }
        else if(displayOperator.textContent === "/") {
            if(displayFirstOperands.textContent != "0" && displaySecondOperands.textContent != "0") {
                displaySecondOperands.textContent = divide(displayFirstOperands.textContent, displaySecondOperands.textContent);
                clearFirstOperandsAndOperator();
            }
            else if(displayFirstOperands.textContent === "0") {
                alert("You can't divide with zero");
                clearFirstOperandsAndOperator();
                displaySecondOperands.textContent = "";
            }
            else if(displaySecondOperands.textContent === "0") {
                alert("You can't divide with zero");
                displaySecondOperands.textContent = "";
            };
        };
    };
};

buttonCalculation.addEventListener("click", () => {
    sendNumbersToCalculationAndDisplarResult()
});