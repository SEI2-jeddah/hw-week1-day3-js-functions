//..
//currencyConverter

function currencyConverter (currency, amount){
    let riyal = 0
    if ( currency == "USD"){
        riyal = amount * 3.75
        return riyal.toFixed(2)

    }else if (currency == "GBP"){
        riyal = amount * 4.61
        return riyal.toFixed(2)

    }else if ( currency == "EGP"){
        riyal = amount * 0.230368
        return riyal.toFixed(2)

    }else if (currency == "BD"){
        riyal = amount * 9.97340 
        return riyal.toFixed(2)
    }else {
        return riyal
    }
}
console.log("SAR " + currencyConverter("USD",1))
console.log("SAR " + currencyConverter("GBP",1))
console.log("SAR " + currencyConverter("EGP",9))
console.log("SAR " + currencyConverter("BD",5))

//..
//isCharacterAVowel(character)

function isCharacterAVowel(character){

    let a = character == "A" || character == "a"
    let e = character == "E" || character == "e"
    let i = character == "I" || character == "i"
    let o = character == "O" || character == "o"
    let u = character == "U" || character == "u"
    let y = character == "Y" || character == "y"

    return a || e || i || o || u || y ? true : false
}
console.log(isCharacterAVowel("i"))

//..
//pow(base, exponent)
function pow (base, exponent){
    let pow = 1
    for (i = 0; i < exponent; i++) {
        pow *= base
      }
    return pow 
}
console.log(pow(2,3))

//..

