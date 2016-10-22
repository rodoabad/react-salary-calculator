import actions from './actions';

export const updateSalary = newSalary => ({
    newSalary,
    type: actions.UPDATE_SALARY
});

export const updateYear = newYear => ({
    newYear,
    type: actions.UPDATE_YEAR
});
