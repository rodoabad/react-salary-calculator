import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const TaxableIncome = props =>
    <section className='taxable-income'>
        <FormattedMessage id='TAXABLE_INCOME'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.taxableIncome}
        />
    </section>;

TaxableIncome.propTypes = {
    taxableIncome: PropTypes.number.isRequired
};

export default TaxableIncome;
