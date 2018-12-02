import contacts from '../../contacts';
import { contactsActionTypes } from '../../common/constants';
import { getFilteredContacts } from './utils';

export const filterOutContacts = () => (action, getState) => {
  const { filter } = getState();
  return { type: contactsActionTypes.FILTER_OUT_CONTACTS, payload: getFilteredContacts(contacts, filter) };
};
export const initContacts = () => ({ type: contactsActionTypes.INIT_CONTACTS, payload: contacts });
export const selectContact = id => ({ type: contactsActionTypes.SELECT_CONTACT, payload: id });
export const setFilterValue = (field, value) => ({
  type: contactsActionTypes.SET_CONTACTS_FILTER,
  payload: {field, value},
});
