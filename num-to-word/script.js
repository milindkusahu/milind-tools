const inputBox = document.getElementById('inputBox');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

function numToWord(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

    const chunks = [];
    while (number > 0) {
        chunks.push(number % 1000);
        number = Math.floor(number / 1000);
    }

    if (chunks.length === 0) {
        result.textContent = 'zero';
        return;
    }

    const words = chunks.map((chunk, index) => {
        if (chunk === 0) {
            return '';
        }

        const chunkWords = [];
        const hundred = Math.floor(chunk / 100);
        const remainder = chunk % 100;

        if (hundred > 0) {
            chunkWords.push(units[hundred] + ' hundred');
        }

        if (remainder > 0) {
            if (remainder < 10) {
                chunkWords.push(units[remainder]);
            } else if (remainder < 20) {
                chunkWords.push(teens[remainder - 10]);
            } else {
                const ten = Math.floor(remainder / 10);
                const one = remainder % 10;
                chunkWords.push(tens[ten]);
                if (one > 0) {
                    chunkWords.push(units[one]);
                }
            }
        }

        if (index > 0 && chunkWords.length > 0) {
            chunkWords.push(scales[index]);
        }

        return chunkWords.join(' ');
    });

    let joinW = words.reverse().join(' ');
    result.textContent = `${joinW}`;
}

checkButton.addEventListener('click', function () {
    const getValue = parseInt(inputBox.value.trim());
    numToWord(getValue);
});