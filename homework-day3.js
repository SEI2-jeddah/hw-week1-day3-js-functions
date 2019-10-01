function currencyConverter(currency, amount){

if(currency == "BD"){
 
  console.log(amount*0.10)
}
else if(currency == "EGP"){

  console.log(amount*4.68)

}
else if(currency == "USD"){

  console.log(amount*3.75)


}
else {
   console.log(amount*0.21)

}

}


function isCharacterAVowel(char) {
  if ( char=== "a" || char==="e" || char==="i" || char==="o" || char==="u") {
    return "True"
  }  
  
  else {
    return "False"
  } 

}


 

function pow(num){
console.log(Math.pow(num,5))
}




currencyConverter("USD", 2);

pow(2);

isCharacterAVowel("a");
