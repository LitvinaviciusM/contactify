import { contactsActionTypes, requestActionTypes, statusTypes } from '../common/constants';

const initialAppState = {
  profile: {
    fullName: 'Jorah Mormont',
  },
  contacts: {
    apiStatus: 'neutral',
  },
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
    case requestActionTypes.API_MOCK_REQUEST:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          apiStatus: statusTypes[2],
        }
      };
    case requestActionTypes.API_MOCK_RESPONSE:
    case requestActionTypes.API_MOCK_FAILURE:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          apiStatus: statusTypes[1],
        }
      };
    default:
      return state;
  }
};
