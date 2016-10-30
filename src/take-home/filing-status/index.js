import * as actionCreators from '../../action-creators';
import FilingStatus from './filing-status';
import {connect} from 'react-redux';

const getStateToBindToContainerProps = state => ({
    filingStatusList: state.filingStatusList,
    selectedFilingStatus: state.selectedFilingStatus
});

const mapBoundActionCreatorsToActionProp = (stateProps, dispatchProps) => ({
    ...stateProps,
    actions: {
        ...dispatchProps
    }
});

export default connect(getStateToBindToContainerProps, actionCreators, mapBoundActionCreatorsToActionProp)(FilingStatus);
