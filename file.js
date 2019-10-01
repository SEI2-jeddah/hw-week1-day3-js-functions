
// currencyConverter //
function currencyConverter(amount,currency){
    if(currency == "USD"){
       return amount*3.75 
    }else if(currency =="GBP"){
      return amount*4.59
    }else if(currency =="EGP"){
     return amount*0.23
    }else if(currency=="BD"){
      return amount*9.95
    }
}
console.log(currencyConverter(15,"BD"))
////////////////////////////////////////////

// isCharacterAVowel //

function isCharacterAVowel(char){
let vowel = "AEIOU"
if(char.length==1){
  if(vowel.includes(char.toUpperCase())){
    return true
  }
  return false
}
return "please enter one character only."
}

console.log(isCharacterAVowel('a'))
////////////////////////////////////////////

// pow(base, exponent) //

function pow(base,exponent){
  let result = 1
  while(exponent != 0){
result *=base

exponent-=1
  }
  return result
}

console.log(pow(5,3))
////////////////////////////////////////////