import React, { Component } from 'react';
import './App.css';

import TitleHeader from '../components/TitleHeader';
import Status from '../components/Status';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src={require("../images/logo.jpg")} alt=""></img>
        </div>
        <TitleHeader />
        <Status />
      </div>
    );
  }
}

export default App;
