import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Interfaces from './Interfaces';
import Patrocinadores from './Patrocinadores';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginTop: theme.spacing(4),
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Interfaces />
        <Patrocinadores />
      </Container>
    </div>
  );
}

export default Main;
