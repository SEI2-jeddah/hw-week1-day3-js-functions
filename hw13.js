function currencyConverter (amount, currency ){
   
    let change;
 
    if (currency == "USD"){
        change=amount *3.75;
    }
 
   else if (currency == "GBP"){
    change=amount *4.60;
    }
 
    else if (currency == "EGP"){
        change=amount *0.23;
    }
    else if (currency == "BD"){
        change=amount *9.96;
    }
 
     console.log(amount + ' ' + currency + ' equals to' + ' '+ an +' '+ 'Riyals')
 }
 
   currencyConverter('GBP', 35)
 
 
   
 
    function isCharacterAVowel(character){
 
     return character == "a" || character== "e" ||character == "i" ||character == "o" || character == "u" 
 
   } isCharacterAVowel('D')
 
  
 
   function pow(base ,exponent)
 {
     let a = base ** exponent
     console.log(a)
   }
   pow(3,4)