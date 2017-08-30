import React, {PropTypes} from 'react';

import {Provider as ReactReduxProvider} from 'react-redux';
import StateConnector from './state-connector';

const SalaryCalculator = props =>
    <ReactReduxProvider store={props.store}>
        <StateConnector/>
    </ReactReduxProvider>;

SalaryCalculator.displayName = 'SalaryCalculator';
SalaryCalculator.propTypes = {
    store: PropTypes.object.isRequired
};

export default SalaryCalculator;
