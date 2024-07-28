
const display = document.getElementById('input');

function numbers(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

document.title = 'Clac'