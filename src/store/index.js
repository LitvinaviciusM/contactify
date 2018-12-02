import { createStore, combineReducers } from 'redux';

import { contacts, filter, profile } from '../features/contacts/reducers';

const reducers = combineReducers({
  contacts,
  filter,
  profile,
});

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
