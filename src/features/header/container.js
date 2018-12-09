import { connect } from 'react-redux';
import Header from './screen';

const mapStateToProps = () => ({
  // Different header layout for authorised users. This property would be used later
  isAuthorised: true,
});

export default connect(mapStateToProps)(Header);
