import TakeHome, {getDefaultState} from '../../src/state';
import Chance from 'chance';
import {expect} from 'code';
import {fn as moment} from 'moment';
import sinon from 'sinon';
import t from 'tcomb';

describe('Given the TakeHome state', () => {

    let chance,
        mockYear,
        sandbox;

    beforeEach(() => {

        chance = new Chance();
        sandbox = sinon.sandbox.create();

        mockYear = chance.natural();
        sandbox.stub(moment, 'year').returns(mockYear);

    });

    afterEach(() => sandbox.restore());

    it('should have a type name', () => {

        expect(t.getTypeName(TakeHome)).string().equal('TakeHome');

    });

    describe('and its default state', () => {

        let defaultState;

        beforeEach(() => {

            defaultState = getDefaultState();

        });

        it('should be the right type', () => {

            expect(TakeHome.is(defaultState)).true();

        });

        it('should have `salary`', () => {

            const expectedSalary = 0;

            expect(defaultState.salary).number().equal(expectedSalary);

        });

        it('should have `year`', () => {

            expect(defaultState.taxYear).number().equal(mockYear);

        });

    });

    describe('and when initialized with actual data', () => {

        let takeHome;

        beforeEach(() => {

            takeHome = new TakeHome({
                salary: 1000,
                taxYear: 0
            });

        });

        it('should return the yearly income', () => {

            const expectedYearlyIncome = 83.33;

            expect(takeHome.yearlyIncome()).number().equal(expectedYearlyIncome);

        });

    });

});
