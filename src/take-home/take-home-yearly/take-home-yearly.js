import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const TakeHomeYearly = props =>
    <section className='take-home-yearly'>
        <FormattedMessage id='TAKE_HOME_YEARLY'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.takeHomeYearly}
        />
    </section>;

TakeHomeYearly.propTypes = {
    takeHomeYearly: PropTypes.number.isRequired
};

export default TakeHomeYearly;
