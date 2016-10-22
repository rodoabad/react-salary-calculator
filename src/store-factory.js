import * as storeConfigurator from './store-configurator';
import {combineReducers} from 'redux';
import reducer from './reducer';

let store;

const createStore = () => {

    const combinedReducers = combineReducers({
        ...reducer
    });

    return storeConfigurator.create(combinedReducers);

};

export const getStore = () => {

    store = store || createStore();

    return store;

};

export const destroyStore = () => {

    let clearStore;

    store = clearStore;

};
