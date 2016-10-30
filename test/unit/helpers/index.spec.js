import * as helpers from '../../../src/helpers';
import Chance from 'chance';
import {expect} from 'code';

describe('Given the salary calculator helper functions', () => {

    let chance;

    beforeEach(() => {

        chance = new Chance();

    });

    context('when calling the `getTaxableIncome` method', () => {

        it('should return `0` if the salary is less than `10351`', () => {

            const salary = chance.natural({
                max: 10350,
                min: 0
            });

            const expectedTaxableIncome = 0;

            const actualTaxableIncome = helpers.getTaxableIncome(salary);

            expect(actualTaxableIncome).number().equal(expectedTaxableIncome);

        });

        it('should return a taxable income greater than `0` if the salary is greater than `10350`', () => {

            const salary = 10351;

            const expectedTaxableIncome = 1;

            const actualTaxableIncome = helpers.getTaxableIncome(salary);

            expect(actualTaxableIncome).number().equal(expectedTaxableIncome);

        });

        it('should return a reduced taxable income if the salary is between the phaseout threshold', () => {

            const salary = 400000;

            const expectedTaxableIncome = 393700.00;

            const actualTaxableIncome = helpers.getTaxableIncome(salary);

            expect(actualTaxableIncome).number().equal(expectedTaxableIncome);

        });

    });

    context('when calling the `getFederalTax` method', () => {

        context('and when the taxable income is `0`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 0;

                const taxableIncome = helpers.getTaxableIncome(5000);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is less than or equal to `9275`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 927.5;

                const taxableIncome = helpers.getTaxableIncome(19625);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `9275` but less than `37650`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 5183.75;

                const taxableIncome = helpers.getTaxableIncome(48000);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `37650` but less than `91150`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 18558.75;

                const taxableIncome = helpers.getTaxableIncome(101500);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `91150` but less than `190150`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 46278.75;

                const taxableIncome = helpers.getTaxableIncome(200500);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `190150` but less than `413350`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 113450.25;

                const taxableIncome = helpers.getTaxableIncome(400000);

                const actualFederalTax = helpers.getFederalTax(taxableIncome);

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

    });

});
