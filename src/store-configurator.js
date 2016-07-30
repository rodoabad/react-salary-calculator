import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

export const create = reducers => {

    const middlewareStoreCreator = compose(
        applyMiddleware(thunk)
    )(createStore);

    return middlewareStoreCreator(reducers);

};
