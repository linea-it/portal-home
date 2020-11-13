/* eslint-disable max-len */
import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Twitter, Facebook, YouTube } from '@material-ui/icons';
import styles from './styles';

function Banner() {
  const classes = styles();

  // const [readMore, setReadMore] = useState(false);

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

  // const handlerClickReadMore = () => {
  //   setReadMore(!readMore);
  // };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={1}
        className={classes.container}
      >
        <Grid item xs={12} className={classes.titleWrapper}>


          <img
            src={`${process.env.PUBLIC_URL}/img/linea-dark-invert.png`}
            alt="Data Release Interface"
            className={classes.logo}
          />
          <h1 className={classes.title}>
            The Dark Energy Survey
            <br />
            Science Portal
          </h1>
        </Grid>
      </Grid>
      <div className={classes.socialWrapper}>
        <IconButton
          onClick={() => {
            handlerClick('Youtube');
          }}
          color="inherit"
          aria-label="YouTube"
          component="span"
        >
          <YouTube />
        </IconButton>
        <IconButton
          onClick={() => {
            handlerClick('Twitter');
          }}
          color="inherit"
          aria-label="Twitter"
          component="span"
        >
          <Twitter />
        </IconButton>
        <IconButton
          onClick={() => {
            handlerClick('GitHub');
          }}
          color="inherit"
          aria-label="GitHub"
          component="span"
        >
          <Facebook />
        </IconButton>
      </div>
    </div>
  );
}

export default Banner;
