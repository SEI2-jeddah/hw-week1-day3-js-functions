//currencyConverter
function currencyConverter(currency, amount) {
if (currency == 'EGP'){
  console.log(amount * 4.68)
} 
else if (currency == 'USD'){
  console.log(amount * 3.75)
}
else if (currency == 'GBP'){
  console.log(amount * 4.62)
}
else {
  console.log(amount * 10)
}
}

//isCharacterAVowel

function isCharacterAVowel(character) {
  var character = 'f'
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(character) !== -1) {
    console.log('true')
  }
  console.log('false')
}


//Power Finder
function pow(base, exponent) {
  console.log(Math.pow(3, 2));
}

//Calling functions for Outputs
currencyConverter('EGP', 5)
isCharacterAVowel()
pow()

