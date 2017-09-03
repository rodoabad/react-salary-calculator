import TakeHomeYearly from './take-home-yearly';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    takeHomeYearly: state.takeHomeYearly
});

export default connect(mapStateToProps)(TakeHomeYearly);

