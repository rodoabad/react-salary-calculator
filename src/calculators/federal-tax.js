import BigNumber from 'bignumber.js';
import {taxBrackets} from '../constants/tax-brackets';

const getBracketRate = (taxableIncome, filingStatus, multiplier) => {

    const bracketBegin = taxBrackets.get(filingStatus)[multiplier].begin;
    const bracketEnd = taxBrackets.get(filingStatus)[multiplier].end;

    return taxableIncome > bracketEnd ?
           new BigNumber(bracketEnd)
               .minus(bracketBegin)
               .times(multiplier)
               .toNumber() :
           new BigNumber(taxableIncome)
               .minus(bracketBegin)
               .times(multiplier)
               .toNumber();

};

const get39point6PercentRate = (taxableIncome, filingStatus) => {

    const multiplier = 0.396;
    const bracketBegin = taxBrackets.get(filingStatus)[multiplier].begin;

    return new BigNumber(taxableIncome)
        .minus(bracketBegin)
        .times(multiplier)
        .toNumber();

};

export const getFederalTax = (taxableIncome, filingStatus) => {

    const marginalRates = [
        getBracketRate(taxableIncome, filingStatus, 0.1),
        getBracketRate(taxableIncome, filingStatus, 0.15),
        getBracketRate(taxableIncome, filingStatus, 0.25),
        getBracketRate(taxableIncome, filingStatus, 0.28),
        getBracketRate(taxableIncome, filingStatus, 0.33),
        getBracketRate(taxableIncome, filingStatus, 0.35),
        get39point6PercentRate(taxableIncome, filingStatus)
    ];

    return marginalRates.reduce((totalMarginalTax, currentMarginalTax) => {

        if (currentMarginalTax > 0) {

            return new BigNumber(totalMarginalTax)
                .plus(currentMarginalTax)
                .round(2)
                .toNumber();

        }

        return totalMarginalTax;

    }, 0);

};
