import * as storeConfigurator from './store-configurator';
import reducer from './reducer';

let store;

const createStore = () => storeConfigurator.create(reducer);

export const getStore = () => {

    store = store || createStore();

    return store;

};

export const destroyStore = () => {

    let clearStore;

    store = clearStore;

};
