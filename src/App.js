import React, { Component } from 'react';
import Router from './routers';
import { Provider } from 'react-redux';
import Store from './store';

const storeInstance = Store();

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={storeInstance}>
        { Router }
      </Provider>
    );
  }
}

export default App;
