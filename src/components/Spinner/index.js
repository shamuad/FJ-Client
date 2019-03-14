import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {CircularProgress, Paper} from '@material-ui/core'
import { styles } from './style'

const Spinner = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} size={30} thickness={5} />     
    </Paper>
  )
}

export default withStyles(styles)(Spinner)


