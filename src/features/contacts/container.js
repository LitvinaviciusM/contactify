import { connect } from 'react-redux';

import Contacts from './screen';
import {
  initContacts,
  selectContact,
  setFilterValue,
  filterContacts,
} from './actions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  profile: state.profile,
  cityOptions: state.filter.params.cityOptions,
});

const mapDispatchToProps = dispatch => ({
  initContacts: () => dispatch(initContacts()),
  selectContact: id => dispatch(selectContact(id)),
  setFilterValue: (field, value) => dispatch(setFilterValue(field, value)),
  filterContacts: () => dispatch(filterContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
