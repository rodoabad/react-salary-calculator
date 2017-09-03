import {FormattedMessage, FormattedNumber} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const SocialSecurity = props =>
    <section className='social-security'>
        <FormattedMessage id='SOCIAL_SECURITY'/>
        <FormattedNumber
            currency='USD'
            currencyDisplay='symbol'
            style='currency'
            value={props.socialSecurity}
        />
    </section>;

SocialSecurity.propTypes = {
    socialSecurity: PropTypes.number.isRequired
};

export default SocialSecurity;
