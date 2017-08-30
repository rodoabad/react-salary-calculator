import * as calculators from './calculators';
import actions from './actions';

export const updateSalary = (salary, filingStatus) =>
    dispatch => {

        const dependents = 0;

        const taxableIncome = calculators.getTaxableIncome(salary, filingStatus, dependents);
        const federalTax = calculators.getFederalTax(taxableIncome, filingStatus, dependents);
        const socialSecurity = calculators.getSocialSecurity(salary, filingStatus);
        const takeHome = calculators.getTakeHome(salary, federalTax, socialSecurity);

        dispatch({
            federalTax,
            filingStatus,
            salary,
            socialSecurity,
            takeHome,
            taxableIncome,
            type: actions.UPDATE_SALARY
        });

    };
