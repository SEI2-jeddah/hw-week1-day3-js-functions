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
  
  currencyConverter('USD', 44)

  //-----------------------------------------------------------------

  function isCharacterAVowel(char){
    return char == "a" || char == "e" || char == "i" ||char == "o" || char == "u" 
  }
  isCharacterAVowel('s')

  //-----------------------------------------------------------------
  
  function pow(base, exponent){
    let ans = base ** exponent
    console.log(ans)
  }
  pow(10,9)