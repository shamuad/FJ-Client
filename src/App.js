import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
import TopBar from './components/layout/TopBar'
import ClientsPage from './components/clients/ClientsPage'
import CampaignDetail from './components/clients/CampaignDetail'
import VideoDetail from './components/clients/VideoDetail'
import ApolloClient from "apollo-boost";
// import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

// client
//   .query({
//     query: gql`
//     {
//       getVideoKpis {
//         videoTitle,
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
          <Route exact path="/clients/campaigns/video" component={VideoDetail} />
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
