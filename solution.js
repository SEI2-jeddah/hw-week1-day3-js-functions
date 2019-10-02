function currencyConverter(currency, amount) {

    if (currency == "USD")
        return amount * 3.75;
    else if (currency == "GBP")
        return amount * 4.95;
    else if (currency == "EGP")
        return amount * 0.21;
    else if (currency == "BD")
        return amount * 9.95;
    else
        return "Not a valid currency, try something else.";
}

console.log(currencyConverter("USD", 50) + " Riyals");
console.log(isCharacterAVowel('s'));

function isCharacterAVowel(character) {
    if (character.toUpperCase() === 'A' ||
        character.toUpperCase() === 'E' ||
        character.toUpperCase() === 'I' ||
        character.toUpperCase() === 'O') {
        return true;
    } else {
        return false
    }
}

function power(base, exponent) {
    if (exponent > 0 && exponent >= 1)
        return base * power(base, exponent - 1);
    else if (exponent < 0 && exponent <= -1)
        return 1 / power(base, -exponent);
    else if (exponent == 0)
        return 1;
    else if (exponent > 0 && exponent < 1)
        return Math.sqrt(base);
    else
        return NaN;

}


function pow(base, exponent) {
    if (exponent != 0)

        return (base * pow(base, exponent - 1));
    else
        return 1;
}
console.log(pow(2, 3));
console.log(pow(3, 3));

Math.ceil()
