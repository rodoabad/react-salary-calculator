import * as storeConfigurator from './store-configurator';

let store;

const createStore = () => {

    const reducer = {};

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
