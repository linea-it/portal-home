import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import logo from '../assets/img/linea.png';
import scientist from '../assets/img/scientist.png';


const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${process.env.PUBLIC_URL}/img/des5.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPositionY: -170,
  },
  container: {
    background: 'transparent',
    position: 'relative',
    textAlign: 'center',
    color: '#FFF',
    zIndex: 2,
  },
  logo: {
    maxHeight: 52,
    // padding: 6,
  },
  particlesWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  userWrapper: {
    background: theme.palette.text.primary,
    borderRadius: '50%',
    margin: '0 7px',
  },
  button: {
    zIndex: 1,
    float: 'right',
  },
  username: {
    color: '#fff',
  },
  menuList: {
    display: 'flex',
  },
  menuLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Oxanium',
    textTransform: 'uppercase',
    fontWeight: 100,
    fontSize: 35,
    marginTop: -38,
    marginLeft: 125,
  },
  desLogo: {
    maxWidth: 600,
  },
  titleWrapper: {
    margin: `${theme.spacing(10)}px 0 ${theme.spacing(16)}px`,

  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={3}
        className={classes.container}
      >
        <Grid item xs={12} sm={1}>
          <img src={logo} alt="LIneA" className={classes.logo} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <List className={classes.menuList}>
            <ListItem>
              <a href="/" className={classes.menuLink}>Home</a>
            </ListItem>
            <ListItem>
              <a href="/" className={classes.menuLink}>Test</a>
            </ListItem>
            <ListItem>
              <a href="/" className={classes.menuLink}>Tutorial</a>
            </ListItem>
            <ListItem>
              <a href="/" className={classes.menuLink}>Contact</a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button className={classes.button}>
            <div className={classes.userWrapper}>
              <Avatar alt="Remy Sharp" src={scientist} />
            </div>
            <div>
              <span className={classes.username}>Matheus</span>
            </div>
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.titleWrapper}>
          <img src={`${process.env.PUBLIC_URL}/img/des-logo.png`} alt="The Dark Energy Survey" className={classes.desLogo} />
          <h1 className={classes.title}>
            Science Portal
          </h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
