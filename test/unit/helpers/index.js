import * as helpers from '../../../src/helpers';
import Chance from 'chance';
import {expect} from 'code';

describe('Given the salary calculator helper functions', () => {

    let chance;

    beforeEach(() => {

        chance = new Chance();

    });

    context('when calling the `taxableIncome` method', () => {

        it('should return `0` if the salary is less than `10351`', () => {

            const salary = chance.natural({
                max: 10350,
                min: 0
            });

            const expectedTaxableIncome = 0;

            const actualTaxableIncome = helpers.taxableIncome(salary);

            expect(actualTaxableIncome).number().equal(expectedTaxableIncome);

        });

        it('should return a taxable income greater than `0` if the salary is greater than `10350`', () => {

            const salary = 10351;

            const expectedTaxableIncome = 1;

            const actualTaxableIncome = helpers.taxableIncome(salary);

            expect(actualTaxableIncome).number().equal(expectedTaxableIncome);

        });

    });

    context('when calling the `marginalTax` method', () => {

        context('and when the taxable income is `0`', () => {

            it('should return the marginal tax', () => {

                const expectedMarginalTax = 0;

                const taxableIncome = helpers.taxableIncome(5000);

                const actualMarginalTax = helpers.marginalTax(taxableIncome);

                expect(actualMarginalTax).number().equal(expectedMarginalTax);

            });

        });

        context('and when the taxable income is less than or equal to `9275`', () => {

            it('should return the marginal tax', () => {

                const expectedMarginalTax = 927.5;

                const taxableIncome = helpers.taxableIncome(19625);

                const actualMarginalTax = helpers.marginalTax(taxableIncome);

                expect(actualMarginalTax).number().equal(expectedMarginalTax);

            });

        });

        context('and when the taxable income is greater than `9275` but less than `37650`', () => {

            it('should return the marginal tax', () => {

                const expectedMarginalTax = 5183.75;

                const taxableIncome = helpers.taxableIncome(48000);

                const actualMarginalTax = helpers.marginalTax(taxableIncome);

                expect(actualMarginalTax).number().equal(expectedMarginalTax);

            });

        });

        context('and when the taxable income is greater than `37650` but less than `91150`', () => {

            it('should return the marginal tax', () => {

                const expectedMarginalTax = 18558.75;

                const taxableIncome = helpers.taxableIncome(101500);

                const actualMarginalTax = helpers.marginalTax(taxableIncome);

                expect(actualMarginalTax).number().equal(expectedMarginalTax);

            });

        });

        context('and when the taxable income is greater than `91150` but less than `190150`', () => {

            it('should return the marginal tax', () => {

                const expectedMarginalTax = 46278.75;

                const taxableIncome = helpers.taxableIncome(200500);

                const actualMarginalTax = helpers.marginalTax(taxableIncome);

                expect(actualMarginalTax).number().equal(expectedMarginalTax);

            });

        });

    });

});
