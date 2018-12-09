import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Contacts from './screen';
import {
  initContacts,
  selectContact,
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
  filterContacts: values => dispatch(filterContacts(values)),
  resetFilter: () => {
    dispatch(reset('filter'));
    dispatch(filterContacts({}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
