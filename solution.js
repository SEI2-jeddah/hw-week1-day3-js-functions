### currencyConverter(currency, amount)

'''
function currencyConverter(currency, amount){
if (currency == 'USD')
{
	let newamount =  amount * 3.75 
	console.log(newamount)
}
else if (currency == 'GBP')
{
	let newamount =  amount * 4.85 
	console.log(newamount)
}
if (currency == 'EGP')
{
	let newamount =  amount * 4.32 
	console.log(newamount)
}
if (currency == 'DHB')
{
	let newamount = amount*0.100 
	console.log(newamount)
}
}

currencyConverter('EGP', 400)

'''


### isCharacterAVowel(character)
''' 
function isCharacterAVowel(ch){
if (ch == 'a'||ch == 'i' || ch == 'u'||ch == 'o'||ch == 'e' ){
	console.log(true)
}
else {
	console.log(false)
}
    
}
isCharacterAVowel('f')

'''
### pow(base, exponent)
'''
function powNumber(num1,num2){ 
  console.log(num1**num2)
}
powNumber(2,3)
'''


