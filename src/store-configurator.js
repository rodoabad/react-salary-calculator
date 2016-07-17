import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

export const create = reducers => {

    const middlewares = [
        thunk
    ];

    const middlewareStoreCreator = compose(
        applyMiddleware(...middlewares)
    )(createStore);

    return middlewareStoreCreator(reducers);

};
