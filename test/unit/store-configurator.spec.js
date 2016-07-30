import * as redux from 'redux';
import * as storeConfigurator from '../../src/store-configurator';
import {expect} from 'code';
import sinon from 'sinon';
import thunk from 'redux-thunk';

describe('Given the store configurator', () => {

    let createdStore,
        expectedReducers,
        middlewareStoreCreatorStub,
        sandbox,
        storeConstructorStub,
        storeInstanceStub;

    const stubApplyMiddleWare = () => {

        storeInstanceStub = sandbox.stub();
        middlewareStoreCreatorStub = sandbox.stub().returns(storeInstanceStub);
        storeConstructorStub = sandbox.stub().returns(middlewareStoreCreatorStub);

        sandbox.stub(redux, 'applyMiddleware').returns(storeConstructorStub);

    };

    beforeEach(() => {

        expectedReducers = {};

        sandbox = sinon.sandbox.create();

        stubApplyMiddleWare();

        createdStore = storeConfigurator.create(expectedReducers);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should use the thunk middleware to support async actions', () => {

        sinon.assert.calledOnce(redux.applyMiddleware);
        sinon.assert.calledWithExactly(redux.applyMiddleware, thunk);

    });

    it('should use the store creator with the thunk middleware', () => {

        sinon.assert.calledOnce(storeConstructorStub);
        sinon.assert.calledWithExactly(storeConstructorStub, redux.createStore);

    });

    it('should pass the reducers to the middleware store creator', () => {

        sinon.assert.calledOnce(middlewareStoreCreatorStub);
        sinon.assert.calledWithExactly(middlewareStoreCreatorStub, expectedReducers);

    });

    it('should return the store instance', () => {

        expect(createdStore).function().equal(storeInstanceStub);

    });

});
