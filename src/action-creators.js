import * as calculators from './calculators';
import actions from './actions';

export const updateSalary = (salary, filingStatus, dependents) =>
    dispatch => {

        const taxableIncome = calculators.getTaxableIncome(salary, filingStatus, dependents);
        const federalTax = calculators.getFederalTax(taxableIncome, filingStatus, dependents);
        const socialSecurity = calculators.getSocialSecurity(salary, filingStatus);
        const {
            takeHomeBiWeekly,
            takeHomeMonthly,
            takeHomeWeekly,
            takeHomeYearly
        } = calculators.getTakeHome(salary, federalTax, socialSecurity);

        dispatch({
            dependents,
            federalTax,
            filingStatus,
            salary,
            socialSecurity,
            takeHomeBiWeekly,
            takeHomeMonthly,
            takeHomeWeekly,
            takeHomeYearly,
            taxableIncome,
            type: actions.UPDATE_SALARY
        });

    };
