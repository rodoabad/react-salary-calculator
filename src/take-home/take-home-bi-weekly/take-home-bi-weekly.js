import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const TakeHomeBiWeekly = props =>
    <section className='take-home-bi-weekly'>
        <FormattedMessage id='TAKE_HOME_BI_WEEKLY'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.takeHomeBiWeekly}
        />
    </section>;

TakeHomeBiWeekly.propTypes = {
    takeHomeBiWeekly: PropTypes.number.isRequired
};

export default TakeHomeBiWeekly;
