import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import TakeHome from './take-home';

const SalaryCalculator = props =>
    <Provider store={props.store}>
        <TakeHome/>
    </Provider>;

SalaryCalculator.displayName = 'SalaryCalculator';
SalaryCalculator.propTypes = {
    store: PropTypes.object.isRequired
};

export default SalaryCalculator;
