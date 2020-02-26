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
    marginTop: theme.spacing(4),
  },
}));

function Main() {
  const classes = useStyles();

  const interfaces = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/dashboard/',
    },
    {
      id: 2,
      title: 'Portal Monitor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/monitor/',
    },
    {
      id: 3,
      title: 'User Interface',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/user-interface/',
    },
    {
      id: 4,
      title: 'My Workspace',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/my-workspace/',
    },
    {
      id: 5,
      title: 'Science Products',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim consequat nibh, eu congue massa. Cras at placerat neque.',
      pathname: '/science-products/',
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
                    component="img"
                    alt={item.title}
                    height="140"
                    image={`${process.env.PUBLIC_URL}/img/des.jpg`}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
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

export default Main;
