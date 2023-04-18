import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    width: '100%',
    height: '100%',
    '&:hover': {
      border: '2px solid #f50057',
      boxShadow: '0 5px 10px #f50057'   
  }
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));