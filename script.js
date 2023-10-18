const display = document.querySelector('.display');

function clearDisplay() {
    display.value = '';
}

function addToDisplay(text) {
    display.value += text;
}

function evaluateDisplay() {
    try {
        let expression = display.value;
        expression = expression.replace(/sin/g, 'Math.sin');
        expression = expression.replace(/cos/g, 'Math.cos');
        expression = expression.replace(/tan/g, 'Math.tan');

        let result = eval(expression);

        if (isNaN(result)) {
            throw new Error('Invalid expression');
        }
        display.value = result;
    } catch (error) {
        alert(error.message);
        clearDisplay();
    }
}
