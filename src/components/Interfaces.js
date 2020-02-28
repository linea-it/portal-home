import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
  },
  titleItem:{
    fontSize: '2em',
    paddingTop: '0.5em',
    paddingLeft: '1em',
    color: 'white',
    textShadow: '0.1em 0.1em 0.1em black',
  },
  cardMedia:{
      minHeight: 150,
  },
}));

function Interfaces() {
  const classes = useStyles();

  const interfaces = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/dashboard/',
      icon: 'border-all',
      image: 'des.jpg',
    },
    {
      id: 2,
      title: 'Portal Monitor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/monitor/',
      icon: 'television',
      image: 'des2.jpg',
    },
    {
      id: 3,
      title: 'User Interface',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/user-interface/',
      icon: 'flask',
      image: 'des3.jpg',
    },
    {
      id: 4,
      title: 'My Workspace',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/my-workspace/',
      icon: 'users',
      image: 'des5.jpg',
    },
    {
      id: 5,
      title: 'Science Products',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/science-products/',
      icon: 'server',
      image: 'des7.jpg',
    },
  ];

  const interfacesHost = process.env.REACT_APP_INTERFACES_HOST;

  return (
    <div className={classes.root}>
    <Container>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            >
            {interfaces.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Card>    
                    <CardActionArea href={interfacesHost + item.pathname}>
                        <CardMedia
                            alt={item.title}
                            className={classes.cardMedia}
                            image={`${process.env.PUBLIC_URL}/img/${item.image}`}
                            title={item.title}>
                            <Typography gutterBottom className={classes.titleItem}
                                variant="h5" component="h2">
                                {/* <i className={`fa fa-${item.icon}`}></i> &nbsp;  */}
                                {item.title}
                            </Typography>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Container>
    </div>
  );
}

export default Interfaces;
