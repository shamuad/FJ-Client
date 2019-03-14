import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import BarChart from './BarChart'
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
import VideoDetailsByPlatform from './VideoDetailsByPlatform'
import './video.css';

const VideoKpis = (props) => (

  <Query

    query={gql`
      query getVideoAdPerformance($position: Int! $id: String!) {
        getVideoAdPerformance(position: $position id: $id){
          unique_views
          cpv
          ctr
          spend
          retention
          videos {
            video_id
            retention
            ctr
            id
            name
            cpv
            unique_views
            spend
            platform
            thumbnails
          }
        }
      }
    `} variables={{ position: parseInt(props.match.params.position), id: props.match.params.id }}
  >
    {({ loading, error, data }) => {
      console.log(data.getVideoAdPerformance)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { classes } = props;
      const {
        // id,
        name,
        cpv,
        ctr,
        unique_views,
        // spend,
        retention,
        // thumbnails 
      } = data.getVideoAdPerformance

      const video = () => {
        if (data.getVideoAdPerformance.videos[0].platform === "GOOGLE") {
          return <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data.getVideoAdPerformance.videos[0].video_id}`}
            title={name}>
          </iframe>
        }
        else if (data.getVideoAdPerformance.videos[0].platform === "FACEBOOK") {
          console.log(data.getVideoAdPerformance.videos[0].video_id)
          return <iframe src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffjamsterdam%2Fvideos%2F${data.getVideoAdPerformance.videos[0].video_id}%2F&show_text=0&width=560`}
          width="560" 
          height="315"
          title={name}> 
          >
          </iframe>
        }
      }

      return (
        <div>
          <Grid container spacing={16}>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paperVideoSection}>
                <div className="video-responsive">
                  {video()}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Paper className={classes.paperValues}>
                    <Typography variant="h6" component="h6">
                      {data.getVideoAdPerformance.videos[0].name}<br />
                      <FontAwesomeIcon icon={faFacebookF} /><span>   </span>
                      <FontAwesomeIcon icon={faYoutube} /><span>   </span>
                      <FontAwesomeIcon icon={faInstagram} /><span>   </span>
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </Typography>

                  </Paper>
                </Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  CPV
              <Typography variant="h6" component="h3" >
                    € {parseFloat(cpv).toFixed(2)}
                  </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  Unique Views
              <Typography variant="h6" component="h3" >
                    {unique_views}
                  </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  CTR
                  <Typography variant="h6" component="h3" >
                    € {parseFloat(ctr).toFixed(2)}
                  </Typography>
                </Paper></Grid>
                <Grid item xs={6} sm={6}><Paper className={classes.paperValues}>
                  View Retention
              <Typography variant="h6" component="h3" >
                    {Math.floor(retention)}%
                    </Typography>
                </Paper></Grid>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              {data.getVideoAdPerformance.videos.map(video =>
                <Grid item xs={3} sm={3}>
                  <VideoDetailsByPlatform key={video.id} {...video} />
                </Grid>
              )}
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
              <FontAwesomeIcon icon={faFacebookF} /><span> Best perfoming platform</span>
            </Paper>

          </Grid>


          {/* <Grid item xs={3} sm={9}>
            <Paper className={classes.paperGraph}>
              <BarChart />
            </Paper>
          </Grid> */}
          {/* <Grid item xs={9} sm={3}><Paper className={classes.paperGraph}>

          </Paper> </Grid> */}

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