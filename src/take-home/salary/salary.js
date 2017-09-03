import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const Salary = props =>
    <section className='salary'>
        <FormattedMessage id='SALARY'/>
        <input
            min='0'
            onChange={props.handleSalaryChange}
            type='number'
            value={props.salary}
        />
    </section>;

Salary.propTypes = {
    handleSalaryChange: PropTypes.func.isRequired,
    salary: PropTypes.number.isRequired
};

export default Salary;
