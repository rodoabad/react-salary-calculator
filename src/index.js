import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import {Provider as ReactReduxProvider} from 'react-redux';
import StateConnector from './state-connector';

import en from './i18n/en.json';

const SalaryCalculator = props =>
    <IntlProvider
        locale='en'
        messages={en}
    >
        <ReactReduxProvider store={props.store}>
            <StateConnector/>
        </ReactReduxProvider>
    </IntlProvider>;

SalaryCalculator.displayName = 'SalaryCalculator';
SalaryCalculator.propTypes = {
    store: PropTypes.object.isRequired
};

export default SalaryCalculator;
