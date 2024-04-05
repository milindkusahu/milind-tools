const inputBox = document.getElementById('inputBox');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

function checkEven(value) {
    if (value % 2 === 0) {
        result.textContent = 'Even Number';
    } else {
        result.textContent = 'Odd Number';
    }
}

checkButton.addEventListener('click', function () {
    let getValue = parseInt(inputBox.value.trim())
    checkEven(getValue)
});