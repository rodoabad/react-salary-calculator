import * as storeFactory from '../src/store-factory';
import React from 'react';
import ReactDom from 'react-dom';
import SalaryCalculator from '../src';

const store = storeFactory.getStore();

ReactDom.render(
    <SalaryCalculator store={store}/>,
    document.getElementById('content')
);
