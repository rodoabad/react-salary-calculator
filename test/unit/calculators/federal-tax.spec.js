import {expect} from 'code';
import {getFederalTax} from '../../../src/calculators/federal-tax';

describe('Given the federal tax calculator', () => {

    it('should return the marginal tax', () => {

        const expectedFederalTax = 11277.5;

        const taxableIncome = 79200;

        const actualFederalTax = getFederalTax(taxableIncome, 'MARRIED_FILING_JOINTLY');

        expect(actualFederalTax).number().equal(expectedFederalTax);

    });

    it('should return the marginal tax', () => {

        const expectedFederalTax = 62467.25;

        const taxableIncome = 239600;

        const actualFederalTax = getFederalTax(taxableIncome, 'SINGLE');

        expect(actualFederalTax).number().equal(expectedFederalTax);

    });

});

