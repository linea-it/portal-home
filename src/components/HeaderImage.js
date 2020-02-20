import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 100,
  }
}));

export default function HeaderImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
    </div>
  );
}
