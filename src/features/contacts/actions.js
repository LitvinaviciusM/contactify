import { contactsActionTypes } from '../../common/constants';
import { getContacts, getFilteredContacts } from '../../common/storage';
import { getCityOptions } from './utils';

export const filterContacts = () => async (dispatch, getState) => {
  const { filter: { values } } = getState();
  const result = await getFilteredContacts(values);

  if (result.status === 200) {
    dispatch({ type: contactsActionTypes.FILTER_OUT_CONTACTS, payload: result.response });
  }
};

export const initContacts = () => async dispatch => {
  const result = await getContacts();

  if (result.status === 200) {
    dispatch({ type: contactsActionTypes.INIT_CONTACTS, payload: result.response });
    dispatch({ type: contactsActionTypes.INIT_CONTACTS_FILTER, payload: getCityOptions(result.response) });
  }
};

export const selectContact = id => ({ type: contactsActionTypes.SELECT_CONTACT, payload: id });
export const setFilterValue = (field, value) => ({
  type: contactsActionTypes.SET_CONTACTS_FILTER,
  payload: {field, value},
});
