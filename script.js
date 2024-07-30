function toRoman(num) {
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];
    const syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];
    let roman = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman += syb[i];
            num -= val[i];
        }
    }
    return roman;
}

function convertToRoman() {
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (numberInput) {
        const number = parseInt(numberInput);
        if (number >= 1 && number <= 3999) {
            result.textContent = toRoman(number);
        } else {
            result.textContent = 'Please enter a number between 1 and 3999.';
        }
    } else {
        result.textContent = 'Please enter a number.';
    }
}

// do not edit below this line
module.exports = convertToRoman
