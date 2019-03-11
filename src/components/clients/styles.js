import red from '@material-ui/core/colors/red';

const styles = theme => ({
    card: {
        maxWidth: '100%',
        textAlign: 'left',
        margin: '1em 1em 1em 1em',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
    },
    paperValues: {
        padding: theme.spacing.unit * 1,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 80
    },
    paperVideoSection: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 320
    },
    paperCompare: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    
});

export default styles