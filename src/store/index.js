import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { contacts, filter, profile } from '../features/contacts/reducers';

const reducers = combineReducers({
  contacts,
  filter,
  profile,
});

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
