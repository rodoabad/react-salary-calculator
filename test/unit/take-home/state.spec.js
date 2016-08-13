import TakeHome, {getDefaultState} from '../../../src/take-home/state';
import {expect} from 'code';
import sinon from 'sinon';
import t from 'tcomb';

describe('Given the TakeHome state', () => {

    let sandbox;

    beforeEach(() => {

        sandbox = sinon.sandbox.create({
            useFakeTimers: true
        });

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

            const expectedYear = 1969;

            expect(defaultState.year).number().equal(expectedYear);

        });

    });

});
