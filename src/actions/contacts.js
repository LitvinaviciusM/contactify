import contacts from '../contacts';
import { contactsActionTypes } from '../common/constants';

export const initContacts = () => ({ type: contactsActionTypes.INIT_CONTACTS, payload: contacts });
