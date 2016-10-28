import actions from './actions';
import {taxableIncome as getTaxableIncome} from './helpers';

export const updateSalary = salary =>
    dispatch => {

        const taxableIncome = getTaxableIncome(salary);

        dispatch({
            salary,
            type: actions.UPDATE_SALARY
        });

        dispatch({
            taxableIncome,
            type: actions.UPDATE_TAXABLE_INCOME
        });

    };

export const updateYear = newYear => ({
    newYear,
    type: actions.UPDATE_YEAR
});
