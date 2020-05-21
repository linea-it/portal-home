/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import styles from './styles';
import DialogCard from '../ModalInterfaces';

function Interfaces() {
  const classes = styles();

  const interfaces = [
    {
      id: 0,
      title: 'Datasets',
      description: 'Interface showing all datasets available for use by pipelines in the portal showing DES data releases, external datasets  and simulations',
      pathname: '/user-interface/datasets',
      icon: 'border-all',
      image: 'des8.jpg',
    },
    {
      id: 1,
      title: 'Pipelines',
      description: 'Available pipelines include those  that create maps showing the variation of observing conditions, classify sources as stars or galaxies, compute photometric redshifts and galaxy properties, create science-ready catalogs, a variety of  scientific workflows, and other general purpose pipelines.',
      url: 'https://testing.linea.gov.br/',
      icon: 'border-all',
      image: 'des6.jpg',
    },
    {
      id: 2,
      title: 'Job Monitor',
      description: 'Interface that allows the user to monitor all processes that have been executed by all users. Useful to monitor competing jobs submitted by other users.',
      pathname: '/monitor/',
      icon: 'television',
      image: 'des2.jpg',
    },
    {
      id: 3,
      title: 'My Workspace',
      description: 'Interface that allows the user to monitor all of his/her jobs and for completed jobs access the results. The interface also allows the user to: 1)  save; 2) share the results with a person or a group; 3) publish enabling access to all collaboration members in the DES Science products interface;  and 4)  to  make a product widely public in the LIneA Science products interface to give access to the general public.',
      pathname: '/my-workspace/',
      icon: 'users',
      image: 'des5.jpg',
    },
    {
      id: 4,
      title: 'Dashboard',
      description: 'Interface showing all completed processes given a data release and a dataset. It lists all enabled pipelines. The information of the last run and provides access to all previous executions of a given pipeline. It is through this interface that the provenance of products can be traced.',
      pathname: '/dashboard/',
      icon: 'border-all',
      image: 'des.jpg',
    },
    {
      id: 5,
      title: 'Science Products',
      description: 'Interface to access products shared by the owner of a process.',
      pathname: '/science-products/',
      icon: 'server',
      image: 'des7.jpg',
    },
    {
      id: 6,
      title: 'For Developers',
      description: 'Interface to tools that can be used by developers.',
      pathname: '/user-interface/',
      icon: 'flask',
      image: 'des9.jpg',
    },
    // {
    //   id: 7,
    //   title: 'My Profile',
    //   description: 'Information about the user providing details about role, permissions and groups that the user is part.',
    //   pathname: '/user-interface/',
    //   icon: 'flask',
    //   image: 'des3.jpg',
    // },
    {
      id: 8,
      title: 'Documentation Tutorials',
      description: 'Relevant documentation about pipelines description, pipeline history, history of releases  and  tutorials.',
      pathname: '/',
      icon: 'flask',
      image: 'des1.jpg',
    },
  ];

  const interfacesHost = process.env.REACT_APP_INTERFACES_HOST;

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          {interfaces.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={3}>
              <Card>
                <CardActionArea
                  href={item.url || interfacesHost + item.pathname}
                  target={item.url ? '_blanc' : '_self'}
                >
                  <CardMedia
                    alt={item.title}
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/img/${item.image}`}
                    title={item.title}
                  >
                    <Typography
                      gutterBottom
                      className={classes.titleItem}
                      variant="h5"
                      component="h2"
                    >
                      {/* <i className={`fa fa-${item.icon}`}></i> &nbsp;  */}
                      {item.title}
                    </Typography>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="div" className={classes.description}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.dialogCard}>
                  {item.description.length > 80 ? <DialogCard item={item} /> : '' }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Interfaces;
