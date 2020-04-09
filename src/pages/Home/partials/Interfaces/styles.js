import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    margin: 'auto',
    width: '90%',
  },
  titleItem: {
    fontFamily: 'Oxanium',
    fontSize: '2em',
    paddingTop: '0.5em',
    paddingLeft: '1em',
    color: 'white',
    textShadow: '0.1em 0.1em 0.1em black',
  },
  media: {
    minHeight: 150,
  },
}));

export default styles;
