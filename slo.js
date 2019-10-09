function currencyConverter(currency,amount) {
  var amount_b = null;
  var usd = 3.75;
  var egp = 4.68;
  var bd =0.10;
  var gbp=4.58;


  (currency == 'USD') ? amount_b = amount*usd:{};
  (currency == 'EGP') ? amount_b = amount*egp:{};
  (currency == 'BD') ? amount_b = amount*bd:{};
  (currency == 'GBP') ? amount_b = amount*gbp:{};
  console.log(amount_b);
}

currencyConverter('BD',300)



// -------------------------------- p2



function is_vowel(char){ let listofVowel= ['a','i','e','o','u','A','I','E','O','U'];

return listofVowel.includes(char); }

console.log(is_vowel('a'));



//--------------------------------- p3



function power(x, y) {
    if (y === 0) {
      return 1;
    }
    var yBy2 = y / 2;
    var pow = power(x, parseInt( yBy2, 10) );
    if (y % 2 === 0) {
      return pow * pow;
    } else {
      return x * pow * pow;
    }
}


console.log(power(5,2))
