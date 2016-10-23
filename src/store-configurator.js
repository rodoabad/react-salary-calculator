import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
    duration: true
});

export const create = reducers => {

    const middlewareStoreCreator = compose(
        applyMiddleware(thunk, logger)
    )(createStore);

    return middlewareStoreCreator(reducers);

};
