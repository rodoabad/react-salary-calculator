import {getFederalTax, getSocialSecurity, getTaxableIncome} from './calculators';
import actions from './actions';

export const updateSalary = salary =>
    dispatch => {

        const filingStatus = 'SINGLE';
        const dependents = 0;

        const taxableIncome = getTaxableIncome(salary, filingStatus, dependents);
        const federalTax = getFederalTax(taxableIncome, filingStatus, dependents);
        const socialSecurity = getSocialSecurity(salary, filingStatus);

        dispatch({
            federalTax,
            salary,
            socialSecurity,
            taxableIncome,
            type: actions.UPDATE_SALARY
        });

    };

export const updateFilingStatus = filingStatus =>
    dispatch => {

        dispatch({
            filingStatus,
            type: actions.UPDATE_FILING_STATUS
        });

    };

export const updateYear = newYear => ({
    newYear,
    type: actions.UPDATE_YEAR
});
