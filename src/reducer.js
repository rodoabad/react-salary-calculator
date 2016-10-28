import SalaryCalculator, {getDefaultState} from './state';
import actions from './actions';

const updateSalary = (state, action) =>
    SalaryCalculator.update(state, {
        salary: {
            $set: action.salary
        }
    });

const updateTaxableIncome = (state, action) =>
    SalaryCalculator.update(state, {
        taxableIncome: {
            $set: action.taxableIncome
        }
    });

const actionTypes = {
    [actions.UPDATE_SALARY]: updateSalary,
    [actions.UPDATE_TAXABLE_INCOME]: updateTaxableIncome
};

export default (state = getDefaultState(), action) => {

    const reducer = actionTypes[action.type];

    return reducer ?
           reducer(state, action) :
           state;

};
