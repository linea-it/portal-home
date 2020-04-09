import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './styles';


function Supporters() {
  const classes = styles();

  const interfaces = [
    {
      id: 2,
      title: 'CNPq',
      image: 'cnpq_logo.jpg',
    },
    {
      id: 4,
      title: 'FAPERJ',
      image: 'faperj_logo-1024x431.jpg',
    },
    {
      id: 6,
      title: 'Finep',
      image: 'finep.jpg',
    },
    // {
    //   id: 1,
    //   title: 'CAPES',
    //   image: 'capes-logo-aplicacao-horizontal.jpg',
    // },
    // {
    //   id: 3,
    //   title: 'FAPERGS',
    //   image: 'fapergs-300x156.png',
    // },
    // {
    //   id: 5,
    //   title: 'FAPESP',
    //   image: 'logofapesp.jpg',
    // },
    {
      id: 7,
      title: 'INCT',
      image: 'logomarca_INCT.jpg',
    },
    // {
    //   id: 8,
    //   title: 'INCT e-Universo',
    //   image: 'inct_euniverso_logo.png',
    // },
    {
      id: 9,
      title: 'Laboratório Nacional de Computação Científica',
      image: 'lncc.png',
    },
    {
      id: 10,
      title: 'Ministério da Ciência, Tecnologia, Inovações e Comunicações',
      image: 'ministerio_da_ciencia.png',
    },
    {
      id: 11,
      title: 'Observatório Nacional',
      image: 'observatorio.jpeg',
    },
    {
      id: 12,
      title: 'RNP',
      image: 'rnp.png',
    },

  ];

  // const interfacesHost = process.env.REACT_APP_INTERFACES_HOST;

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          LIneA is supported by
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {interfaces.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}>
              <CardMedia
                className={classes.media}
                component="img"
                alt={item.title}
                height="80"
                image={`${process.env.PUBLIC_URL}/img/supporters/${item.image}`}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Supporters;
