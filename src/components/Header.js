import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  AppBar,  Toolbar,  Typography,  IconButton, ButtonGroup, Button } from '@material-ui/core';

import Logo from '../assets/img/icon-des.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  AppBar: {
    boxShadow: 'none',
  },
  buttonGroup: {
    padding: 20,
    paddingLeft: 100
  },
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;

    return (
        <AppBar className={classes.AppBar} position="fixed">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
              <img src={Logo} alt="Portal" />
            </IconButton>
            <Typography variant="h6" color="inherit">
              DES Science Portal
            </Typography>
            <ButtonGroup variant="text" className={classes.buttonGroup} color="inherit" aria-label="text primary button group">
              <Button>Home</Button>
              <Button>Tutorials</Button>
              <Button>Contact us</Button>
            </ButtonGroup>

          </Toolbar>
        </AppBar>
    );
  }
}
export default withStyles(styles)(Header);
