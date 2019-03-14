import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import styles from './styles'


class SelectCampaign extends Component {

  render(){
    const { classes, getCampaigns, state, handleChange} = this.props;

        return (
          <React.Fragment>
            <Grid container spacing={24}>
              <Grid item xs={12}>
          
              <TextField
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Campaign name"
                value={state.campaignTitle}
                fullWidth
                name='campaignTitle'
                onChange={handleChange}
              > 
              </TextField>
              </Grid>
              <Grid item xs={12}>
              <TextField
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Select Google campaign"
                value={state.google}
                fullWidth
                name='google'
                onChange={handleChange}
              >
                {getCampaigns.google.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
              <Grid item xs={12}>
              <TextField
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Select Facebook campaign"
                value={state.facebook}
                name='facebook'
                fullWidth
                onChange={handleChange}
              >
                {getCampaigns.facebook.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
            </Grid>
          </React.Fragment>
  );
  }
  
}
export default withStyles(styles)(SelectCampaign);
