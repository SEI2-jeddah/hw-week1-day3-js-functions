
function currencyConverter(amount, currency){
  if(currency == "USD"){
    conAmount = amount * 3.75;
    console.log(amount + " Riyal = " + conAmount + " United States Dollar")
  }else if(currency == "GBP"){
    conAmount = amount * 4.59;
    console.log(amount + " Riyal = " + conAmount + " Great Britain Pound")
  }else if(currency == "EGP"){
    conAmount = amount * 0.23;
    console.log(amount + " Riyal = " + conAmount + " Egyptian pound")
  }else{
    conAmount = amount * 0.1005;
    console.log(amount + " Riyal = " + conAmount + " Bahraini dinar")
  }
}

currencyConverter(1, "USD")

//////////////////////////////////////////

function isCharacterAVowel(char){
  if(char.length > 1){
    console.log("please enter only 1 letter")
  }else{
    if(char=="A" || char=="E" ||char=="I" ||char=="O" ||char=="U"){
      return true;
    }else{
      return false;
    }
  }
}

///////////////////////////////////////////

isCharacterAVowel("B")

function pow(num,pwr){
  let ans = 1;
  for (let i=1 ; i <= pwr; i++){
    ans *=num
  }
  console.log(ans)
}

pow(3,9)
