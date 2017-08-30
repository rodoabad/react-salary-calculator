import {expect} from 'code';
import {getTaxableIncome} from '../../../src/calculators/taxable-income';

describe('Given the taxable income calculator', () => {

    context('and under the threshold', () => {

        it('should return the correct taxable income', () => {

            const filingStatus = 'HEAD_OF_HOUSEHOLD';
            const dependents = 0;
            const salaryRange = 100000;

            const expectedTaxableIncome = 86600;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

        it('should return the correct taxable income', () => {

            const filingStatus = 'MARRIED_FILING_JOINTLY';
            const dependents = 0;
            const salaryRange = 100000;

            const expectedTaxableIncome = 79200;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

        it('should return the correct taxable income', () => {

            const filingStatus = 'SINGLE';
            const dependents = 0;
            const salaryRange = 100000;

            const expectedTaxableIncome = 89600;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

    });

    context('and within the threshold', () => {

        it('should return the correct taxable income', () => {

            const filingStatus = 'HEAD_OF_HOUSEHOLD';
            const dependents = 0;
            const salaryRange = 300000;

            const expectedTaxableIncome = 287005;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

        it('should return the correct taxable income', () => {

            const filingStatus = 'MARRIED_FILING_JOINTLY';
            const dependents = 0;
            const salaryRange = 300000;

            const expectedTaxableIncome = 279200;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

        it('should return the correct taxable income', () => {

            const filingStatus = 'SINGLE';
            const dependents = 0;
            const salaryRange = 300000;

            const expectedTaxableIncome = 290896;

            expect(getTaxableIncome(salaryRange, filingStatus, dependents)).number().equal(expectedTaxableIncome);

        });

    });

});
