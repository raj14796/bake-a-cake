import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    bgCream: {
        backgroundColor: '#FAE8E0',
        height: '160px',
        width: '100%'
    },
    products: {
        width: '80%',
        position: 'absolute',
        top: '200px',
        left: '10%',
        textAlign: 'center'
    },
    productTypes: {
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.8);',
        height: '200px',
        marginBottom: '20px',
    },
    headImage: {
        height: '100%',
        width: '100%',
    },
    title: {
        margin: '80px auto 40px auto',
    },
    root: {
        flexGrow: 1,
    },
}));