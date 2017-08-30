import * as actionCreators from '../../src/action-creators';
import * as calculators from '../../src/calculators';
import Chance from 'chance';
import actions from '../../src/actions';
import sinon from 'sinon';

const chance = new Chance();
const sandbox = sinon.sandbox.create();

describe('Given the action creators for the salary calculator', () => {

    let dispatch;

    beforeEach(() => {

        dispatch = sandbox.stub();

    });

    afterEach(() => {

        sandbox.restore();

    });

    context('when updating the salary', () => {

        let expectedFederalTax,
            expectedFilingStatus,
            expectedSalary,
            expectedSocialSecurity,
            expectedTakeHome,
            expectedTaxableIncome;

        beforeEach(() => { // eslint-disable-line max-statements

            expectedFederalTax = chance.natural();
            expectedFilingStatus = chance.string();
            expectedSalary = chance.natural();
            expectedSocialSecurity = chance.natural();
            expectedTakeHome = chance.natural();
            expectedTaxableIncome = chance.natural();

            sandbox.stub(calculators, 'getTaxableIncome').withArgs(expectedSalary, expectedFilingStatus).returns(expectedTaxableIncome);
            sandbox.stub(calculators, 'getFederalTax').withArgs(expectedTaxableIncome, expectedFilingStatus, 0).returns(expectedFederalTax);
            sandbox.stub(calculators, 'getSocialSecurity').withArgs(expectedSalary, expectedFilingStatus).returns(expectedSocialSecurity);
            sandbox.stub(calculators, 'getTakeHome').withArgs(expectedSalary, expectedFederalTax, expectedSocialSecurity).returns(expectedTakeHome);

        });

        it('should update the salary', () => {

            const expectedAction = {
                federalTax: expectedFederalTax,
                filingStatus: expectedFilingStatus,
                salary: expectedSalary,
                socialSecurity: expectedSocialSecurity,
                takeHome: expectedTakeHome,
                taxableIncome: expectedTaxableIncome,
                type: actions.UPDATE_SALARY
            };

            actionCreators.updateSalary(expectedSalary, expectedFilingStatus)(dispatch);

            sinon.assert.calledOnce(dispatch);
            sinon.assert.calledWithExactly(dispatch, expectedAction);

        });

    });

});
