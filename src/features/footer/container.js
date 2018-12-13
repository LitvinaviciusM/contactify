import { connect } from 'react-redux';
import Footer from './screen';

const mapStateToProps = state => ({
  lastSynced: state.app.contacts.lastSynced,
});

export default connect(mapStateToProps)(Footer);
