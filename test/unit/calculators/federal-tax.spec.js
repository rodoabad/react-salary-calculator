import * as helpers from '../../../src/calculators';
import Chance from 'chance';
import {expect} from 'code';

describe('Given the salary calculator methods', () => {

    let chance;

    beforeEach(() => {

        chance = new Chance();

    });

    context('when calling the `getFederalTax` method', () => {

        context('and when the taxable income is `0`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 11277.5;

                const taxableIncome = 79200;

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'MARRIED_FILING_JOINTLY');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is less than or equal to `9275`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 51060.5;

                const taxableIncome = 239600;

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'SINGLE');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `9275` but less than `37650`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 5183.75;

                const taxableIncome = helpers.getTaxableIncome(48000, 'SINGLE', 0);

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'SINGLE');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `37650` but less than `91150`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 18558.75;

                const taxableIncome = helpers.getTaxableIncome(101500, 'SINGLE', 0);

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'SINGLE');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `91150` but less than `190150`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 46278.75;

                const taxableIncome = helpers.getTaxableIncome(200500, 'SINGLE', 0);

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'SINGLE');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

        context('and when the taxable income is greater than `190150` but less than `413350`', () => {

            it('should return the marginal tax', () => {

                const expectedFederalTax = 113450.25;

                const taxableIncome = helpers.getTaxableIncome(400000, 'SINGLE', 0);

                const actualFederalTax = helpers.getFederalTax(taxableIncome, 'SINGLE');

                expect(actualFederalTax).number().equal(expectedFederalTax);

            });

        });

    });

});
