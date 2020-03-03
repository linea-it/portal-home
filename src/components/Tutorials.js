import React from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 2,
        paddingTop: theme.spacing(15),
    },
    videosGrid:{
      maxWidth: '100%',
      padding: 50,
    },
    youtube:{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
}));

function Tutorials() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [idPlayerPrincipal, setIdPlayerPrincipal]= React.useState('');

  const idsTutorials = ['zIVtZ8IYmOU','vNuggkko5zI','ZQgH2wWDIbg','3eh6r4ysiFY']
  const opts = { height: '240', width: '426' }
  const optsPrincipal = { height: '720', width: '1024', }

  const _onPlay = (event) => {
    setIdPlayerPrincipal(event.target.l.videoData.video_id);
    event.target.stopVideo();
    handleOpen();
  }

  const _onReadyPrincipal = (event) => {
    event.target.loadVideoById(idPlayerPrincipal);
  } 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Tutorials
        </Typography>
        {/* <hr className={classes.lineHeader} /> */}
        {/* <ul>
          <li>
            <Typography variant="subtitle1" gutterBottom>
              Faça aqui o Donwload do&nbsp;
              <Link href="https://twiki.linea.gov.br/pub/PortalDocumentation_des/PortalTutorials/overplot.pdf" >
                <b>Overplot Catalogs</b> &nbsp;
                <i className="fa fa-download" aria-hidden="true"></i>
              </Link>
            </Typography>
          </li>
        </ul> */}
        <Grid
          container
          spacing={6}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {idsTutorials.map((idTutorial, key) => (
              <Grid key={key} item xs={6} sm={2}
              className={classes.videosGrid}>
                <YouTube
                  className={classes.youtube}
                  videoId={idTutorial}
                  opts={opts}
                  onPlay={_onPlay}
                />
              </Grid>
          ))}

        </Grid>
      </Container>
      

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
               <YouTube
                  className={classes.youtube}
                  opts={optsPrincipal}
                  videoId={idPlayerPrincipal}
                  onReady={_onReadyPrincipal}
                />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}

export default Tutorials;
