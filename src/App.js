import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TopBar from './components/layout/TopBar'
import ClientsPage from './components/clients/ClientsPage'
import CampaignDetail from './components/clients/CampaignDetail'
import VideoDetail from './components/clients/VideoDetail'

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
