import React, { Component } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import CampaignList from './CampaignList';
import Spinner from '../Spinner';


const query = gql`{
  getAllCampaignPerformance{
    id
    name
    videoAdPerformance {
      unique_views
    }
  }
}`

class CampaignsContainer extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner/>;
          if (error) return `Error! ${error.message}`;
        
          return (
            <CampaignList campaigns={data.getAllCampaignPerformance}/>
          )
        }}
      </Query>
    )
  }
}

export default CampaignsContainer