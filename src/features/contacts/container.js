import { connect } from 'react-redux';
import Contacts from './screen';
import {
  initContacts,
  selectContact,
  filterContacts,
  resetFilter,
} from './actions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  profile: state.profile,
  cityOptions: state.filter.params.cityOptions,
  isFiltered: state.filter.isFiltered,
});

const mapDispatchToProps = dispatch => ({
  initContacts: () => dispatch(initContacts()),
  selectContact: id => dispatch(selectContact(id)),
  filterContacts: values => dispatch(filterContacts(values)),
  resetFilter: () => dispatch(resetFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
