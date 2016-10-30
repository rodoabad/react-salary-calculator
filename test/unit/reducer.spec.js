import Chance from 'chance';
import actions from '../../src/actions';
import {expect} from 'code';
import {getDefaultState} from '../../src/state';
import takeHomeReducer from '../../src/reducer';

describe('Given the salary calculator reducer', () => {

    let chance,
        initialState;

    beforeEach(() => {

        chance = new Chance();

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

        let expectedFederalTax,
            expectedSalary,
            expectedTaxableIncome,
            nextState;

        beforeEach(() => {

            expectedFederalTax = chance.natural();
            expectedSalary = chance.natural();
            expectedTaxableIncome = chance.natural();

            const updateSalaryAction = {
                federalTax: expectedFederalTax,
                salary: expectedSalary,
                taxableIncome: expectedTaxableIncome,
                type: actions.UPDATE_SALARY
            };

            nextState = takeHomeReducer(initialState, updateSalaryAction);

        });

        it('should update the federal tax', () => {

            expect(nextState.federalTax).number().equal(expectedFederalTax);

        });

        it('should update the salary', () => {

            expect(nextState.salary).number().equal(expectedSalary);

        });

        it('should update the taxable income', () => {

            expect(nextState.taxableIncome).number().equal(expectedTaxableIncome);

        });

    });

});
