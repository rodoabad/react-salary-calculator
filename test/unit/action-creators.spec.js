import * as actionCreators from '../../src/action-creators';
import * as helpers from '../../src/helpers';
import Chance from 'chance';
import actions from '../../src/actions';
import {expect} from 'code';
import sinon from 'sinon';

describe('Given the action creators for salary calculator', () => {

    let chance,
        dispatch,
        sandbox;

    beforeEach(() => {

        chance = new Chance();
        sandbox = sinon.sandbox.create();

    });

    beforeEach(() => {

        dispatch = sandbox.stub();

    });

    afterEach(() => {

        sandbox.restore();

    });

    context('when updating the salary', () => {

        let expectedFederalTax,
            expectedSalary,
            expectedTaxableIncome,
            getFederalTax,
            getTaxableIncome;

        beforeEach(() => {

            expectedSalary = chance.natural();
            expectedTaxableIncome = chance.natural();
            expectedFederalTax = chance.natural();

            getTaxableIncome = sandbox.stub(helpers, 'getTaxableIncome').withArgs(expectedSalary).returns(expectedTaxableIncome);
            getFederalTax = sandbox.stub(helpers, 'getFederalTax').withArgs(expectedTaxableIncome).returns(expectedFederalTax);

            actionCreators.updateSalary(expectedSalary)(dispatch);

        });

        it('should update the salary', () => {

            const expectedAction = {
                federalTax: expectedFederalTax,
                salary: expectedSalary,
                taxableIncome: expectedTaxableIncome,
                type: actions.UPDATE_SALARY
            };

            sinon.assert.calledWithExactly(getTaxableIncome, expectedSalary);
            sinon.assert.calledWithExactly(getFederalTax, expectedTaxableIncome);

            sinon.assert.calledWithExactly(dispatch, expectedAction);

        });

    });

    context('when updating the filing status', () => {

        it('should update the filing status', () => {

            const expectedFilingStatus = chance.string();

            const expectedAction = {
                filingStatus: expectedFilingStatus,
                type: actions.UPDATE_FILING_STATUS
            };

            actionCreators.updateFilingStatus(expectedFilingStatus)(dispatch);

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
