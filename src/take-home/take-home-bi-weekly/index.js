import TakeHomeBiWeekly from './take-home-bi-weekly';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    takeHomeBiWeekly: state.takeHomeBiWeekly
});

export default connect(mapStateToProps)(TakeHomeBiWeekly);

