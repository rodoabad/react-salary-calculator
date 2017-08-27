import BigNumber from 'bignumber.js';
import {getPersonalExemption} from './personal-exemption';
import {standardDeduction} from '../constants/standard-deduction';

const getTaxableIncome = (salary, filingStatus, dependents) => {

    const personalExemption = getPersonalExemption(salary, filingStatus, dependents);

    const newTaxableIncome = new BigNumber(salary)
        .minus(standardDeduction.get(filingStatus))
        .minus(personalExemption)
        .toNumber();

    return newTaxableIncome > 0 ?
           newTaxableIncome :
           0;

};

export {
    getTaxableIncome
};
