
function currencyConverter(amount , type){
	if(type==="USD"){
ryal=amount*3.75
console.log(amount + " dollar in Saudi riyals is "+ryal)
	}else if(type==="GBP"){
ryal=amount*3.85
console.log(amount + " British Pound in Saudi riyals is "+ryal)
}else if(type==="EGP"){
ryal=amount*4.68
console.log(amount + " Egyptian pound  in Saudi riyals is "+ryal)

}else if(type==="BD"){
ryal=amount*0.10
console.log(amount + " Bahraini dinar in Saudi riyals is "+ryal)

} else console.log("pleas enter a supported type")
}

currencyConverter(1,"USD");
currencyConverter(1,"GBP");
currencyConverter(1,"EGP");
currencyConverter(1,"BD");
currencyConverter(1,"KWD");

function isCharacterAVowel(char){
	if(char==="o"||char==="O"||char==="e"||char==="E"||
		char=="a"||char=="A"||char=="u"||char=="U"){
		console.log(char+ " is a vowel")
	}else console.log(char+ " is a Not vowel")
}

isCharacterAVowel("x")
isCharacterAVowel("o")

function pow (base,ex) {
	var num = base**ex
	console.log(base + " to the power of " + ex + " is equel to "+ num)
}

pow(2,2);
pow(3,3)
