// 1 - The first answer is :
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
    console.log(amount + ' ' + currency + ' equals to ' + rs + ' Riyals')
  }

  currencyConverter('USD', 15)

  // 2- The second answer is :
  function isCharacterAVowel(c) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(c) !== -1) {
    return true;
  }
  return false;
}
isCharacterAVowel()

  // 3- The Third answer is :

  function isVowel(argument){

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

  if (isVowel(char)) {
      console.log(char + " is a vowel");
  } else {
      console.log(char + " is not a vowel");
  }
  var char = "f";

  if (isVowel(char)) {
      console.log(char + " is a vowel");
  } else {
      console.log(char + " is not a vowel");
  }
