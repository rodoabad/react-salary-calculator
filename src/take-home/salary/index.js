import * as actionCreators from '../../action-creators';
import Salary from './salary';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    dependents: state.dependents,
    filingStatus: state.filingStatus,
    salary: state.salary
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    handleSalaryChange: event => {

        const newSalary = parseFloat(event.target.value) || 0;

        dispatchProps.updateSalary(newSalary, stateProps.filingStatus, stateProps.dependents);

    }
});

export default connect(mapStateToProps, actionCreators, mergeProps)(Salary);
