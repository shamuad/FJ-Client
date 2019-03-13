import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
import TopBar from './components/layout/TopBar'
import ClientsPage from './components/clients/ClientsPage'
import CampaignDetail from './components/clients/CampaignDetail'
import VideoDetail from './components/clients/VideoDetail'
import VideoList from './components/clients/VideoList'
import CampaignSelectForm from './components/clients/CampaignSelectionWizard/CampaignSelectMainPage'

import ApolloClient from "apollo-boost";
// import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({ uri: 'http://localhost:4000' });


// client
//   .query({
//     query: gql`
//     {
//       getVideoKpis {
//         videoTitle,s
//         campaign,
//         impressions_sum
//         views_sum
//         viewRate_avg
//       }
//     }    
//     `
//   })
//   .then(result => console.log(result));

  
class App extends Component {
  render() {
   
    return (
      <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <Route exact path="/clients" component={ClientsPage} />
          <Route exact path="/clients/campaigns/:id" component={CampaignDetail} />
          <Route exact path="/clients/campaigns/:id/video" component={VideoList} />
          <Route exact path="/clients/campaigns/:id/video/:position" component={VideoDetail} />
          <Route exact path="/AddCampaign" component={CampaignSelectForm} />
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
