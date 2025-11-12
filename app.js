let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//euro a dollar = euro * usd 
//de dolar a euro a yen = dollar / euro * yen
// de yen a euro a libra = yen / euro * pound


const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}


const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar/ 1.07
    let valueInYen = valueInEuro * 156.5;
    
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

    module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound}
