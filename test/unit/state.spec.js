import TakeHome, {getDefaultState} from '../../src/state';
import Chance from 'chance';
import {expect} from 'code';
import {fn as moment} from 'moment';
import sinon from 'sinon';
import t from 'tcomb';

const chance = new Chance();
const sandbox = sinon.sandbox.create();

describe('Given the salary calculator state', () => {

    let mockYear;

    beforeEach(() => {

        mockYear = chance.natural();
        sandbox.stub(moment, 'year').returns(mockYear);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should have a type name', () => {

        expect(t.getTypeName(TakeHome)).string().equal('SalaryCalculator');

    });

    describe('and its default state', () => {

        let defaultState;

        beforeEach(() => {

            defaultState = getDefaultState();

        });

        it('should be the right type', () => {

            expect(TakeHome.is(defaultState)).true();

        });

        it('should have a federal tax that defaults to `0`', () => {

            const expectedFederalTax = 0;

            expect(defaultState.federalTax).number().equal(expectedFederalTax);

        });

        it('should have a filing status list', () => {

            const expectedFilingStatusList = [
                {
                    label: 'Head of Household',
                    value: 'HEAD_OF_HOUSEHOLD'
                },
                {
                    label: 'Married (Joint)',
                    value: 'MARRIED_FILING_JOINTLY'
                },
                {
                    label: 'Married (Separate)',
                    value: 'MARRIED_FILING_SEPARATELY'
                },
                {
                    label: 'Single',
                    value: 'SINGLE'
                }
            ];

            expect(defaultState.filingStatuses).array().equal(expectedFilingStatusList);

        });

        it('should have a salary that defaults to `0`', () => {

            const expectedSalary = 0;

            expect(defaultState.salary).number().equal(expectedSalary);

        });

        it('should have a filing status that defaults to `SINGLE`', () => {

            const expectedFilingStatus = 'SINGLE';

            expect(defaultState.filingStatus).string().equal(expectedFilingStatus);

        });

        it('should have tax year that defaults to the current year', () => {

            expect(defaultState.taxYear).number().equal(mockYear);

        });

        it('should have a taxable income that defaults to `0`', () => {

            const expectedTaxableIncome = 0;

            expect(defaultState.taxableIncome).number().equal(expectedTaxableIncome);

        });

    });

});
