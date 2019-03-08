import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TopBar from './components/layout/TopBar'
import ClientsPage from './components/clients/ClientsPage'
import CampaignDetail from './components/clients/CampaignDetail'
import VideoDetail from './components/clients/VideoDetail'


import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

client
  .query({
    query: gql`
    {
      getAllVideos {
        videoTitle(name: "FJ Manifest - Get It Out")
      }
    }    
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <Route exact path="/clients" component={ClientsPage} />
          <Route exact path="/clients/campaigns" component={CampaignDetail} />
          <Route exact path="/clients/campaigns/video" component={VideoDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
