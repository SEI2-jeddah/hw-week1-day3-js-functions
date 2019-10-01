function currencyConverter (amount,currency){
if(currency=="USD"){
    amount=amount*3.75;
}else if(currency=="GBP"){
    amount=amount*4.61;
}else if(currency=="EGP"){
    amount=amount/4.61;
}else if(currency=="BD"){
    amount=amount*0.10;
}
console.log(amount);
}

currencyConverter(10,"USD");
currencyConverter(10,"EGP");
currencyConverter(10,"BD");
//

function isCharacterAVowel(char){
    if(char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "u" || char.toLowerCase() === "o" || char.toLowerCase() === "i"){
        return console.log(true);
        }
        return console.log(false);
      }
isCharacterAVowel("A"); 
isCharacterAVowel("M");     
//

function pow(base,exponent){
    if(exponent==1){
        return base
    }else if(exponent==0){
        return 0
    }else{
       return base*pow(base,exponent-1);
    };
}
console.log(pow(7,0));
console.log(pow(7,1));
console.log(pow(7,2));
console.log(pow(7,3));
console.log(pow(2,10));

