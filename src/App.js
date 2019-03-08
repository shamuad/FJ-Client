import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBar from './components/layout/TopBar'
import ActiveClient from './components/clients/ActiveClient'
import SleepingClient from './components/clients/SleepingClient';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>HI THERE</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
=======
        <TopBar />
        <ActiveClient />
        <SleepingClient />
>>>>>>> 6d9fa7b7696ad25a847f0884edeba1f4bd4145ce
      </div>
    );
  }
}

export default App;
