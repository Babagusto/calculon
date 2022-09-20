//Create the functions that populate the display when you click the number buttons. 
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.

const displayVal = document.querySelector("#main-display")
const prevDisplay = document.querySelector("#previous-display")
const calculator = document.querySelector("#calculator")
const numbers = document.querySelectorAll(".numbers")
const symbols = document.querySelectorAll(".button")
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')



clear.addEventListener('click', function(){
    displayVal.innerText = ' ';
    prevDisplay.innerText = ' ';
})

equal.addEventListener('click', () => {
    operate(operator, a, b)
    if (displayVal.innerHTML = answer) {}
})

numbers.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
        let b = Number(displayVal.innerText)
        b = Number(displayVal.innerText)
    })
})

symbols.forEach(button => {
    button.addEventListener('click', () => {
       operator = button.innerText
       console.log(operator)
       appendNumber(button.innerText)
       let b = a
    })
})

function movePrev (string){
    if (prevDisplay.innerText !=' '){
        displayVal.innerText = ' '
    }
    prevDisplay.innerText = prevDisplay.innerText.toString() + a + operator
}

function appendNumber(number){
    if (displayVal.innerText.length < 12){
    displayVal.innerText = displayVal.textContent.toString() + number.toString();
    }
}

function subtract (a, b) {
    return a - b;
}

function add (a, b) {
    return a + b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    let answer
    
    if (operator == '+') {
    answer = add(a, b)
    } else if (operator == '-'){
    answer =  subtract(a, b)
    } else if (operator == '*'){
    answer = multiply(a, b)
    } else (operator == '/')
    answer = divide(a, b)
    console.log (answer)
    displayVal.innerHTML = answer
}