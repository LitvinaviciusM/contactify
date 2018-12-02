import { createStore, combineReducers } from 'redux';

import { contacts, contactProfile } from '../features/contacts/reducers';

const reducers = combineReducers({
  contacts,
  contactProfile,
});

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
