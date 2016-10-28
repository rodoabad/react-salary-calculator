import * as actionCreators from '../../src/action-creators';
import * as helpers from '../../src/helpers';
import Chance from 'chance';
import actions from '../../src/actions';
import {expect} from 'code';
import sinon from 'sinon';

describe('Given the action creators for salary calculator', () => {

    let chance,
        sandbox;

    beforeEach(() => {

        chance = new Chance();
        sandbox = sinon.sandbox.create();

    });

    afterEach(() => {

        sandbox.restore();

    });

    context('when updating the salary', () => {

        let dispatch,
            expectedSalary,
            expectedTaxableIncome,
            getTaxableIncome;

        beforeEach(() => {

            expectedSalary = chance.natural();
            expectedTaxableIncome = chance.natural();

            dispatch = sandbox.stub();
            getTaxableIncome = sandbox.stub(helpers, 'taxableIncome').withArgs(expectedSalary).returns(expectedTaxableIncome);

            actionCreators.updateSalary(expectedSalary)(dispatch);

        });

        it('should update the salary', () => {

            const expectedAction = {
                salary: expectedSalary,
                type: actions.UPDATE_SALARY
            };

            sinon.assert.calledWithExactly(dispatch, expectedAction);

        });

        it('should update the taxable income', () => {

            const expectedAction = {
                taxableIncome: expectedTaxableIncome,
                type: actions.UPDATE_TAXABLE_INCOME
            };

            sinon.assert.calledWithExactly(getTaxableIncome, expectedSalary);
            sinon.assert.calledWithExactly(dispatch, expectedAction);

        });

    });

    context('when updating the year', () => {

        let updateYearAction;

        beforeEach(() => {

            updateYearAction = actionCreators.updateYear(2016);

        });

        it('should have a type', () => {

            expect(updateYearAction.type).string().equal(actions.UPDATE_YEAR);

        });

        it('should have a new salary', () => {

            const expectedNewYear = 2016;

            expect(updateYearAction.newYear).number().equal(expectedNewYear);

        });

    });

});
