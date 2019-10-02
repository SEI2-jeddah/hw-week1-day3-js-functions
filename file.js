function currencyConverter(amount, currency){
    let ans
    if ("USD"){
      ans = amount * 3.75
    }
    else if ("GBP"){
      ans = amount * 4.60
    }
    else if ("EGP"){
      ans = amount * 4.68
    }
    else if ("BD"){
      ans = amount * .10
    }
    else {
      console.log('error')
    }
    console.log(ans)
    
  }
  currencyConverter(3 , "USD")
   
   function isCharcterAVowel(letter){
     if (letter === "a" || letter === "u" || letter === "e" || letter === "o" || letter === "i" ){
       console.log("True")
   } else {
     console.log(" False ")
   }
  }
  isCharcterAVowel("a")
  
  function pow(num1, num2){
    let ans = num1 ** num2
    console.log(ans)
  }
  pow(7, 7)