
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';






class VideoDetailsByPlatform extends React.Component {

    render(){
        const { classes , id, cpv, ctr, name, unique_views, spend, retention,  platform} = this.props;
        console.log(this.props)
        return  (
            <Grid xs={4} container spacing={12}  
                direction="row"
                justify="left"
                alignItems="left">
                <Paper className={classes.paperValuesPerPlatform}>
                <br/>
                <Typography variant="h5" component="h3" >
                        {platform}
                    </Typography>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        Unique views
                        <Typography variant="h6" component="h3" >
                            {unique_views}
                        </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        CPV
                    <Typography variant="h6" component="h3" >
                        {cpv}
                    </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperValues}>
                        CTR
                <Typography variant="h6" component="h3" >
                        {ctr}
                </Typography>
                    </Paper></Grid>
            <Grid item sm={12}><Paper className={classes.paperValues}>
                       View retention
                <Typography variant="h6" component="h3" >
                    {retention}
                </Typography>
                    </Paper></Grid>
                </Paper>
          </Grid>
          
    )



        }



}




export default withStyles(styles)(VideoDetailsByPlatform);