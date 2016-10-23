import * as redux from 'redux';
import * as reduxLogger from 'redux-logger';
import * as reduxThunk from 'redux-thunk';
import * as storeConfigurator from '../../src/store-configurator';
import {expect} from 'code';
import sinon from 'sinon';

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

        sandbox.stub(reduxThunk, 'default');
        sandbox.stub(reduxLogger, 'default');

        stubApplyMiddleWare();

        createdStore = storeConfigurator.create(expectedReducers);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should use the thunk middleware to support async actions', () => {

        sinon.assert.calledOnce(redux.applyMiddleware);
        sinon.assert.calledWith(redux.applyMiddleware, reduxThunk.default);

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
