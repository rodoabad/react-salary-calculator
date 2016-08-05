import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';

const SalaryCalculator = props =>
    <Provider store={props.store}>
    </Provider>;

SalaryCalculator.displayName = 'SalaryCalculator';
SalaryCalculator.propTypes = {
    store: PropTypes.object.isRequired
};

export default SalaryCalculator;
