import {expect} from 'code';
import {getTakeHome} from '../../../src/calculators/take-home';

describe('Given the take home calculator', () => {

    it('should return the right take home', () => {

        const mockGrossIncome = 100000;
        const mockFederalTax = 18138.75;
        const mockSocialSecurity = 7650.00;

        const expectedTakeHomes = {
            takeHomeBiWeekly: 2854.28,
            takeHomeMonthly: 6184.27,
            takeHomeWeekly: 1427.14,
            takeHomeYearly: 74211.25
        };

        const actualTakeHomes = getTakeHome(mockGrossIncome, mockFederalTax, mockSocialSecurity);

        expect(actualTakeHomes).equal(expectedTakeHomes);

    });

});
