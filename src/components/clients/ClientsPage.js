import React, { Component } from 'react'
import ActiveClient from './ActiveClient'
import SleepingClient from './SleepingClient'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import {Link} from 'react-router-dom'

class ClientsPage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid className={classes.navBarClient}>
                    <Button><Link to="/AddCampaign">Add Campaign</Link></Button>
                </Grid>
                <ActiveClient />
                <SleepingClient />
            </div>
        )
    }
}

export default withStyles(styles)(ClientsPage);
