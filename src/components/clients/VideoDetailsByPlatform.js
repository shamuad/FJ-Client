
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';






class VideoDetailsByPlatform extends React.Component {

    render(){
        const { classes } = this.props;
        return  (
            <Grid container spacing={12}  
                direction="row"
                justify="left"
                alignItems="left">
                <Paper className={classes.paperValuesPerPlatform}>
                <br/>
                <Typography variant="h5" component="h3" >
                        Platform
                    </Typography>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        Unique views
                        <Typography variant="h6" component="h3" >
                            some code
                        </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        CPR
                    <Typography variant="h6" component="h3" >
                        some code
                    </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        CPV
                <Typography variant="h6" component="h3" >
                        some code
                </Typography>
                    </Paper></Grid>
            <Grid item sm={12}><Paper className={classes.paperValues}>
                        Unique views
                <Typography variant="h6" component="h3" >
                    view rention
                </Typography>
                    </Paper></Grid>
                </Paper>
          </Grid>
          
    )



        }



}




export default withStyles(styles)(VideoDetailsByPlatform);