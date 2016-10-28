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

});
