import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { app } from '../app/reducers';
import { contacts, filter, profile } from '../features/contacts/reducers';
const reducers = combineReducers({
  app,
  contacts,
  filter,
  profile,
  form,
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
