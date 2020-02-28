import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${process.env.PUBLIC_URL}/img/des5.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '40px',
  },
  container: {
    background: 'transparent',
    position: 'relative',
    textAlign: 'center',
    color: '#FFF',
    zIndex: 2,
    marginTop: '0',
  },
  logo: {
    maxHeight: 48,
    paddingTop: '8px',
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
  avatar: {
    margin: 10,
    cursor: 'pointer',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function Banner() {

  const classes = useStyles();

  return (
    <>
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

export default Banner;
