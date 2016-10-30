import {getFederalTax, getTaxableIncome} from './helpers';
import actions from './actions';

export const updateSalary = salary =>
    dispatch => {

        const taxableIncome = getTaxableIncome(salary);
        const federalTax = getFederalTax(taxableIncome);

        dispatch({
            federalTax,
            salary,
            taxableIncome,
            type: actions.UPDATE_SALARY
        });

    };

export const updateFilingStatus = filingStatus =>
    dispatch => {

        dispatch({
            filingStatus,
            type: actions.UPDATE_FILING_STATUS
        })

    };

export const updateYear = newYear => ({
    newYear,
    type: actions.UPDATE_YEAR
});
