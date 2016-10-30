/* eslint-disable max-lines */

import BigNumber from 'bignumber.js';

const filingStatusSingle = 6300;

const getPersonalExemption = grossIncome => {

    if (grossIncome < 381900) {

        const deductions = grossIncome > 259400 ?
                           new BigNumber(grossIncome)
                               .minus(259400)
                               .dividedBy(2500)
                               .ceil()
                               .times(2)
                               .shift(-2)
                               .times(4050)
                               .toNumber() :
                           0;

        return new BigNumber(4050)
            .minus(deductions)
            .toNumber();

    }

    return 0;

};

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

const get33PercentRate = taxableIncome =>
    taxableIncome > 413350 ?
    new BigNumber(413350)
        .minus(190150)
        .times(0.33)
        .toNumber() :
    new BigNumber(taxableIncome)
        .minus(190150)
        .times(0.33)
        .toNumber();

const get35PercentRate = taxableIncome =>
    taxableIncome > 415050 ?
    new BigNumber(415050)
        .minus(413350)
        .times(0.35)
        .toNumber() :
    new BigNumber(taxableIncome)
        .minus(413350)
        .times(0.35)
        .toNumber();

const get39point6PercentRate = taxableIncome =>
    new BigNumber(taxableIncome)
        .minus(415050)
        .times(0.396)
        .toNumber();

const getFederalTax = taxableIncome => {

    const marginalRates = [
        get10PercentRate(taxableIncome),
        get15PercentRate(taxableIncome),
        get25PercentRate(taxableIncome),
        get28PercentRate(taxableIncome),
        get33PercentRate(taxableIncome),
        get35PercentRate(taxableIncome),
        get39point6PercentRate(taxableIncome)
    ];

    return marginalRates
        .filter(initialMarginalTax => initialMarginalTax > 0)
        .reduce((a, b) => a + b, 0);

};

const getTaxableIncome = salary => {

    const filingStatusPersonalExemption = getPersonalExemption(salary);

    const newTaxableIncome = new BigNumber(salary)
        .minus(filingStatusSingle)
        .minus(filingStatusPersonalExemption)
        .toNumber();

    return newTaxableIncome > 0 ?
           newTaxableIncome :
           0;

};

export {
    getFederalTax,
    getTaxableIncome
};

/* eslint-enable max-lines */
