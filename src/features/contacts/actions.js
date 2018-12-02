import contacts from '../../contacts';
import { contactsActionTypes } from '../../common/constants';

export const initContacts = () => ({ type: contactsActionTypes.INIT_CONTACTS, payload: contacts });
export const selectContact = id => ({ type: contactsActionTypes.SELECT_CONTACT, payload: id });
