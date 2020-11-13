import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
  },
  titleItem: {
    fontFamily: 'Oxanium',
    fontSize: '1.5em',
    paddingTop: '0.5em',
    paddingLeft: '1em',
    color: 'white',
    textShadow: '0.1em 0.1em 0.1em black',
  },
  media: {
    minHeight: 220,
  },
  cardContent: {
    height: 50,
    paddingBottom: 0,
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  dialogCard: {
    zIndex: 9999,
    height: 28,
    padding: 0,
  },
  gridApplicationLg: {
    [theme.breakpoints.up('lg')]: {
      width: '20%',
      maxWidth: '20%',
    },
  },
}));

export default styles;
