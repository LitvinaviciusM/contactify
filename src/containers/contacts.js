import { connect } from 'react-redux';

import Contacts from '../screens/contacts';
import { initContacts } from '../actions/contacts';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  initContacts: () => dispatch(initContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
