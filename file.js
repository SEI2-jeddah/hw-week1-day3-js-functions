
// Question - 1

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
  currencyConverter('USD', 27)

  // Question - 2

  function isCharacterAVowel(o) {
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(o) !== -1) {
      return true;
    }
    return false;
  }
  isCharacterAVowel()


    // Question - 3

    function mathPow() {
        console.log(Math.pow(7, 3));  
      }
      mathPow(); 
