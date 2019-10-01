# Functions - Problem Set

## Problems

### currencyConverter(currency, amount)

Define a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns the converted version of the amount in Riyals. 
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar

//let amount = Number;
let currency = ("USD, GBP, EGP, BD");



function currencyConverter(currency, amount) {
  if (currency === 'USD') {
    return convertUSDtoSAR(currency);
  } 
  else if (currency === 'EGP' ) {
    return convertEurtoSAR(currency);
  }  
  else if (currency  === 'GBP') {
    return convertGBPtoSAR(currency);
  }
  else if ( currency  === 'BD') {
    return convertBDtoSAR(currency);
  }
}

function converttoSAR(BD) {
  return  (BD * 0.10 );
}


console.log("The converted currency is " + currencyConverter )




---

### isCharacterAVowel(character)

Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

---
//function Vowel(vL){

var vowel = (['a', 'e', 'i', 'o', 'u']);
for (var i = 0; i <= vowel.length; i++){
if (vL = vowel[i]) {
continue;
        }
return true;
    }
return false;
}
// See if "A" is a vowel
var char = "A";
if (Vowel(char)) {
console.log(char + " is a vowel");
} else {
console.log(char + " is not a vowel");
}
----
### pow(base, exponent)

Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.
---

var math = function(){
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// expected output: NaN
}

math (); 

---

## Reminder
Your opinion for this homework is very important! Please fill up the following questions when you pull request:
 * on a scale from 1 to 5, how comfortable were you with this assignment?
 * What was a win you had with this assignment?
 * What was a challenge you had with this assignment?
 * Is there anything that you'd like some further information on?
 * Other stuff on your mind? work with anyone? tell us about it!

## Homework Submission
https://github.com/SEI2-jeddah/General/tree/master/homework_submission
