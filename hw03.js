function currencyConverter(amount,currency) {

    let sar = 1;
    let usdRate = 0.27;
    let gbpRate = 0.22;   
    let egpRate = 4.68;
    let bdRate = 0.10;

    if (currency === "USD")
    {
        let converted = (sar * amount)/usdRate;
        console.log(amount+" USD = "+converted+" SAR");
    }
   else if (currency === "GBP")
    {
        let converted = (sar * amount)/gbpRate;
        console.log(amount+" GBP = "+converted+" SAR");
    }
  else  if (currency === "EGP")
    {
        let converted = (sar * amount)/egpRate;
        console.log(amount+" EGP = "+converted+" SAR");
    }
   else if (currency === "BD")
    {
        let converted = (sar * amount)/bdRate;
        console.log(amount+" BD = "+converted+" SAR");
    }

    
}
currencyConverter(10,"USD");
currencyConverter(10,"GBP");
currencyConverter(10,"EGP");
currencyConverter(10,"BD");

function isCharacterAVowel(v)
{
    if(v === "a" || v === "A" || v === "i" || v === "I" || v === "o" || v === "O" || v === "u" || v === "U" || v === "e" || v === "E")
    {
         console.log(true);
    }
    else
    {
        console.log(false);    
    }
}

isCharacterAVowel("i");
isCharacterAVowel("v");
isCharacterAVowel("b");
isCharacterAVowel("U");
isCharacterAVowel("a");
isCharacterAVowel("y");
isCharacterAVowel("O");

// recursive method
function pow(base, exponent)
{

    if(exponent === 0)
    {
        return 1;
    }
    else
    {
     return base * pow(base, exponent-1);
    }
}
console.log(pow(2,8));

// loop method
function powLoop(base, exponent)
{
    let result = 1;
    for (let i = 0 ; i < exponent; i++) {
        
        result = result * base;
        
    }
    console.log(result);
    
}
powLoop(2, 8);