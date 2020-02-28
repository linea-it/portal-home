import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import logo from '../assets/img/linea.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { deepOrange } from '@material-ui/core/colors';
import { Link, useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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

function Header() {

  let location = useLocation();
  
  const trigger = useScrollTrigger({
    threshold: 10,
    disableHysteresis: true,
  });

  const classes = useStyles({
    scrollActive: trigger,
    pathname: location.pathname,
  });

  return (
    <>
      <div className={classes.toolbarWrapper} >
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={0}
            className={classes.container}
          >
            <Grid item xs={12} sm={2} md={1}>
              <img src={logo} alt="LIneA" className={classes.logo} />
            </Grid>
            <Grid item xs={12} sm={8} md={5}>
              <List className={classes.menuList}>
                <ListItem>
                  <a href="/" className={classes.menuLink}>Home</a>
                </ListItem>
                <ListItem>
                  <Link to="/" className={classes.menuLink}>About us</Link>
                </ListItem>
                <ListItem>
                  <Link to="/tutorials" className={classes.menuLink}>Tutorial</Link>
                </ListItem>
                <ListItem>
                  <a href="/" className={classes.menuLink}>Contact</a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={2} md={6}>
              <Button className={classes.button}>
                <div className={classes.userWrapper}>
                <Avatar className={classes.avatar}>MT</Avatar>
                </div>
                <div>
                  <span className={classes.username}>Matheus</span>
                </div>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.backgroundHeader}></div>
      </div>
    </>
  );
}

export default Header;
