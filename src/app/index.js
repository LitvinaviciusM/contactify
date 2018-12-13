import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FaProvider from './faprovider';
import store from '../store';
import Header from '../features/header/container';
import Footer from '../features/footer/container';
import Contacts from '../features/contacts/container';
import { initStore } from '../mock/storage';
import '../assets/styles/main.scss';

class Index extends Component {
  componentDidMount() {
    initStore();
  }

  render() {
    return (
      <Provider store={store}>
        <FaProvider>
          <div className="app">
            <Header />
            <Contacts />
            <Footer />
          </div>
        </FaProvider>
      </Provider>
    );
  }
}

export default Index;
