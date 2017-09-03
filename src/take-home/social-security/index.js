import SocialSecurity from './social-security';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    socialSecurity: state.socialSecurity
});

export default connect(mapStateToProps)(SocialSecurity);

