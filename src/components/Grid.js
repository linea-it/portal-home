import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import plataformas from './Plataformas_json.js';
import Card from './Card'

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid className={classes.grid} justify="space-evenly" alignItems="stretch" container spacing={3} key="gridPrincipal">
            {
                plataformas.map((card) => 
                    <Grid item xs={12} sm={4} spacin={3} key={card.id} >
                        <Card card={card} />
                    </Grid>
                )
            }
        </Grid>
    </div>
  );
}
