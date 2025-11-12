test("1 euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;

    expect(fromEuroToDollar(1)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1 dollar should be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 / 1.07 * 156.5;

    expect(fromDollarToYen(1)).toBe(expected);
})

test("10 yen should be 3,09 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(10);
    const expected = 10 / 156.5 * 0.87;
    
    expect(fromYenToPound(10)).toBe(expected);
})