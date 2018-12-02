import { contactsActionTypes } from '../common/constants';

const contacts = (state = [], action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

export default contacts;
