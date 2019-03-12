import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { Query } from "react-apollo";
import gql from "graphql-tag";


const CampaignTitles = (props) => (
  <Query
    query={gql`
    {
    getCampaigns {
      google{
        id
        name
        ads {
          name
        }
      },
      facebook{
        id
        name,
        ads {
          name
        }
      }
    }
  }
    `}
  >
  {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      const rows = []
      data.getCampaigns.google.map(campaign => rows.push(createData(campaign.id,campaign.name, campaign.ads.length)))
      data.getCampaigns.facebook.map(campaign => rows.push(createData(campaign.id,campaign.name, campaign.ads.length)))
      return (
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.target}</TableCell> */}
              {/* <TableCell align="right"><FontAwesomeIcon icon={faInfo} />  {row.info}</TableCell> */}
              {/* <TableCell align="right"> */}
                {/* <FontAwesomeIcon icon={faFacebookF} /><span>  </span>
                <FontAwesomeIcon icon={faYoutube} /> */}
              {/* </TableCell> */}
              <TableCell align="right">{row.cCount}</TableCell>
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

const rows = []



function CampaignsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            {/* <TableCell align="right">Social Media</TableCell> */}
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <CampaignTitles />
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.target}</TableCell> */}
              {/* <TableCell align="right"><FontAwesomeIcon icon={faInfo} />  {row.info}</TableCell> */}
              {/* <TableCell align="right"> */}
                {/* <FontAwesomeIcon icon={faFacebookF} /><span>  </span>
                <FontAwesomeIcon icon={faYoutube} /> */}
              {/* </TableCell> */}
              <TableCell align="right">{row.cCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CampaignsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignsTable);