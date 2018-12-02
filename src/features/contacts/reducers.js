import { contactsActionTypes } from '../../common/constants';

export const contacts = (state = [], action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

export const contactProfile = (state = {}, action) => {
  switch (action.type) {
    case contactsActionTypes.SELECT_CONTACT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
