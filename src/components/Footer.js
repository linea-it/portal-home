import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar } from '@material-ui/core';
import logo from '../assets/img/linea-logo-mini.png';
import gitVersion from '../assets/json/version.json';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    float: 'right',
    height: 64,
    marginTop: 32,
  },
  drawer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#333',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  versionLink: {
    color: '#d2cf00',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  logoLink: {
    lineHeight: 0,
  },
}));

function Footer() {
  const classes = useStyles();

  const openGithub = (vlink) => {
    if (vlink) {
      window.open(vlink);
    }
  };

  const instance = process.env.NODE_ENV === 'production'
    ? window._env_.REACT_APP_INSTANCE // eslint-disable-line
    : process.env.REACT_APP_INSTANCE;

  let version = '--';
  let vlink = null;

  if (
    Object.entries(gitVersion).length !== 0
    && gitVersion.constructor === Object
  ) {
    if (gitVersion.tag) {
      version = `${gitVersion.tag}`;
      vlink = `${gitVersion.url}`;
    } else {
      version = `${gitVersion.sha.substring(0, 7)}`;
      vlink = `${gitVersion.url.replace(/.git$/, '')}/commit/${gitVersion.sha}`;
    }
  }

  return (
    <footer className={classes.root}>
      <AppBar position="fixed" className={classes.drawer}>
        {/* <Stars /> */}
        <Toolbar className={classes.toolbar}>
          <Typography color="inherit" className={classes.grow}>
            {instance}
            {' '}
            Portal Home:
            {' '}
            {/* eslint-disable-next-line */}
            <span
              onClick={() => openGithub(vlink)}
              className={classes.versionLink}
            >
              {version}
            </span>
          </Typography>
          <Typography color="inherit">Powered by</Typography>
          <a href="http://www.linea.gov.br/" target="blank" className={classes.logoLink}>
            <img
              src={logo}
              title="LIneA"
              alt="LineA"
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            />
          </a>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
