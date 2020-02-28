import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 2,
    },
}));

function Tutorials() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}

export default Tutorials;
