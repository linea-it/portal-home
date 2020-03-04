import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';


const styles = makeStyles((theme) => ({
    toolbarWrapper:props => ({
      background: props.scrollActive ? theme.palette.primary.main : 'transparent',
      transition: 'background-color 0.5s',
      position: 'fixed',
      minWidth: '100%',
      minHeight: '60px',
      zIndex: 1000,
    }),
    container: {
      background: 'transparent',
      position: 'relative',
      textAlign: 'center',
      color: '#FFF',
      zIndex: 2,
    },
    logo: {
      maxHeight: 48,
      paddingTop: '14px',
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
    username: {
      color: '#fff',
    },
    menuList: {
      display: 'flex',
      paddingTop: '22px',
    },
    menuLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    avatar: {
      margin: 10,
      cursor: 'pointer',
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    backgroundHeader:props => ({
      backgroundColor: props.pathname === '/' ? 'transparent' : theme.palette.primary.main,
      height: '80px',
      marginTop: '-72px',
    }),
  }));

export default styles;