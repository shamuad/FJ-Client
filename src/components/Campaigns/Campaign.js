import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { 
  TableRow, 
  TableCell
} from '@material-ui/core'

const Campaign = ({name, id, totalVideos}) => {
  return (
    <TableRow>
        <TableCell  align="left" component="th" scope="row">
          <Link to={`/clients/campaigns/${id}`}>
            {name}
          </Link>
        </TableCell>
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">{totalVideos}</TableCell>
    </TableRow>
  )
}

Campaign.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  totalVideos: PropTypes.number.isRequired
}

export default Campaign