import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import StateConnector from './state-connector';

const SalaryCalculator = props =>
    <Provider store={props.store}>
        <StateConnector/>
    </Provider>;

SalaryCalculator.displayName = 'SalaryCalculator';
SalaryCalculator.propTypes = {
    store: PropTypes.object.isRequired
};

export default SalaryCalculator;
