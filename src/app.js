import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Contacts from './features/contacts/container';
import { initStore } from './common/storage';

class App extends Component {
  componentDidMount() {
    initStore();
  }

  render() {
    return (
      <Provider store={store}>
        <Contacts />
      </Provider>
    );
  }
}

export default App;
