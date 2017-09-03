import * as actionCreators from '../../action-creators';
import FilingStatus from './filing-status';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    dependents: state.dependents,
    filingStatus: state.filingStatus,
    filingStatuses: state.filingStatuses,
    salary: state.salary
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    handleFilingStatusChange: event => {

        const newFilingStatus = event.target.value;

        dispatchProps.updateSalary(stateProps.salary, newFilingStatus, stateProps.dependents);

    }
});

export default connect(mapStateToProps, actionCreators, mergeProps)(FilingStatus);
