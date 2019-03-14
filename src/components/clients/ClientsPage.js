import React, { Component } from 'react'
import ActiveClient from './ActiveClient'
import SleepingClient from './SleepingClient'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class ClientsPage extends Component {

    render() {
        return (
            <div>
                <ActiveClient />
                <SleepingClient />
            </div>
        )
    }
}

export default withStyles(styles)(ClientsPage);
