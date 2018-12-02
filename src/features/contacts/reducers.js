import { contactsActionTypes } from '../../common/constants';

export const contacts = (state = [], action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

export const profile = (state = {}, action) => {
  switch (action.type) {
    case contactsActionTypes.SELECT_CONTACT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export const filter = (state = {}, action) => {
  switch (action.type) {
    case contactsActionTypes.SET_CONTACTS_FILTER:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
