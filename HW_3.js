

//Problem 1
function currencyConverter (amount, currency){
    var answer;
    if(currency == "USD"){
        answer = (amount * 3.75);
    }if(currency == "GBP"){
        answer = (amount * 4.61);
    }if(currency == "EGP"){
        answer = (amount / 4.68);
    }if(currency == "BD"){
        answer = (amount * 9.95);
    }

    return (answer);

}


//Problem 2
function isCharacterAVowel(character){
    var vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "O", "U"];
    if(vowels.includes(character)){
        return true;
    }else{
        return false;
    }

}

//Problem 3
function pow(base, exponent){
    return (base ** exponent)
}