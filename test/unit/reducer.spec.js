import Chance from 'chance';
import actions from '../../src/actions';
import {expect} from 'code';
import {getDefaultState} from '../../src/state';
import takeHomeReducer from '../../src/reducer';

describe('Given the reducer for the salary calculator', () => {

    const chance = new Chance();

    let initialState;

    beforeEach(() => {

        initialState = getDefaultState();

    });

    context('when passing invalid arguments', () => {

        it('should return the default state if you pass an undefined state', () => {

            const nextState = takeHomeReducer(undefined, {}); // eslint-disable-line no-undefined

            expect(nextState).equal(initialState);

        });

        it('should return the default state if you pass an invalid action', () => {

            const invalidAction = {
                type: chance.string()
            };

            const nextState = takeHomeReducer(undefined, invalidAction); // eslint-disable-line no-undefined

            expect(nextState).equal(initialState);

        });

    });

    context('when updating the salary', () => {

        const mockSalaryUpdate = () => ({
            dependents: chance.natural(),
            federalTax: chance.natural(),
            filingStatus: chance.string(),
            salary: chance.natural(),
            socialSecurity: chance.natural(),
            takeHomeBiWeekly: chance.natural(),
            takeHomeMonthly: chance.natural(),
            takeHomeWeekly: chance.natural(),
            takeHomeYearly: chance.natural(),
            taxableIncome: chance.natural()
        });

        it('should update the salary', () => {

            const updateSalaryAction = {
                ...mockSalaryUpdate(),
                type: actions.UPDATE_SALARY
            };

            const nextState = takeHomeReducer(initialState, updateSalaryAction);

            expect(nextState.dependents).equal(updateSalaryAction.dependents);
            expect(nextState.federalTax).equal(updateSalaryAction.federalTax);
            expect(nextState.salary).equal(updateSalaryAction.salary);
            expect(nextState.filingStatus).equal(updateSalaryAction.filingStatus);
            expect(nextState.socialSecurity).equal(updateSalaryAction.socialSecurity);
            expect(nextState.takeHomeBiWeekly).equal(updateSalaryAction.takeHomeBiWeekly);
            expect(nextState.takeHomeMonthly).equal(updateSalaryAction.takeHomeMonthly);
            expect(nextState.takeHomeWeekly).equal(updateSalaryAction.takeHomeWeekly);
            expect(nextState.takeHomeYearly).equal(updateSalaryAction.takeHomeYearly);
            expect(nextState.taxableIncome).equal(updateSalaryAction.taxableIncome);

        });

    });

});
