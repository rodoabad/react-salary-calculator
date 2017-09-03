import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const TakeHomeWeekly = props =>
    <section className='take-home-weekly'>
        <FormattedMessage id='TAKE_HOME_WEEKLY'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.takeHomeWeekly}
        />
    </section>;

TakeHomeWeekly.propTypes = {
    takeHomeWeekly: PropTypes.number.isRequired
};

export default TakeHomeWeekly;
