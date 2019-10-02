let bankAccount = (function(){
  function currency(type, amount){
   let x = amount
    if (type === "USD"){
      amount = amount*0.27
     console.log(x+" Riyal = "+amount+" United States Dollars.")
    }
 else if (type === "GBP"){
      amount = amount*0.22
     console.log(x+" Riyal = "+amount+" Pound sterling.")
    }
 else if (type === "EGP"){
      amount = amount*4.34
     console.log(x+" Riyal = "+amount+" Egyptian Pound.")
    }
  else if (type === "BD"){
      amount = amount*0.1
     console.log(x+" Riyal = "+amount+" Bahraini Dinar.")
    }
  
    }
   
  function getAmount(){
    return amount
  }

  return {
    
    amount : getAmount,
    currency : currency
    
  }

  })()


bankAccount.currency("BD", 5)

///////////////////////////////////////////
let english = (function(){
  function isCharacterAVowel(character){
    if (character === "A"){
    
     console.log("true")
    }
 else if (character === "E"){
      console.log("true")

    }
 else if (character === "I"){
     console.log("true")

    }
  else if (character === "O"){
     console.log("true")

    }
  else if (character === "U"){
     console.log("true")

    }
    else {
       console.log("false")
    }
    }

  return {
    isCharacterAVowel : isCharacterAVowel
    
  }

  })()

english.isCharacterAVowel("C")
///////////////////////////////////////
let math = (function(){
  function pow(base, exponent){
     console.log(base ** exponent)
    }
  return {
    pow : pow 
  }

  })()
math.pow(9,-9)
