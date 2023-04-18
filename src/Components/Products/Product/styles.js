import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        '&:hover': {
            border: '2px solid #f50057',
            boxShadow: '0 10px 20px #f50057'   
        }
    },
    media: {
        height: '100px',
        paddingTop: '56.25%' //16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
    },
    description: {
        height: '100px',
        overflow: 'scroll'
    }
}))