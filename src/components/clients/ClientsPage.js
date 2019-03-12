import React, { Component } from 'react'
import ActiveClient from './ActiveClient'
import SleepingClient from './SleepingClient'

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

export default ClientsPage;
