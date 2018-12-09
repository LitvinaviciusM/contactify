import { contactsActionTypes } from '../../common/constants';

export const contacts = (state = [], action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS:
      return action.payload;
    case contactsActionTypes.FILTER_OUT_CONTACTS:
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

const initialFilterState = {
  values: {},
  params: {
    cityOptions: [],
  },
};

export const filter = (state = initialFilterState, action) => {
  switch (action.type) {
    case contactsActionTypes.INIT_CONTACTS_FILTER:
      return {
        ...state,
        params: {
          ...state.params,
          cityOptions: action.payload,
        }
      };
    default:
      return state;
  }
};
