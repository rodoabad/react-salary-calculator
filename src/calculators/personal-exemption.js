import BigNumber from 'bignumber.js';
import {phaseOutRange} from '../constants/phase-out-range';

const PERSONAL_EXEMPTION_AMOUNT = 4050;
const TWO_PERCENT = 2;
const PHASE_OUT_FRACTIONAL_PORTION = 2500;

const getAdjustedDependents = (dependents, filingStatus) => {

    if (filingStatus === 'MARRIED_FILING_JOINTLY') {

        const SPOUSE = 1;

        return dependents + SPOUSE;

    }

    return dependents;

};

/**
 * An individual can always claim one personal exemption for oneself
 * in addition to the number of exemptions for each person claimed as a dependent.
 * @param dependents {number} number of dependents to claim
 */

const getTotalExemptions = dependents =>
    new BigNumber(dependents)
        .times(PERSONAL_EXEMPTION_AMOUNT)
        .plus(PERSONAL_EXEMPTION_AMOUNT)
        .toNumber();

const getDeductions = (grossIncome, phaseOutBegins, dependents) => {

    if (grossIncome < phaseOutBegins) {

        return 0;

    }

    return new BigNumber(grossIncome)
        .minus(phaseOutBegins)
        .dividedBy(PHASE_OUT_FRACTIONAL_PORTION)
        .ceil()
        .times(TWO_PERCENT)
        .shift(-2)
        .times(getTotalExemptions(dependents))
        .toNumber();

};

const checkIfWithinPhaseoutBeginsRange = (grossIncome, phaseOutBegins, dependents) => {

    const deductions = getDeductions(grossIncome, phaseOutBegins, dependents);
    const totalDependents = getTotalExemptions(dependents);

    return new BigNumber(totalDependents)
        .minus(deductions)
        .round(2)
        .toNumber();

};

export const getPersonalExemption = (grossIncome, filingStatus, dependents) => {

    const phaseOutBegins = phaseOutRange.get(filingStatus).begin;
    const phaseOutEnds = phaseOutRange.get(filingStatus).end;

    const adjustedDependents = getAdjustedDependents(dependents, filingStatus);

    return grossIncome < phaseOutEnds ?
           checkIfWithinPhaseoutBeginsRange(grossIncome, phaseOutBegins, adjustedDependents) :
           0;

};
