import BigNumber from 'bignumber.js';
import {additionalMedicareTax} from '../constants/medicare';

const getOldAgeSurvivorsAndDisabilityInsurance = grossIncome => {

    const INCOME_LIMIT = 118500;
    const MAXIMUM_OASDI = 7347;
    const OASDI_MULTIPLIER = 0.062;

    return grossIncome < INCOME_LIMIT ?
           new BigNumber(grossIncome)
               .times(OASDI_MULTIPLIER).toNumber() :
           MAXIMUM_OASDI;

};

const getMedicareTax = (grossIncome, filingStatus) => {

    const INITIAL_MEDICARE_MULTIPLIER = 0.0145;
    const ADDITIONAL_MEDICARE_MULTIPLER_FOR_HIGH_EARNERS = 0.009;

    const initialMedicareTax = new BigNumber(grossIncome)
        .times(INITIAL_MEDICARE_MULTIPLIER)
        .toNumber();

    if (grossIncome > additionalMedicareTax.get(filingStatus)) {

        const moreMedicareTax = new BigNumber(grossIncome)
            .minus(additionalMedicareTax.get(filingStatus))
            .times(ADDITIONAL_MEDICARE_MULTIPLER_FOR_HIGH_EARNERS)
            .toNumber();

        return new BigNumber(initialMedicareTax)
            .plus(moreMedicareTax)
            .toNumber();

    }

    return initialMedicareTax;

};

export const getSocialSecurity = (grossIncome, filingStatus) => {

    const oldAgeSurvivorsAndDisabilityInsurance = getOldAgeSurvivorsAndDisabilityInsurance(grossIncome);

    const medicarePortion = getMedicareTax(grossIncome, filingStatus);

    const socialSecurityTax = new BigNumber(oldAgeSurvivorsAndDisabilityInsurance)
        .plus(medicarePortion)
        .toNumber();

    return socialSecurityTax;

};
