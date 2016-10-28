import BigNumber from 'bignumber.js';

const filingStatusSingle = 6300;
const filingStatusPersonalExemption = 4050;

const get10PercentRate = taxableIncome =>
    taxableIncome > 9275 ?
    new BigNumber(9275)
        .times(0.1)
        .toNumber() :
    new BigNumber(taxableIncome)
        .times(0.1)
        .toNumber();

const get15PercentRate = taxableIncome =>
    taxableIncome > 37650 ?
    new BigNumber(37650)
        .minus(9275)
        .times(0.15)
        .toNumber() :
    new BigNumber(taxableIncome)
        .minus(9275)
        .times(0.15)
        .toNumber();

const get25PercentRate = taxableIncome =>
    taxableIncome > 91150 ?
    new BigNumber(91150)
        .minus(37650)
        .times(0.25)
        .toNumber() :
    new BigNumber(taxableIncome)
        .minus(37650)
        .times(0.25)
        .toNumber();

const get28PercentRate = taxableIncome =>
    taxableIncome > 190150 ?
    new BigNumber(190150)
        .minus(91150)
        .times(0.28)
        .toNumber() :
    new BigNumber(taxableIncome)
        .minus(91150)
        .times(0.28)
        .toNumber();

const marginalTax = taxableIncome => {

    const marginalRates = [
        get10PercentRate(taxableIncome),
        get15PercentRate(taxableIncome),
        get25PercentRate(taxableIncome),
        get28PercentRate(taxableIncome)
    ];

    return marginalRates
        .filter(initialMarginalTax => initialMarginalTax > 0)
        .reduce((a, b) => a + b, 0);

};

const taxableIncome = salary => {

    const newTaxableIncome = new BigNumber(salary)
        .minus(filingStatusSingle)
        .minus(filingStatusPersonalExemption)
        .toNumber();

    return newTaxableIncome > 0 ?
           newTaxableIncome :
           0;

};

export {
    marginalTax,
    taxableIncome
};
