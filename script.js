function currencyConverter(amount,currency){
  if(currency === "USD"){
    console.log("'"+amount+"' US dollar Will be : "+(amount*3.75)+ " In Riyal");
  }else if(currency === "GBP"){
    console.log("'"+amount+"' british pound Will be : "+(amount*4.59)+ " In Riyal");
  }else if(currency === "EGP"){
    console.log("'"+amount+"' egyptian pound Will be : "+(amount/4.68)+ " In Riyal");
  }else if(currency === "BD"){
    console.log("'"+amount+"' bahraini dinar Will be : "+(amount/0.10)+ " In Riyal");
  }
}

currencyConverter(1,"BD")
console.log("==============");

function isCharacterAVowel(char){
  console.log("Is it Vowel");
  if(char === 'A'){
    console.log("'true'");
  }else if(char === 'U'){
    console.log("'true'");
  }else if(char === 'O'){
    console.log("'true'");
  }else if(char === 'I'){
    console.log("'true'");
  }else if(char === 'E'){
    console.log("'true'");
  }else{
    console.log("'false'");
  }
}

isCharacterAVowel('O')
console.log("==============");

function pow(base, exponent){
  console.log("the base: '"+base+"' the exponent: '"+exponent+"' the result: '"+Math.pow(base, exponent)+"'");
}

pow(2,4)
console.log("==============");