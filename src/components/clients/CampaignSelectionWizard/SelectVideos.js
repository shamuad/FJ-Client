import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        // margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 50,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class SelectVideos extends React.Component {
    state = {

        dense: false,
        secondary: false,
        selectedAdsFacebook: [],
        selectedAdsGoogle: [],
        positions: {}
    };

    componentDidMount(){
        const selectedAdsF = this.props.getCampaigns.facebook.find(ad => ad.id === this.props.state.facebook).ads
        const selectedAdsG = this.props.getCampaigns.google.find(ad => ad.id === this.props.state.google).ads
        
        const positions = {}
        selectedAdsF.map((video) => this.props.changePosition(video.id, ''))
        selectedAdsG.map((video) => this.props.changePosition(video.id, ''))

        this.setState({selectedAdsFacebook : selectedAdsF, selectedAdsGoogle: selectedAdsG, positions})
        
    }

    onChange = (event) => {
        this.props.changePosition(event.target.name, event.target.value )
    }

    render() {
        const { classes } = this.props;
        const { dense, secondary } = this.state;
        
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.title}>
                            Facebook Campaign
                        </Typography>
                        <div className={classes.demo}>
                            <List dense={dense}>
                               {this.state.selectedAdsFacebook.map(ad => (
                                 <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <OndemandVideoIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={ad.name}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <TextField
                                            id="filled-bare"
                                            className={classes.textField}
                                            defaultValue=""
                                            onChange={this.onChange}
                                            
                                            margin="normal"
                                            variant="filled"
                                            name={ad.id}
                                            value={this.props.positions[`${ad.id}`]}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>))}
                            </List>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.title}>
                            Google Campaign
                        </Typography>
                        <div className={classes.demo}>
                            <List dense={dense}>
                              {this.state.selectedAdsGoogle.map(ad => 
                                <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <OndemandVideoIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={ad.name}
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <TextField
                                                id="filled-bare"
                                                name={ad.id}
                                                value={this.props.positions[`${ad.id}`]}
                                                className={classes.textField}
                                                onChange={this.onChange}
                                                margin="normal"
                                                variant="filled"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                              )}
                            </List>
                        </div>
                    </Grid>


                </Grid>
            </div>



        );
    }
}

SelectVideos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectVideos);