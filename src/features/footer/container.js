import { connect } from 'react-redux';
import Footer from './screen';

const mapStateToProps = () => ({
  // Different footer layout for authorised users. This property would be used later
  isAuthorised: true,
  lastSynced: new Date().getDate(),
});

export default connect(mapStateToProps)(Footer);
