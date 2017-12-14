import React, { Component } from 'react';
import './App.css';

import TitleHeader from '../components/TitleHeader';
import Status from '../components/Status';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TitleHeader />
        <Status />
      </div>
    );
  }
}

export default App;
