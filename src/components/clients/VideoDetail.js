import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BarChart from './BarChart'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './video.css';

const VideoKpis = (props) => (
  <Query
    query={gql`
      {
        getOneVideoKpis(where: {
          videoId: "8zhv-q8zW1s"
        })
        {
          campaign
          campaignID
          videoTitle
          videoId
          viewRate_avg
          impressions_sum
          views_sum
          ctr_avg
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { classes } = props;
      console.log(data.getOneVideoKpis)
      const { index, videoTitle, campaign, impressions_sum, views_sum, viewRate_avg, videoId } = data.getOneVideoKpis
      return (
        <div key={impressions_sum}>
          <Grid container spacing={16}>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paperVideoSection}>
              <div className="video-responsive">
                <iframe width="560" height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={videoTitle}>
                </iframe>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Paper className={classes.paperValues}>
                    <Typography variant="h6" component="h6">
                      {videoTitle}
                    </Typography>
                    <FontAwesomeIcon icon={faFacebookF} /><span>   </span>
                    <FontAwesomeIcon icon={faYoutube} /><span>   </span>
                    <FontAwesomeIcon icon={faInstagram} /><span>   </span>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  Soft Convertion
              <Typography variant="h6" component="h3" >
                    1.000/1.200
                    </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  Unique Views
              <Typography variant="h6" component="h3" >
                    {views_sum}
                  </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  CTR
              <Typography variant="h6" component="h3" >
                    35%
                    </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  View Retention
              <Typography variant="h6" component="h3" >
                    {Math.round(viewRate_avg)}%
                    </Typography>
                </Paper></Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    }}
  </Query>
);

class VideoDetail extends React.Component {

  state = {
    period: '',
    name: '',
    spacing: '8',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
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
            </Paper>
            <VideoKpis {...this.props} />
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paperValues}>
              <FontAwesomeIcon icon={faFacebookF} /><span>  Best perfoming platform</span>
            </Paper>
          </Grid>


          <Grid item xs={3} sm={9}>
            <Paper className={classes.paperGraph}>
            <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={9} sm={3}><Paper className={classes.paperGraph}>
            
            </Paper> </Grid>

          {/* <Grid item xs={24}>
            <Paper>
              <BarChart />
            </Paper>
          </Grid> */}

        </Grid>
      </div>
    );
  }
}

VideoDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoDetail);