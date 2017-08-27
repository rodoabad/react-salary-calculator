import SalaryCalculator, {getDefaultState} from './state';
import actions from './actions';

const updateSalary = (state, action) =>
    SalaryCalculator.update(state, {
        $merge: {
            federalTax: action.federalTax,
            salary: action.salary,
            socialSecurity: action.socialSecurity,
            taxableIncome: action.taxableIncome
        }
    });

const actionTypes = {
    [actions.UPDATE_SALARY]: updateSalary
};

const nextState = (state = getDefaultState(), action) => {

    const reducer = actionTypes[action.type];

    return reducer ?
           reducer(state, action) :
           state;

};

export default nextState;
