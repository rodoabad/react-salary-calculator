import React, {PropTypes} from 'react';

const handleFilingStatusChange = actions => event => {

    actions.updateFilingStatus(event.target.value);

};

const FilingStatus = props =>
    <section>
        <select
            name='filing-status'
            onChange={handleFilingStatusChange(props.actions)}
            value={props.selectedFilingStatus}
        >
            {props.filingStatusList && props.filingStatusList.map((status, index) =>
                <option
                    key={index}
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
    filingStatusList: PropTypes.array.isRequired,
    selectedFilingStatus: PropTypes.string.isRequired
};

export default FilingStatus;
