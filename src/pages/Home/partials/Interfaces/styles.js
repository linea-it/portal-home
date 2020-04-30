import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    margin: 'auto',
  },
  titleItem: {
    fontFamily: 'Oxanium',
    fontSize: '2em',
    paddingTop: '0.5em',
    paddingLeft: '1em',
    color: 'white',
    textShadow: '0.1em 0.1em 0.1em black',
    overflowWrap: 'break-word',
  },
  media: {
    minHeight: 150,
  },
  cardContent: {
    height: 70,
    paddingBottom: 0,
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  dialogCard: {
    zIndex: 9999,
    height: 28,
  },
}));

export default styles;
