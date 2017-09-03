import TaxableIncome from './taxable-income';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    taxableIncome: state.taxableIncome
});

export default connect(mapStateToProps)(TaxableIncome);

