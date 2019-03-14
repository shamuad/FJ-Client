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
                <Typography variant="h6" component="h3" >
                        {platform}
                    </Typography>
                <Grid item sm={12}><Paper className={classes.paperCompareValues}>
                        Unique views
                        <Typography variant="h6" component="h3" >
                            {unique_views}
                        </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperCompareValues}>
                        CPV
                    <Typography variant="h6" component="h3" >
                    € {parseFloat(cpv).toFixed(2)}
                    </Typography>
                    </Paper></Grid>
                <Grid item sm={12}><Paper className={classes.paperCompareValues}>
                        CTR
                <Typography variant="h6" component="h3" >
                € {parseFloat(ctr).toFixed(2)}
                </Typography>
                    </Paper></Grid>
            <Grid item sm={12}><Paper className={classes.paperCompareValues}>
                       View retention
                <Typography variant="h6" component="h3" >
                    {Math.floor(retention)}%
                </Typography>
                    </Paper></Grid>
                </Paper>
          </Grid>
          
    )



        }



}




export default withStyles(styles)(VideoDetailsByPlatform);