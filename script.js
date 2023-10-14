var currentExpression = ''; // Variable to store the current expression

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    currentExpression += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentExpression = '';
}

function calculateResult() {
    try {
        // Replace trigonometric function names with their JavaScript equivalents
        var processedExpression = currentExpression.replace(/sin/g, 'Math.sin')
                                                 .replace(/cos/g, 'Math.cos')
                                                 .replace(/tan/g, 'Math.tan')
                                                 .replace(/sqrt/g, 'Math.sqrt')
                                                 .replace(/pow/g, 'Math.pow');

        var result = eval(processedExpression);
        
        // Check if the result is a valid number
        if (!isNaN(result) && isFinite(result)) {
            document.getElementById('display').value = currentExpression + ' = ' + result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    
    currentExpression = ''; // Reset the current expression after calculation
}
