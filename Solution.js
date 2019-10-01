function currencyConverter(currency, amount){
  let USD = 3.75, GBP = 4.59 , EGP = 0.23, BD = 9.95;

  if(currency === "USD"){
    return amount * USD;
  }else if(currency === "GBP"){
    return amount * GBP;
  }else if(currency === "EGP"){
    return amount * EGP;
  }else if(currency === "BD"){
        return amount * BD;
  }else{
    return "Currency not supported"
  }

}

//Pow has more complicated algorithm but I will use the base method to do kinda the same thing without taking care of edge cases.
function pow(base, exponent){
  return base ** exponent;
}

function isCharacterAVowel(character){
  if(character.toLowerCase() === "o" ||
     character.toLowerCase() === "u" ||         
     character.toLowerCase() === "a" ||
     character.toLowerCase() === "e" || 
     character.toLowerCase() === "i"){
       return true;
     }
     return false;
}

console.log(isCharacterAVowel("C"));
console.log(isCharacterAVowel("o"));
console.log(isCharacterAVowel("q"));
console.log(isCharacterAVowel("i"));

console.log("\n");

console.log(currencyConverter("USD", 10));
console.log(currencyConverter("BD", 10));
console.log(currencyConverter("GBP", 10));
console.log(currencyConverter("EGP", 10));
console.log(currencyConverter("hello", 10));

console.log("\n");

console.log(pow(2, 2));
console.log(pow(2, 4));
console.log(pow(2, 5));
console.log(pow(2, 6));
console.log(pow(2, 7));
