import { connect } from 'react-redux';

import Contacts from './screen';
import { initContacts, selectContact, setFilterValue } from './actions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  profile: state.profile,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  initContacts: () => dispatch(initContacts()),
  selectContact: id => dispatch(selectContact(id)),
  setFilterValue: (field, value) => dispatch(setFilterValue(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
