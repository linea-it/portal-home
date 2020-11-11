import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import styles from './styles';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Supporters() {
  const classes = styles();

  const interfaces = [
    {
      id: 1,
      title: 'CNPq',
      image: 'cnpq.png',
    },
    {
      id: 2,
      title: 'FAPERJ',
      image: 'faperj.png',
    },
    {
      id: 3,
      title: 'Finep',
      image: 'finep.png',
    },
    {
      id: 4,
      title: 'INCT',
      image: 'inct.png',
    },
    {
      id: 5,
      title: 'Laboratório Nacional de Computação Científica',
      image: 'lncc.png',
    },
    {
      id: 6,
      title: 'Ministério da Ciência, Tecnologia, Inovações e Comunicações',
      image: 'mcti.png',
    },
    {
      id: 7,
      title: 'Observatório Nacional',
      image: 'on.png',
    },
    {
      id: 8,
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
        <CarouselProvider
          naturalSlideWidth={191}
          naturalSlideHeight={78}
          totalSlides={8}
          visibleSlides={5}
          infinite
          interval={3000}
        >
          <Slider>
            {interfaces.map((item) => (
              <Slide index={item.id} key={item.id}>
                <CardMedia
                  className={classes.carouselItem}
                  component="img"
                  alt={item.title}
                  image={`${process.env.PUBLIC_URL}/img/supporters/${item.image}`}
                  title={item.title}
                />
              </Slide>
            ))}
          </Slider>

        </CarouselProvider>
      </Container>
    </div>
  );
}

export default Supporters;
