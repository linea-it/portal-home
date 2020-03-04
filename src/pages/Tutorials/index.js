import React from 'react';
import YouTube from 'react-youtube';
import { Container, Typography, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from './styles';


function Tutorials() {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const [idPlayerPrincipal, setIdPlayerPrincipal]= React.useState('');

  const idsTutorials = ['zIVtZ8IYmOU','vNuggkko5zI','ZQgH2wWDIbg','3eh6r4ysiFY']
  const opts = { height: '200', width: '250' }
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
    <div className={classes.initContainer}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Tutorials
        </Typography>
        <Grid
          container
          spacing={6}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {idsTutorials.map((idTutorial, key) => (
              <Grid key={key} item xs={6} sm={2}>
                <YouTube
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
          <div>
              <YouTube
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
