import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 2,
        marginTop: theme.spacing(12),
    },
        lineHeaderPatrocinadores:{
        borderColor: '#868686',
        marginBottom: '20px',
    },
    sizeCardMedia:{
        width: 'unset',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

function Patrocinadores() {
  const classes = useStyles();

  const interfaces = [
    {
      id: 1,
      title: 'Docker',
      pathname: '/dashboard/',
      image: 'docker.png'
    },
    {
      id: 2,
      title: 'React',
      pathname: '/monitor/',
      image: 'react.png'
    },
    {
      id: 3,
      title: 'Yarn',
      pathname: '/user-interface/',
      image: 'yarn.png'
    },
    {
      id: 4,
      title: 'GraphQL',
      pathname: '/my-workspace/',
      image: 'graphql.png'
    },
    {
      id: 5,
      title: 'NPM',
      pathname: '/my-workspace/',
      image: 'npm.png'
    }
  ];

  // const interfacesHost = process.env.REACT_APP_INTERFACES_HOST;

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
        Supporters
        </Typography>
        <hr className={classes.lineHeaderPatrocinadores} />
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {interfaces.map((item) => (
            <Grid key={item.id} item xs={12} sm={'auto'} md={'auto'}>
                <CardActionArea>
                  <CardMedia
                    className={classes.sizeCardMedia}
                    component="img"
                    alt={item.title}
                    height="80"
                    image={`${process.env.PUBLIC_URL}/img/patrocinadores/${item.image}`}
                    title={item.title}
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" align="center" component="h2">
                      {item.title}
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Patrocinadores;
