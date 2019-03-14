import red from '@material-ui/core/colors/red';

const styles = theme => ({
    navBarClient: {
        textAlign: 'right'
    },
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

    rootForTable: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      
      table: {
        minWidth: 700,
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
        height: 60,
    },
    paperCompareValues: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 45,
        width: 200
    },

    paperValuesPerPlatform: {
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 420,
        width: 300
    },

    paperVideoSection: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 360
    },
    paperGraph: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '1em 1em 0em 1em',
        height: 310
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    link: {
        margin: theme.spacing.unit,
        textDecoration: 'none'
      },
    
});

export default styles