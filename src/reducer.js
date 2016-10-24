import SalaryCalculator, {getDefaultState} from './state';
import actions from './actions';

const updateSalary = (state, action) =>
    SalaryCalculator.update(state, {
        salary: {
            $set: action.newSalary
        }
    });

const actionTypes = {
    [actions.UPDATE_SALARY]: updateSalary
};

export default (state = getDefaultState(), action) => {

    const reducer = actionTypes[action.type];

    return reducer ?
           reducer(state, action) :
           state;

};
