function currencyConverter(amount , currency){

    if(currency == "USD"){
    amount = amount / 3.75
    console.log(amount + "$")

}
else if (currency == "GBP"){
    amount = amount /4.61
    console.log(amount +" GBP")
}
else if (currency == "BD"){
    amount = amount /4.61
    console.log(amount + " BD")
}
else if (currency == "EGP"){
    amount = amount * 4.34
    console.log(amount + " EGP")
}
else {
    console.log("currency that you selected is not supported")
}
}

currencyConverter(99,"USD")
currencyConverter(99,"GBP")
currencyConverter(99,"EGP")
currencyConverter(99,"BD")

function isCharacterAVowel(letter){
    
        if(letter.length == 1 && letter == "a" || "A" || "e" || "E" || "o" || "O" || "u" || "U" || "y" || "Y"){
            console.log(true)
        }
        else {
            console.log(false)
        }
    }

isCharacterAVowel("d")

function pow(x, y){
    console.log(x ** y)
}
pow(2, 3)