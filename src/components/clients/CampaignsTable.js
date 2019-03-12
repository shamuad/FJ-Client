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
        name
        ads {
          name
        }
      },
      facebook{
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
      console.log(data)
      return (
       null
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

let id = 0;
function createData(name, target, info, social, cCount, rDate) {
  id += 1;
  return { id, name, target, info, social, cCount, rDate };
}

const rows = [
  createData('Quaker Video 1', '%80 Campain Target', '960/1200 leads generated','', 4.0, 5),
  createData('Quaker Video 2', '%30 Campain Target', '22.500/75.000 euro purchase value','', 4.3, 12),
  createData('Quaker Lore', '%30 Campain Target', '800.000/1.000.000 unique views', '', 6.0, 25),
  createData('Quaker Ipsum', '%30 Campain Target', '960/1200 leads generated', '', 4.3, 15),
  createData('Quaker Lorem', '%30 Campain Target', '960/1200 leads generated', '', 3.9, 18),
];




function CampaignsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
      <CampaignTitles />
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Campaign Target</TableCell>
            <TableCell align="right">Info</TableCell>
            <TableCell align="right">Social Media</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Remaining Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.target}</TableCell>
              <TableCell align="right"><FontAwesomeIcon icon={faInfo} />  {row.info}</TableCell>
              <TableCell align="right">
                <FontAwesomeIcon icon={faFacebookF} /><span>  </span>
                <FontAwesomeIcon icon={faYoutube} />
              </TableCell>
              <TableCell align="right">{row.cCount}</TableCell>
              <TableCell align="right">{row.rDate}</TableCell>
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