

//PART1

function pow(num) {
    return Math.pow(num, 3)
}
console.log(pow(5))




//PART2

let c = "p"
function isCharacterAVowel(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return true
    } else {
        return false
    }
}
console.log(isCharacterAVowel(c))




//PART3

function c(amount, currency) {
    let conv = " ";
    if (currency === 'BD') {
        conv = amount / 0.10
        return conv + ' SAR'
    } else if (currency === 'EGP') {
        conv = amount / 4.68
        return conv + ' SAR'
    }
}
console.log(c(99, 'BD'))
console.log(c(99, 'EGP'))