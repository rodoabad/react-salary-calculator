import Chance from 'chance';
import actions from '../../src/actions';
import {expect} from 'code';
import {getDefaultState} from '../../src/state';
import takeHomeReducer from '../../src/reducer';

const chance = new Chance();

describe('Given the reducer for the salary calculator', () => {

    let initialState;

    beforeEach(() => {

        initialState = getDefaultState();

    });

    context('when passing invalid arguments', () => {

        it('should return the default state if you pass an undefined state', () => {

            const nextState = takeHomeReducer(undefined, {}); // eslint-disable-line no-undefined

            expect(nextState).object().equal(initialState);

        });

        it('should return the default state if you pass an invalid action', () => {

            const invalidAction = {
                type: chance.string()
            };

            const nextState = takeHomeReducer(undefined, invalidAction); // eslint-disable-line no-undefined

            expect(nextState).object().equal(initialState);

        });

    });

    context('when updating the salary', () => {

        const mockSalaryUpdate = () => ({
            federalTax: chance.natural(),
            filingStatus: chance.string(),
            salary: chance.natural(),
            socialSecurity: chance.natural(),
            takeHome: {
                biWeekly: chance.natural(),
                monthly: chance.natural(),
                weekly: chance.natural(),
                yearly: chance.natural()
            },
            taxableIncome: chance.natural()
        });

        it('should update the salary', () => {

            const updateSalaryAction = {
                ...mockSalaryUpdate(),
                type: actions.UPDATE_SALARY
            };

            const nextState = takeHomeReducer(initialState, updateSalaryAction);

            expect(nextState.federalTax).number().equal(updateSalaryAction.federalTax);
            expect(nextState.salary).number().equal(updateSalaryAction.salary);
            expect(nextState.filingStatus).string().equal(updateSalaryAction.filingStatus);
            expect(nextState.socialSecurity).number().equal(updateSalaryAction.socialSecurity);
            expect(nextState.takeHome).object().equal(updateSalaryAction.takeHome);
            expect(nextState.taxableIncome).number().equal(updateSalaryAction.taxableIncome);

        });

    });

});
