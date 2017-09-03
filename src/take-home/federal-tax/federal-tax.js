import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const FederalTax = props =>
    <section className='federal-tax'>
        <FormattedMessage id='FEDERAL_TAX'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.federalTax}
        />
    </section>;

FederalTax.propTypes = {
    federalTax: PropTypes.number.isRequired
};

export default FederalTax;
