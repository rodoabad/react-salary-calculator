import * as redux from 'redux';
import * as storeConfigurator from '../../src/store-configurator';
import {expect} from 'code';
import sinon from 'sinon';
import thunk from 'redux-thunk';

describe('Given the store configurator', () => {
    let applyMiddlewareStub,
        expectedReducers,
        middlewareStoreCreatorStub,
        sandbox,
        storeConstructorStub,
        storeInstanceStub;

    beforeEach(() => {

        expectedReducers = {};

        sandbox = sinon.sandbox.create();

        storeInstanceStub = sandbox.stub();
        middlewareStoreCreatorStub = sandbox.stub().returns(storeInstanceStub);
        storeConstructorStub = sandbox.stub().returns(middlewareStoreCreatorStub);

        applyMiddlewareStub = sandbox.stub(redux, 'applyMiddleware').returns(storeConstructorStub);

    });

    afterEach(() => {

        sandbox.restore();

    });

    describe('when configuring the store', () => {

        let storeInstance;

        beforeEach(() => {

            storeInstance = storeConfigurator.create(expectedReducers);

        });

        it('should apply all middlewares', () => {

            const expectedMiddlewaresToApply = [
                thunk
            ];

            sinon.assert.calledOnce(applyMiddlewareStub);
            sinon.assert.calledWithExactly(applyMiddlewareStub, ...expectedMiddlewaresToApply);

        });

        it('should have a composed function with all the middleware applied', () => {

            sinon.assert.calledOnce(storeConstructorStub);
            sinon.assert.calledWithExactly(storeConstructorStub, redux.createStore);

        });

        it('should pass the reducers to the store creator', () => {

            sinon.assert.calledOnce(middlewareStoreCreatorStub);
            sinon.assert.calledWithExactly(middlewareStoreCreatorStub, expectedReducers);

        });

        it('should return the store instance', () => {

            expect(storeInstance).function().equal(storeInstanceStub);

        });

    });

});
