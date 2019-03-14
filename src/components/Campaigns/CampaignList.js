import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import { TableRow, TableCell, TableHead, Table, Paper} from '@material-ui/core'
import Campaign from './Campaign'

const CampaignList = (props) => {
  const { campaigns, classes } = props

  console.log(campaigns, 'CAMPAIGNS')
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        {campaigns.map((campaign) => <Campaign key={campaign.id} name={campaign.name} id={campaign.id} totalVideos={campaign.videoAdPerformance.length}/>)}
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(CampaignList)