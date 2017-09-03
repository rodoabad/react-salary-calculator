import * as actionCreators from '../../src/action-creators';
import * as calculators from '../../src/calculators';
import Chance from 'chance';
import actions from '../../src/actions';
import sinon from 'sinon';

describe('Given the action creators for the salary calculator', () => {

    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let dispatch;

    beforeEach(() => {

        dispatch = sandbox.stub();

    });

    afterEach(() => sandbox.restore());

    context('when updating the salary', () => {

        let expectedDependents,
            expectedFederalTax,
            expectedFilingStatus,
            expectedSalary,
            expectedSocialSecurity,
            expectedTakeHome,
            expectedTaxableIncome;

        beforeEach(() => { // eslint-disable-line max-statements

            expectedDependents = chance.natural();
            expectedFederalTax = chance.natural();
            expectedFilingStatus = chance.string();
            expectedSalary = chance.natural();
            expectedSocialSecurity = chance.natural();
            expectedTakeHome = {
                takeHomeBiWeekly: chance.natural(),
                takeHomeMonthly: chance.natural(),
                takeHomeWeekly: chance.natural(),
                takeHomeYearly: chance.natural()
            };
            expectedTaxableIncome = chance.natural();

            sandbox.stub(calculators, 'getTaxableIncome').returns(expectedTaxableIncome);
            sandbox.stub(calculators, 'getFederalTax').returns(expectedFederalTax);
            sandbox.stub(calculators, 'getSocialSecurity').returns(expectedSocialSecurity);
            sandbox.stub(calculators, 'getTakeHome').returns(expectedTakeHome);

        });

        it('should update the salary', () => {

            const expectedAction = {
                dependents: expectedDependents,
                federalTax: expectedFederalTax,
                filingStatus: expectedFilingStatus,
                salary: expectedSalary,
                socialSecurity: expectedSocialSecurity,
                takeHomeBiWeekly: expectedTakeHome.takeHomeBiWeekly,
                takeHomeMonthly: expectedTakeHome.takeHomeMonthly,
                takeHomeWeekly: expectedTakeHome.takeHomeWeekly,
                takeHomeYearly: expectedTakeHome.takeHomeYearly,
                taxableIncome: expectedTaxableIncome,
                type: actions.UPDATE_SALARY
            };

            actionCreators.updateSalary(expectedSalary, expectedFilingStatus, expectedDependents)(dispatch);

            sinon.assert.calledOnce(dispatch);
            sinon.assert.calledWithExactly(dispatch, expectedAction);

        });

    });

});
