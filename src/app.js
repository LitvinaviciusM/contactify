import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import FaProvider from './faprovider';
import store from './store';
import Header from './features/header/container';
import Footer from './features/footer/container';
import Contacts from './features/contacts/container';
import { initStore } from './common/storage';

class App extends Component {
  componentDidMount() {
    initStore();
  }

  render() {
    return (
      <Provider store={store}>
        <FaProvider>
          <Fragment>
            <Header />
            <Contacts />
            <Footer />
          </Fragment>
        </FaProvider>
      </Provider>
    );
  }
}

export default App;
