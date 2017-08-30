import * as actionCreators from '../../action-creators';
import FilingStatus from './filing-status';
import {connect} from 'react-redux';

const getStateToBindToContainerProps = state => ({
    filingStatus: state.filingStatus,
    filingStatuses: state.filingStatuses,
    salary: state.salary
});

const mapBoundActionCreatorsToActionProp = (stateProps, dispatchProps) => ({
    ...stateProps,
    actions: {
        ...dispatchProps
    }
});

export default connect(getStateToBindToContainerProps, actionCreators, mapBoundActionCreatorsToActionProp)(FilingStatus);
