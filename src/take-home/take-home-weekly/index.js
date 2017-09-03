import TakeHomeWeekly from './take-home-weekly';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    takeHomeWeekly: state.takeHomeWeekly
});

export default connect(mapStateToProps)(TakeHomeWeekly);

