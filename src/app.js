import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Contacts from './containers/contacts';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Contacts />
      </Provider>
    );
  }
}

export default App;
