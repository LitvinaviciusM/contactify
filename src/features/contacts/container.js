import { connect } from 'react-redux';

import Contacts from './screen';
import { initContacts, selectContact } from './actions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  contactProfile: state.contactProfile,
});

const mapDispatchToProps = dispatch => ({
  initContacts: () => dispatch(initContacts()),
  selectContact: id => dispatch(selectContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
