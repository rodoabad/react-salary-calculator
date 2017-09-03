import * as actionCreators from '../../action-creators';
import Dependents from './dependents';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    dependents: state.dependents,
    filingStatus: state.filingStatus,
    salary: state.salary
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    handleDependentsChange: event => {

        const newDependents = parseInt(event.target.value, 10) || 0;

        dispatchProps.updateSalary(stateProps.salary, stateProps.filingStatus, newDependents);

    }
});

export default connect(mapStateToProps, actionCreators, mergeProps)(Dependents);
