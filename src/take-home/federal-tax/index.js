import FederalTax from './federal-tax';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    federalTax: state.federalTax
});

export default connect(mapStateToProps)(FederalTax);

