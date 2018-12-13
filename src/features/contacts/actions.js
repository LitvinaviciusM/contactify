import { reset } from 'redux-form';
import { contactsActionTypes, requestActionTypes } from '../../common/constants';
import { getContacts, getFilteredContacts } from '../../mock/storage';
import { getCityOptions } from './utils';

export const filterContacts = values => async dispatch => {
  dispatch({ type: requestActionTypes.API_MOCK_REQUEST }); // Normally would use thunk action creator
  const result = await getFilteredContacts(values);

  if (result.status === 200) {
    dispatch({ type: contactsActionTypes.FILTER_OUT_CONTACTS, payload: result.response });
    dispatch({ type: requestActionTypes.API_MOCK_RESPONSE }); // Normally would use thunk action creator
  } else {
    dispatch({ type: requestActionTypes.API_MOCK_FAILURE }); // Normally would use thunk action creator
  }
};

export const initContacts = () => async dispatch => {
  dispatch({ type: requestActionTypes.API_MOCK_REQUEST }); // Normally would use thunk action creator
  const result = await getContacts();

  if (result.status === 200) {
    dispatch({ type: contactsActionTypes.INIT_CONTACTS, payload: result.response });
    dispatch({ type: contactsActionTypes.INIT_CONTACTS_FILTER, payload: getCityOptions(result.response) });
    dispatch({ type: requestActionTypes.API_MOCK_RESPONSE }); // Normally would use thunk action creator
  } else {
    dispatch({ type: requestActionTypes.API_MOCK_FAILURE }); // Normally would use thunk action creator
  }
};

export const selectContact = id => ({ type: contactsActionTypes.SELECT_CONTACT, payload: id });

export const resetFilter = () => async dispatch => {
  dispatch(reset('filter'));
  await dispatch(filterContacts({}));
  dispatch({ type: contactsActionTypes.RESET_CONTACTS_FILTER });
};
