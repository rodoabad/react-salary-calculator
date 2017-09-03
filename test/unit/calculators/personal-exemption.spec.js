import {expect} from 'code';
import {getPersonalExemption} from '../../../src/calculators/personal-exemption';

describe('Given the personal exemption calculator', () => {

    it('should return zero if the income is more than phase out', () => {

        const grossIncome = 500000;
        const dependents = 0;
        const filingStatus = 'SINGLE';

        const expectedPersonalExemption = 0;

        const actualPersonalExemption = getPersonalExemption(grossIncome, filingStatus, dependents);

        expect(actualPersonalExemption).equal(expectedPersonalExemption);

    });

    it('should return the correct PEP amount based on the gross income', () => {

        const grossIncome = 150000;
        const dependents = 0;
        const filingStatus = 'SINGLE';

        const expectedPersonalExemption = 4050;

        const actualPersonalExemption = getPersonalExemption(grossIncome, filingStatus, dependents);

        expect(actualPersonalExemption).equal(expectedPersonalExemption);

    });

    it('should return the correct PEP amount based on the gross income', () => {

        const grossIncome = 300000;
        const dependents = 1;
        const filingStatus = 'HEAD_OF_HOUSEHOLD';

        const expectedPersonalExemption = 7290;

        const actualPersonalExemption = getPersonalExemption(grossIncome, filingStatus, dependents);

        expect(actualPersonalExemption).equal(expectedPersonalExemption);

    });

});
