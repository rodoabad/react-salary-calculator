import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const Dependents = props =>
    <section className='dependents'>
        <FormattedMessage id='NUMBER_OF_DEPENDENTS'/>
        <input
            min='0'
            onChange={props.handleDependentsChange}
            type='number'
            value={props.dependents}
        />
    </section>;

Dependents.propTypes = {
    dependents: PropTypes.number.isRequired,
    handleDependentsChange: PropTypes.func.isRequired
};

export default Dependents;
