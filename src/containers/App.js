import React, { Component } from 'react';
import './App.css';

import TitleHeader from '../components/TitleHeader';
import Status from '../components/Status';
import StatusCard from '../components/StatusCard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TitleHeader />
        <StatusCard />
      </div>
    );
  }
}

export default App;
