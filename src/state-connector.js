import * as actionCreators from './action-creators';
import TakeHome from './take-home/';
import {connect} from 'react-redux';

const getStateToBindToContainerProps = state => ({
    ...state
});

const mapBoundActionCreatorsToActionProp = (stateProps, dispatchProps) => ({
    ...stateProps,
    actions: {
        ...dispatchProps
    }
});

export default connect(getStateToBindToContainerProps, actionCreators, mapBoundActionCreatorsToActionProp)(TakeHome);
