function currencyConverter(currency, amount){
    let rs ;
    if(currency == "USD"){
      rs = amount * 3.75; 
    }else  if(currency == "GBP"){
      rs = amount * 4.60; 
    }else  if(currency == "EGP"){
      rs = amount * 0.23; 
    }else  if(currency == "BD"){
      rs = amount * 9.96; 
    }
    console.log(amount + currency + ' converted to ' + rs + ' Riyals')
  }

  currencyConverter('EGP', 44)



  
 


function isCharacterAVowel(argument){
var text;
var argument = argument.toLowerCase();
var vowels = (['a', 'e', 'i', 'o', 'u']);
for (var i = 0; i <= vowels.length; i++){
if (argument != vowels[i]) {
continue;
       }
return true;
   }
return false;
}

var char = "A";
if (isCharacterAVowel(char)) {
console.log(char + " true is a vowel");
} else {
console.log(char + " false is not a vowel");
}






function pow(num1, num2){
    let nu = num1 ** num2
    console.log(nu)
  }
  pow(5,7) 