/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useLocation } from 'react-router-dom';
// import logo from '../../assets/img/linea.png';
import styles from './styles';

function Header() {
  const location = useLocation();
  const trigger = useScrollTrigger({
    threshold: 10,
    disableHysteresis: true,
  });

  const classes = styles({
    scrollActive: trigger,
    pathname: location.pathname,
  });

  return (
    <>
      <div className={classes.toolbarWrapper}>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={0}
            className={classes.container}
          >
            {/* <Grid item xs={12} sm={2} md={1}>
              <img src={logo} alt="LIneA" className={classes.logo} />
            </Grid> */}
            <Grid item xs={12} sm={8} md={6}>
              <List className={classes.menuList}>
                <ListItem>
                  <a href="/" className={classes.menuLink}>Home</a>
                </ListItem>
                <ListItem>
                  {/* <Link
                    className={classes.menuLink}
                    onClick={() => {
                      window.open('https://www.linea.gov.br/', '_blank ')
                    }}>
                    About us
                  </Link> */}
                  <ListItem>
                    <a href="/about-us" className={classes.menuLink}>About us</a>
                  </ListItem>
                </ListItem>
                {/* <ListItem>
                  <Link to="/tutorials" className={classes.menuLink}>Tutorial</Link>
                </ListItem> */}
                <ListItem>
                  <a href="/contact" className={classes.menuLink}>Contact us</a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={2} md={6}>
              {/* <Button className={classes.button}>
                <div className={classes.userWrapper}>
                <Avatar className={classes.avatar}>MT</Avatar>
                </div>
                <div>
                  <span className={classes.username}>Matheus</span>
                </div>
              </Button> */}
            </Grid>
          </Grid>
        </Container>
        <div className={classes.backgroundHeader} />
      </div>
    </>
  );
}

export default Header;
