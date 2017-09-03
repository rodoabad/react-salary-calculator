import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const TakeHomeMonthly = props =>
    <section className='take-home-monthly'>
        <FormattedMessage id='TAKE_HOME_MONTHLY'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.takeHomeMonthly}
        />
    </section>;

TakeHomeMonthly.propTypes = {
    takeHomeMonthly: PropTypes.number.isRequired
};

export default TakeHomeMonthly;
