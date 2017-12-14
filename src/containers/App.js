import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import Status from '../components/Status';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Status />
        </Provider>
      </div>
    );
  }
}

export default App;
