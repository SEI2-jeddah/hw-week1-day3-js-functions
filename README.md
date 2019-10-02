# Functions - Problem Set

## Problems

### currencyConverter(currency, amount)

Define a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns the converted version of the amount in Riyals. Use the if-then-else construct available in Javascript.

**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar


ANSWER
-------
const amountInput = 10;
const currencyInput = "BD";

var currencyConverter = function calculate()
{
  var currency = ["BD" , "EGP"];
  
   if(currencyInput === "BD")
  {
    var currencyRate = 4.68;
    result(amount * currencyRate)
  }
  else if (currencyInput ==="EGP")
  {
    var currencyRate = 0.10;
    result(amountInput * currencyRate)
  }
}








---

### isCharacterAVowel(character)

Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

ANSWER
-------
var isCharacterAVowel = function (input)
{
  var isCharacterAVowel =["a" , "A" , "i" , "I" , "u" , "U" , "e" , "E" , "o" , "O"]

  if (input === "a" || input === "A" || input === "i" || input === "I" || input === "u" || input === "U" || input === "e" || input === "E" || input === "o" || input === "O" )
  {
    return "true"
  }
  else
  { 
    return "false"
  }
}
isCharacterAVowel("a")







---

### pow(base, exponent)

Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.

ANSWER
-------
var squareOneSideMeasurment = 3;
var squareArea =  Math.pow(squareOneSideMeasurment, 2 );
console.log(squareArea)

--

oneSideSquare = 6
squareArea=Math.pow(oneSideSquare, 2);















## Reminder
Your opinion for this homework is very important! Please fill up the following questions when you pull request:
 * on a scale from 1 to 5, how comfortable were you with this assignment?
 * What was a win you had with this assignment?
 * What was a challenge you had with this assignment?
 * Is there anything that you'd like some further information on?
 * Other stuff on your mind? work with anyone? tell us about it!

## Homework Submission
https://github.com/SEI2-jeddah/General/tree/master/homework_submission
