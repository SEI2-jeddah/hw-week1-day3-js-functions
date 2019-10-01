
// currencyConverter
var usd = 3.75
var gbp = 4.60
var egp = 0.23
var db = 9.84

function currencyConverter(amount, currency) {
	let sum = amount * currency
	if(currency == usd)	{
		return sum * usd;
	}else if(currency == gbp) {
		return sum * gbp;
	}else if(currency == egp) {
		return sum * egp;
	}else if(currency == db) {
		return sum * db;
	}
}
currencyConverter(2,usd);


// isCharacter AVowel
function isCharacterAVowel(string) {
	let letter = string.charAt(1);
	console.log();
	if(letter === "i" || letter === "e" || letter === "a") {
		return true;
	} else {
		return false;
	}
}
isCharacterAVowel("bee")


//pow(base, exponent)
function pow(base, exponent) {
	let result = base ** exponent
	console.log(result) 
}
pow(2,3);
