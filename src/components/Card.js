import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({card}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={card.uri}>
        {/* <CardMedia className={classes.media} image={card.uriImage} title={card.title} > */}
          <i className={`fa fa-${card.icon}`}></i> 
          <Typography gutterBottom variant="h4" component="h2">
            {card.title} 
          </Typography>
        {/* </CardMedia> */}
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
              {card.description}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}