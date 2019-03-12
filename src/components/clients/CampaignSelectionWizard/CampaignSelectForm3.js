import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    minWidth: 475,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

function Review(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (

    

    <Card className={classes.card}>
      <CardContent>
      <Grid container spacing={9}>
        <Grid item xs={3} sm={3}>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          className={classes.textField}
          value=""
          margin="normal"
          variant="outlined"
        />
      </form>
        </Grid>
        <Grid item xs={3} sm={3}><Typography className={classes.title} color="textSecondary" gutterBottom>
          Title
        </Typography></Grid>
        <Grid item xs={3} sm={3}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);