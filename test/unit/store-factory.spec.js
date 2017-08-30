import * as storeConfigurator from '../../src/store-configurator';
import * as storeFactory from '../../src/store-factory';
import {expect} from 'code';
import sinon from 'sinon';

describe('Given the store factory', () => {

    let createdStore,
        expectedCreatedStore,
        sandbox,
        storeConfiguratorStub;

    const stubStoreConfigurator = () => {

        expectedCreatedStore = Object.freeze({});
        storeConfiguratorStub = sandbox.stub(storeConfigurator, 'create').returns(expectedCreatedStore);

    };

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

        stubStoreConfigurator();

        createdStore = storeFactory.getStore();

    });

    afterEach(() => {

        storeFactory.destroyStore();

        sandbox.restore();

    });

    describe('and no store exists', () => {

        it('should return a new store created by store configurator', () => {

            sinon.assert.calledOnce(storeConfiguratorStub);

            expect(createdStore).equal(expectedCreatedStore);

        });

    });

    describe('and a store has already been created', () => {

        it('should return the existing store', () => {

            const returnedStore = storeFactory.getStore();

            sinon.assert.calledOnce(storeConfiguratorStub);

            expect(returnedStore).equal(expectedCreatedStore);

        });

    });

});
