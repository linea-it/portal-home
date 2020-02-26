import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';

const useStyles = makeStyles({
  particlesWrapper: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
    zIndex: 1,
  },
});

function Stars() {
  const classes = useStyles();

  return (
    <Particles
      className={classes.particlesWrapper}
      params={{
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: '#edb0f5',
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: true,
              speed: 0.7,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.6,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Stars;
