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

    describe('when passing invalid arguments', () => {

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

    describe('when updating the salary', () => {

        it('should update the salary', () => {

            const expectedSalary = chance.natural();

            const updateSalaryAction = {
                salary: expectedSalary,
                type: actions.UPDATE_SALARY
            };

            const nextState = takeHomeReducer(initialState, updateSalaryAction);

            expect(nextState.salary).number().equal(expectedSalary);

        });

    });

});
