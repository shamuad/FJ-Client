import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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


const Videos = ({ classes, match }) => (
    <Query
        query={gql`
        query getCampaignPerformance($id: String!) {
            getCampaignPerformance(id: $id){
              id
              name
              unique_views
              retention
              cpv
              ctr
              videoAdPerformance{
                position
                unique_views
                retention
                cpv
                ctr
                spend
                videos {
                    name
                    id
                }
              }
            }
            }
`} variables={{ id: match.params.id }}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            console.log(data)
            const rows = []
            data.getCampaignPerformance.videoAdPerformance.map(video => rows.push(createData(
                video.position,
                video.videos[0].name,
                video.cpv,
                video.ctr,
                video.unique_views,
                video.spend,
                video.retention


            )))

            return (
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.retention}>
                            <TableCell align="left">
                                <Button component={Link} to={`/clients/campaigns/${match.params.id}/video/${row.position}`} color="inherit">{row.name}</Button>
                            </TableCell>
                            <TableCell align="left">€{parseFloat(row.cpv).toFixed(2)}</TableCell>
                            <TableCell align="left">€{parseFloat(row.ctr).toFixed(2)}</TableCell>
                            <TableCell align="left">{row.unique_views}</TableCell>
                            <TableCell align="left">€{parseFloat(row.spend).toFixed(2)}</TableCell>
                            <TableCell align="left">{Number(row.retention)}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            );
        }}
    </Query>
);

function createData(
    position, name, cpv, ctr, unique_views, spend, retention) {
    return { position, name, cpv, ctr, unique_views, spend, retention };
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
                    <Paper className={classes.rootForTable}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">NAME</TableCell>
                                    <TableCell align="left">CPV</TableCell>
                                    <TableCell align="left">CTR</TableCell>
                                    <TableCell align="left">Unique Views</TableCell>
                                    <TableCell align="left">Spend</TableCell>
                                    <TableCell align="left">Retention</TableCell>
                                </TableRow>
                            </TableHead>
                            <Videos {...this.props} />
                        </Table>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);