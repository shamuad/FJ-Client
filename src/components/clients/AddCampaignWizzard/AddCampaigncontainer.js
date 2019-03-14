import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectCampaign from './SelectCampaign';
import SelectVideos from './SelectVideos';
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import {Link} from 'react-router-dom'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Select campaign', 'Select videos'];

function getStepContent(step, data, state, handleChange, changePosition, positions) {
  switch (step) {
    case 0:
      return <SelectCampaign {...data} state={state} handleChange={handleChange}  />;
    case 1:
      return <SelectVideos {...data} state={state} changePosition={changePosition} positions={positions}gi/>;
    default:
      throw new Error('Unknown step');
  }
}

const submitCampaign = gql`
  mutation submitCampaign($campaigns: CampaignsInput!, $videos: [VideoAdInput!]) {
      combineCampaign( campaigns: $campaigns, videos: $videos) 
    }
`;

class AddCampaignContainer extends React.Component {
  state = {
    activeStep: 0,
    facebook: '',
    google: '',
    campaignTitle: '',
    campaigns: [],
    positions: {}

  }

  onSumbit = () => {
    const campaigns = {
      name: this.state.campaignTitle,
      facebookCampaignId: this.state.facebook,
      googleCampaignId: this.state.google
    }

    const videos = []
    Object.keys(this.state.positions).map((value, index) => {
      videos.push({
        position: parseInt(Object.values(this.state.positions)[index]),
        videoAdId: value
      })
    })

    this.props.mutate({
      variables: { campaigns, videos }
    })
  }

  changePosition = (name, value) => {
    this.setState({positions: {...this.state.positions, [name]: value }})
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleNext = () => {
    if(this.state.activeStep === 0) {
      if(this.state.campaignTitle.length === 0) {
        alert('Your campaign needs a title.')
      } else if(this.state.facebook.length === 0 && this.state.google.length === 0){
        alert('You need to pick at least one platform')
      } else {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }))
      }
    } else {
      if(this.state.position === undefined) {}
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }))
      this.onSumbit()
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const query = gql`
    {
      getCampaigns {
        facebook {
          id
          name
          ads {
            id
            name
          }
        }
        google {
          id
          name
          ads {
            id
            name
          }
        }
      }
    }
  `

    return (
      <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
        <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Add campaign
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    The campaign {this.state.campaignTitle} has been added.
                  </Typography>
                  <Typography variant="subtitle1">
                  <Button component={Link} to={'/clients'} color="inherit">Back to clients</Button>
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, data, this.state, this.handleChange, this.changePosition, this.state.positions)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button style={{backgroundColor: 'red'}} onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
        )
                    
      }}
        </Query>
    );
  }
}

AddCampaignContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const NewEntryWithData = graphql(submitCampaign)(AddCampaignContainer);

export default withStyles(styles)(NewEntryWithData);