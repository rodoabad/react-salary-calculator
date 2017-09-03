import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

const FilingStatus = props =>
    <section className='filing-status'>
        <FormattedMessage id='FILING_STATUS'/>
        <select
            name='filing-status'
            onChange={props.handleFilingStatusChange}
            value={props.filingStatus}
        >
            {props.filingStatuses.map(status =>
                <FormattedMessage
                    id={status.value}
                    key={status.value}
                >
                    {message => <option value={status.value}>{message}</option>}
                </FormattedMessage>
            )}
        </select>
    </section>;

FilingStatus.propTypes = {
    filingStatus: PropTypes.string.isRequired,
    filingStatuses: PropTypes.array.isRequired,
    handleFilingStatusChange: PropTypes.func.isRequired,
    salary: PropTypes.number.isRequired
};

export default FilingStatus;
