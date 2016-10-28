import BigNumber from 'bignumber.js';

const filingStatusSingle = 6300;
const filingStatusPersonalExemption = 4050;

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
    taxableIncome
};
