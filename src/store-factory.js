import * as storeConfigurator from './store-configurator';
import storeReducer from './store-reducer';

let store;

const createStore = () => {

    const reducer = storeReducer;

    return storeConfigurator.create(reducer);

};

export const getStore = () => {

    store = store || createStore();

    return store;

};

export const destroyStore = () => {

    let clearStore;

    store = clearStore;

};
