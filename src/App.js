import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBar from './components/layout/TopBar'
import ActiveClient from './components/clients/ActiveClient'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <ActiveClient />
      </div>
    );
  }
}

export default App;
