import TakeHome, {getDefaultState} from './state';
import actions from './actions';

const updateSalary = (state, action) =>
    TakeHome.update(state, {
        salary: {
            $set: action.newSalary
        }
    });

export default (state = getDefaultState(), action) => {

    const actionTypes = {
        [actions.UPDATE_SALARY]: updateSalary
    };

    const reducer = actionTypes[action.type];

    return reducer ?
           reducer(state, action) :
           state;

};
