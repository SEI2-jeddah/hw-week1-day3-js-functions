# Functions - Problem Set

## Problems

### currencyConverter(currency, amount)

Define a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns the converted version of the amount in Riyals. Use the if-then-else construct available in Javascript.

**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar

function currencyConverter (amount,currency)
{
  if (currency == "USD")
  {
    return 3.75 * amount +" Riyal"
  }
  else if (currency == "GBP")
  {
    return 4.62 * amount +" Riyal"
  }
  else if (currency == "EGP")
  {
    return 0.23 * amount +" Riyal"
  }
  else if (currency == "BD")
  {
    return 9.95 * amount +" Riyal"
  }
    
}
currencyConverter(100,"BD")
---

### isCharacterAVowel(character)

Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel (chr)
{
  if (chr == "A" ||chr == "E" ||chr == "I" ||chr == "O"|| chr == "U")
  {
    return true
  }
  else if ( chr== "a"|| chr == "e"|| chr == "i"||chr == "o"|| chr == "u")
  {
    return true
  }
  else 
  {
    return false
  }
}
isCharacterAVowel("A")
---

### pow(base, exponent)

Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.

function pow (number , power)
{
  if (power == 1)
  {
    return number
  }
  else if (power == 0)
  {
    return 1
  }
  else 
  {
    return number * pow(number, power - 1);
  }
}
pow (2,2)
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
