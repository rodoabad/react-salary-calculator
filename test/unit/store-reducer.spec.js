import Chance from 'chance';
import {expect} from 'code';
import storeReducer from '../../src/store-reducer';

const chance = new Chance();

describe('Given the store reducer', () => {

    describe('when passing invalid arguments', () => {

        it('should return the default state if you pass an undefined state', () => {

            let undefinedState;

            const nextState = storeReducer(undefinedState);

            expect(nextState).object().equal({});

        });

    });

    describe('when setting the state', () => {

        it('should return the state being set', () => {

            const expectedState = {
                [chance.hash()]: chance.string()
            };

            const nextState = storeReducer(expectedState);

            expect(nextState).object().equal(expectedState);

        });

    });

});
