import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles'
import { Query } from "react-apollo";
import gql from "graphql-tag";


const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

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
                label="Google Campaign"
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
                label="Facebook Campaign"
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
