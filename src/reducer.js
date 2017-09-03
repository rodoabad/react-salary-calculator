import SalaryCalculator, {getDefaultState} from './state';
import actions from './actions';

const updateSalary = (state, action) =>
    SalaryCalculator.update(state, {
        $merge: {
            dependents: action.dependents,
            federalTax: action.federalTax,
            filingStatus: action.filingStatus,
            salary: action.salary,
            socialSecurity: action.socialSecurity,
            takeHomeBiWeekly: action.takeHomeBiWeekly,
            takeHomeMonthly: action.takeHomeMonthly,
            takeHomeWeekly: action.takeHomeWeekly,
            takeHomeYearly: action.takeHomeYearly,
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
