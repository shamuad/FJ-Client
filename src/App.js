import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBar from './components/layout/TopBar'
import ActiveClient from './components/clients/ActiveClient'
import SleepingClient from './components/clients/SleepingClient';


import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({ 
  uri: 'http://localhost:4000/graphql'
  // , fetch: fetch
});

client
  .query({
    query: gql`
    {
      getVideoKpis (videoTitle: "FJ Manifest-Get It Out"){
        sum
        avg
        videoTitle
      }
    
    }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <ActiveClient />
        <SleepingClient />
      </div>
    );
  }
}

export default App;
