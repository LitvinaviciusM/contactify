import { connect } from 'react-redux';
import Header from './screen';

const mapStateToProps = state => ({
  fullName: state.app.profile.fullName,
});

export default connect(mapStateToProps)(Header);
