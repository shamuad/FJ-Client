import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import ReactDOM from 'react-dom';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
// import PieChart from './PieChart'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Videos = ({ classes, props }) => (
    <Query
        query={gql`
    query campaignDetails($id: String!) {
    getCampaignsDetails(id: $id) {
      name
      id
      detail {
        retention
        cpv
        ctr
        unique_views
      },
      ads {
        id
        name
        cpv
        ctr
        unique_view
        spend
        retention
        video_id
      } 
    }}
`} variables={{ id: "814137338" }}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const rows = []
            data.getCampaignsDetails.map(ads => rows.push(createData(
                ads.name,
                ads.cpv,
                ads.ctr,
                ads.unique_view,
                ads.spend,
                ads.retention,
                ads.id
            )))
            return (
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>

                            <Link to={`/clients/campaigns/814137338/video/${row.id}`}>
                                <TableCell align="left" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </Link>
                            <TableCell align="right">€{parseFloat(row.cpv).toFixed(2)}</TableCell>
                            <TableCell align="right">€{parseFloat(row.ctr).toFixed(2)}</TableCell>
                            <TableCell align="right">{row.unique_view}</TableCell>
                            <TableCell align="right">€{parseFloat(row.spend).toFixed(2)}</TableCell>
                            <TableCell align="right">{Math.floor(row.retention)}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            );
        }}
    </Query>
);

function createData(
    name, cpv, ctr, unique_view, spend, retention, id) {
    return { name, cpv, ctr, unique_view, spend, retention, id };
}

class VideoList extends React.Component {
    state = {
        period: '',
        name: 'hai',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        console.log(this.props.match.params.id)
        return (
            <div className={classes.root}>
                <br />
                <Grid container spacing={24}>
                    <Grid>
                        <Link to={"/clients"}>All campaigns</Link>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            {/* --Select Period and Date Picker --- */}
                            <form className={classes.root} autoComplete="off">
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-simple">Select Period</InputLabel>
                                    <Select
                                        value={this.state.period}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'period',
                                            id: 'period',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="date"
                                        label="From"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="date"
                                        label="To"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                            </form>

                            {/* ------------------------ */}

                        </Paper>
                    </Grid>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">CPV</TableCell>
                                <TableCell align="right">CTR</TableCell>
                                <TableCell align="right">Unique Views</TableCell>
                                <TableCell align="right">Spend</TableCell>
                                <TableCell align="right">Retention</TableCell>
                            </TableRow>
                        </TableHead>
                        <Videos />
                    </Table>
                </Grid>
            </div>
        );
    }
}

VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);