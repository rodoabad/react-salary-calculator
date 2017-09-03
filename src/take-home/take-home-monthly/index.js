import TakeHomeMonthly from './take-home-monthly';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    takeHomeMonthly: state.takeHomeMonthly
});

export default connect(mapStateToProps)(TakeHomeMonthly);

