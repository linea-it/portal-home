import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/img/linea.png';
import scientist from '../assets/img/scientist.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${process.env.PUBLIC_URL}/img/des5.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '40px',
    // backgroundPositionY: -170,
  },
  toolbarWrapper:props => ({
    background: props.scrollActive ? theme.palette.primary.main : 'transparent',
    transition: 'background-color 0.5s',
    position: 'fixed',
    minWidth: '100%',
    minHeight: '60px',
    paddingTop: '8px',
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
  },
  particlesWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  userWrapper: {
    background: 'rgba(0, 0, 0, .5)',
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
    marginTop: -30,
    fontSize: 28,
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
      marginTop: -38,
      marginLeft: 125,
    },
  },
  desLogo: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 600,
    },
    maxWidth: '100%',
  },
  titleWrapper: {
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(12)}px 0 ${theme.spacing(16)}px`,
    },
  },
  descriptionWrapper: {
    margin: 'auto',
    textShadow: '1px 1px 1px #333',
  },
  purple: {
    color: '#FFF',
    backgroundColor: '#FF5722',
  },
}));

function Header() {
  
  const trigger = useScrollTrigger({
    threshold: 10,
    disableHysteresis: true,
  });

  const classes = useStyles({
    scrollActive: trigger,
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
                  <a href="/" className={classes.menuLink}>About us</a>
                </ListItem>
                <ListItem>
                  <a href="/" className={classes.menuLink}>Tutorial</a>
                </ListItem>
                <ListItem>
                  <a href="/" className={classes.menuLink}>Contact</a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={2} md={6}>
              <Button className={classes.button}>
                <div className={classes.userWrapper}>
                  <Avatar alt="User"className={classes.purple} >MT</Avatar>
                </div>
                <div>
                  <span className={classes.username}>Matheus</span>
                </div>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={3}
          className={classes.container}
        >
          <Grid item xs={12} className={classes.titleWrapper}>
            <img src={`${process.env.PUBLIC_URL}/img/des-logo.png`} alt="The Dark Energy Survey" className={classes.desLogo} />
            <h1 className={classes.title}>
              Science Portal
            </h1>
            <Grid item xs={12} sm={10} md={8} className={classes.descriptionWrapper}>
              <Typography variant="body2" component="p">
                An international, collaborative effort to map hundreds of millions of galaxies, detect thousands of supernovae, and find patterns of cosmic structure that will reveal the nature of the mysterious dark energy that is accelerating the expansion of our Universe. DES began searching the Southern skies on August 31, 2013.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>      
    </>
  );
}

export default Header;
