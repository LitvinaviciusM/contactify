import { contactsActionTypes } from '../common/constants';

const initialAppState = {
  profile: {
    fullName: 'Jorah Mormont',
  },
  contacts: {},
};

export const app = (state = initialAppState, action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          lastSynced: Date.now()
        },
      };
    default:
      return state;
  }
};
