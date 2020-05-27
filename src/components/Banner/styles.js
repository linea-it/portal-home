import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    background: `url(${process.env.PUBLIC_URL}/img/background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '40px',
  },
  container: {
    background: 'transparent',
    position: 'relative',
    textAlign: 'center',
    color: '#FFF',
    zIndex: 2,
    marginTop: '0',
    display: 'block',
  },
  table: {
    margin: 'auto',
    paddingBottom: 8,
    paddingTop: 50,
  },
  logo: {
    maxHeight: 50,
    paddingLeft: '8px',
  },
  particlesWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  userWrapper: {
    borderRadius: '50%',
    margin: '0 7px',
  },
  button: {
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      float: 'right',
    },
  },
  title: {
    fontFamily: 'Oxanium',
    textTransform: 'uppercase',
    fontWeight: 100,
    marginTop: -30,
    fontSize: 28,
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
      marginTop: -38,
    },
    width: 'max-content',
  },
  subtitle: {
    fontFamily: 'Oxanium',
    textTransform: 'uppercase',
    fontWeight: 100,
    marginTop: -30,
    fontSize: 28,
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
      marginTop: -38,
    },
    paddingTop: 8,
    margin: 'auto',
    width: 'max-content',
  },
  positionTitle: {
    paddingTop: '8%',

  },
  desLogo: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 180,
    },
    maxWidth: '100%',
    cursor: 'pointer',
  },
  titleWrapper: {
    height: '400px',
  },
  descriptionWrapper: {
    margin: 'auto',
    textShadow: '1px 1px 1px #333',
  },
  floatRight: {
    textAlign: 'right',
    paddingRight: 40,
    position: 'relative',
    zIndex: 2,
  },
  none: {
    display: 'none',
  },
  inline: {
    display: 'inline',
  },
  pointer: {
    cursor: 'pointer',
    color: 'gold',
  },
}));

export default styles;
