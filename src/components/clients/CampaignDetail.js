import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import ReactDOM from 'react-dom';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import PieChart from './PieChart'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {Link} from 'react-router-dom'

const CampaignDetails = ({classes, match}) => (
  <Query 
    query={gql`
    query campaignDetails($id: String!) {
    getCampaignsDetails(id: $id) {
      name
      id
      detail {
        retention
        cpv
        ctr
        unique_views
      },
      ads {
        name
        id
      } 
    }
    }
    
    `} variables = {{id: match.params.id}}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return  (
        <div>
        <Typography variant="h4" component="h6" >
            Campaign: {data.getCampaignsDetails.name}
         </Typography>
        <Grid item xs={3} sm={9}>
        {/* <Paper className={classes.paper}> */}
        <Grid container spacing={24}>
          <Grid item xs={4} sm={4}><Paper className={classes.paperValues}>
                 Unique views
          <Typography variant="h3" component="h3" >
                  {Math.round(data.getCampaignsDetails.detail.unique_views)}
                </Typography>
          </Paper></Grid>
          <Grid item xs={4} sm={4}><Paper className={classes.paperValues}>
                Retention
            <Typography variant="h3" component="h3" >
                {Math.floor(data.getCampaignsDetails.detail.retention)}%
                </Typography>
          </Paper></Grid>
          <Grid item xs={4} sm={4}><Paper className={classes.paperValues}>
                CPV 
          <Typography variant="h3" component="h3" >
                   € {parseFloat(data.getCampaignsDetails.detail.cpv).toFixed(2)}
                </Typography>
                </Paper></Grid>
          <Grid item xs={4} sm={4}><Paper className={classes.paperValues}>
                CTR 
          <Typography variant="h3" component="h3" >
                € {parseFloat(data.getCampaignsDetails.detail.ctr).toFixed(2)}
                </Typography></Paper></Grid>
                {<Grid item xs={0.5} sm={9}><Link to={`/clients/campaigns/${data.getCampaignsDetails.id}/video`}>
           <Paper>Videos for this campaign: 
               <br/>
               </Paper></Link></Grid>

           }     
        </Grid>
        {/* </Paper> */}
      </Grid>
      </div>
      )
    }
  }
  </Query>
);


class CampaignDetail extends React.Component {

  state = {
    period: '',
    name: 'hai',
  };



  componentDidMount() {
   
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    

    return (
      <div className={classes.root}>
      <br/>
        <Grid ontainer spacing={24}>
        <Grid item xs={20}> 
              <Link to={"/clients"}>All campaigns</Link>
            </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* --Select Period and Date Picker --- */}
              <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Select Period</InputLabel>
                  <Select
                    value={this.state.period}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'period',
                      id: 'period',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    id="date"
                    label="From"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    id="date"
                    label="To"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </form>

              {/* ------------------------ */}

            </Paper>
          </Grid>
          <Grid item xs={9} sm={3}>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={3} sm={9}>

            {/* <Paper className={classes.paper}> */}
            <CampaignDetails {...this.props} classes={classes}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CampaignDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignDetail);