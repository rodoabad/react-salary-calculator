import PropTypes from 'prop-types';
import React from 'react';

const handleFilingStatusChange = props => event => {

    const newFilingStatus = event.target.value;

    props.actions.updateSalary(props.salary, newFilingStatus);

};

const FilingStatus = props =>
    <section className='filing-status'>
        <select
            name='filing-status'
            onChange={handleFilingStatusChange(props)}
            value={props.filingStatus}
        >
            {props.filingStatuses.map(status =>
                <option
                    key={status.value}
                    value={status.value}
                >
                    {status.label}
                </option>
            )}
        </select>
    </section>;

FilingStatus.displayName = 'FilingStatus';
FilingStatus.propTypes = {
    actions: PropTypes.object.isRequired,
    filingStatus: PropTypes.string.isRequired,
    filingStatuses: PropTypes.array.isRequired,
    salary: PropTypes.number.isRequired
};

export default FilingStatus;
