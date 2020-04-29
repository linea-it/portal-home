/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Twitter, Facebook } from '@material-ui/icons';
import logo from '../../assets/img/linea-dark-invert.png';
import styles from './styles';
// import Stars from '../Stars';

function Banner() {
  const classes = styles();

  const handlerClick = (socialMedia) => {
    let uri = '';
    switch (socialMedia) {
      case 'YouTube':
        uri = 'https://www.youtube.com/user/lineamcti';
        break;
      case 'Facebook':
        uri = 'https://www.facebook.com/linea.mcti';
        break;
      case 'Twitter':
        uri = 'https://twitter.com/LIneA_mcti';
        break;
      case 'GitHub':
        uri = 'https://github.com/linea-it/dri';
        break;
      default:
        uri = 'https://www.youtube.com/user/lineamcti';
    }
    window.open(uri, '_blank');
  };

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
          {/* <Stars /> */}

          <Grid item xs={12} className={classes.titleWrapper}>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td>
                    <img
                      onClick={() => { window.open('https://linea.gov.br', '_blanc'); }}
                      src={logo}
                      alt="LIneA"
                      className={classes.desLogo}
                    />
                  </td>
                  <td className={classes.positionTitle}>
                    <h1 className={classes.title}>
                      The Dark Energy Survey
                    </h1>
                    <h2 className={classes.subtitle}>
                      Science Portal
                      {/* <img src={`${process.env.PUBLIC_URL}/img/des-logo.png`} alt="The Dark Energy Survey" className={classes.logo} /> */}
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
            <Grid item xs={12} sm={10} md={8} className={classes.descriptionWrapper}>
              <Typography variant="body2" component="p">
                The DES Science Portal is a platform developed for the Dark Energy Survey project. It hosts a variety of pipelines meant to prepare science-ready catalogs for different science applications as well as to carry out a variety of scientific analysis. The pipelines are grouped in stages that include data preparation where maps are created, objects are classified as star/galaxy and photo-zs are computed;   generation of value–added catalog;   creation of special samples; science workflows for different working groups and utilities. One of the main strengths of the system is the ability to provide complete information of all executed processes enabling the user to trace the input, configuration, the version of the codes used and the results obtained in the form of a product log with plots. The portal also provides access to a number of tools designed for the user, the developer and the administrator.
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.floatRight}>
            <div className={classes.separatorToolBar} />
            <IconButton
              onClick={() => { handlerClick('Facebook'); }}
              color="inherit"
              aria-label="Facebook"
              component="span"
            >
              <Facebook />
            </IconButton>
            <IconButton
              onClick={() => { handlerClick('Twitter'); }}
              color="inherit"
              aria-label="Twitter"
              component="span"
            >
              <Twitter />
            </IconButton>
            {/* <IconButton
              onClick={() => { handlerClick('GitHub'); }}
              color="inherit"
              aria-label="GitHub"
              component="span"
            >
              <GitHub />
            </IconButton> */}
          </div>
        </Grid>
      </div>
    </>
  );
}

export default Banner;
