function currencyConventer(saudiRiyal) {
    let usd =  3.75;
    let gbp = 4.61;
    let egp = 0.23;
    let bd = 9.95;

    console.log("SAR to USD " + Math.round(saudiRiyal * usd)); 
    console.log("SAR to BGP " + Math.round(saudiRiyal * gbp)); 
    console.log("SAR to EGP " + Math.round(saudiRiyal * egp)); 
    console.log("SAR to BD " + Math.round(saudiRiyal * bd)); 



}

currencyConventer(44);
