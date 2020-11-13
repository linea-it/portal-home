import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useLocation } from 'react-router-dom';
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

  const menus = [
    {
      description: 'Home',
      href: '/',
      target: '_self',
    },
    {
      description: 'About',
      href: '/about-us',
      target: '_self',
    },
    // {
    //   description: 'Tutorials',
    //   href: '/tutorials',
    //   target: '_self',
    // },
    {
      description: 'Contact',
      href: '/contact',
      target: '_self',
    },
  ];

  return (
    <AppBar position="static" className={classes.toolbarWrapper}>
      <Toolbar className={classes.toolbar}>
        <img
          src={`${process.env.PUBLIC_URL}/img/linea-dark-invert.png`}
          alt="LIneA"
          className={classes.logoLIneA}
        />
        <List className={classes.menuList}>
          {menus.map((menu) => (
            <ListItem key={menu.href} className={classes.menuListItem}>
              <Link href={menu.href} className={classes.menuLink}>
                {menu.description}
              </Link>
            </ListItem>
          ))}
        </List>
        <div className={classes.separator} />
        {/* TODO: verificar se o usuario esta logado */}
        {/* {user && user.username ? <UserLogged /> : <UserUnLogged />} */}
      </Toolbar>
    </AppBar>

  // <>
  //   <div className={classes.toolbarWrapper}>
  //     <Container>
  //       <Grid
  //         container
  //         direction="row"
  //         justify="space-between"
  //         alignItems="flex-start"
  //         spacing={0}
  //         className={classes.container}
  //       >
  //         <Grid item xs={12} sm={8} md={6}>
  //           <List className={classes.menuList}>
  //             <ListItem>
  //               <a href="/" className={classes.menuLink}>Home</a>
  //             </ListItem>
  //             <ListItem>
  //               <a href="/about-us" className={classes.menuLink}>About us</a>
  //             </ListItem>
  //             {/* <ListItem>
  //               <Link to="/tutorials" className={classes.menuLink}>Tutorial</Link>
  //             </ListItem> */}
  //             <ListItem>
  //               <a href="/contact" className={classes.menuLink}>Contact us</a>
  //             </ListItem>
  //           </List>
  //         </Grid>
  //         <Grid item xs={12} sm={2} md={6}>
  //           {/* <Button className={classes.button}>
  //             <div className={classes.userWrapper}>
  //             <Avatar className={classes.avatar}>MT</Avatar>
  //             </div>
  //             <div>
  //               <span className={classes.username}>Matheus</span>
  //             </div>
  //           </Button> */}
  //         </Grid>
  //       </Grid>
  //     </Container>
  //     <div className={classes.backgroundHeader} />
  //   </div>
  // </>
  );
}

export default Header;
