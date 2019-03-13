import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {Link} from 'react-router-dom'


const CampaignTitles = (props) => (
  <Query
    query={gql`{
    getAllCampaignPerformance{
      id
      name
      videoAdPerformance{
        unique_views
      }
    }
  }
`}
  >
  {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data)
      return (
        <TableBody>
          {data.getAllCampaignPerformance.map(campaign => (
            <TableRow key={campaign.id}>
            <Link to={`/clients/campaigns/${campaign.id}`}>
              <TableCell  align="left" component="th" scope="row">
                {campaign.name}
              </TableCell>
              </Link>
              <TableCell align="right">{campaign.id}</TableCell>
              <TableCell align="right">{campaign.videoAdPerformance.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    }}
  
  </Query>
)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function createData(id, name, cCount) {
  return { id, name, cCount };
}

// const rows = []



function CampaignsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">ID</TableCell>
            {/* <TableCell align="right">Social Media</TableCell> */}
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <CampaignTitles />
      </Table>
    </Paper>
  );
}

CampaignsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignsTable);