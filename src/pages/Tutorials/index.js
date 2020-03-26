import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Typography, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from './styles';


function Tutorials() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [idPlayer, setIdPlayer] = useState('');

  const idsTutorials = ['zIVtZ8IYmOU', 'vNuggkko5zI', 'ZQgH2wWDIbg', '3eh6r4ysiFY'];
  const opts = { height: '200', width: '250' };
  const optsDefault = { height: '720', width: '1024' };

  const onReady = (event) => {
    event.target.loadVideoById(idPlayer);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPlay = (event) => {
    setIdPlayer(event.target.l.videoData.video_id);
    event.target.stopVideo();
    handleOpen();
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
          {idsTutorials.map((idTutorial) => (
            <Grid key={idTutorial} item xs={6} sm={2}>
              <YouTube
                videoId={idTutorial}
                opts={opts}
                onPlay={onPlay}
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
              opts={optsDefault}
              videoId={idPlayer}
              onReady={onReady}
            />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}

export default Tutorials;
