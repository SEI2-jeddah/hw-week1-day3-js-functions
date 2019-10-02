let currency = 'USD';
let amount = 1;
let result = currencyConverter(currency, amount);
console.log(" It is Equals" + " " + result + " " + "SAR")

function currencyConverter (currency, amount){
    let reusl;
    if (currency === 'USD')
      {
        reusl = amount  * 3.75;
        return reusl;
      }
    else if( currency === 'GBP')  
    {
        reusl = amount * 4.61;
        return console.log(reusl);
    }
    else if( currency === 'EGP')  
    {
        reusl = amount / 4.68;
        return console.log(reusl);
    }
    else if( currency === 'EBD')  
    {
        reusl = amount * 4.68;
        return console.log(reusl);
    }
    
} 

// 
function isCharacterAVowel(character){

    let result;

        if(character == "A" || character == "E" || character == "I" || character == "O" || character == "U" ) {
            result = true;
            console.log (" the character is vowel")
        }
        else{
            result = false;
            console.log (" the character is not vowel")
        }
 
    }

    var char= 'A';
        isCharacterAVowel(char);
        

    function pow(base, exponent) {
        var result = 1;
    
        for(var i=1; i<=exponent; i++) {
            result = result * base;
        }
        return result;
    }
    
    console.log(pow(3,3));