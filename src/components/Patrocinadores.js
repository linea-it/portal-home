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
        marginBottom: theme.spacing(6),
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
    supporters:{
      paddingBottom: '15px',
    }
}));

function Patrocinadores() {
  const classes = useStyles();

  const interfaces = [
    {
      id: 1,
      title: 'CAPES',
      image: 'capes-136x136.png'
    },
    {
      id: 2,
      title: 'CNPq',
      image: 'cnpq_logo.jpg'
    },
    {
      id: 3,
      title: 'Finep',
      image: 'finep.jpg'
    },
    {
      id: 4,
      title: 'INCT',
      image: 'logomarca_INCT.jpg'
    },
    {
      id: 5,
      title: 'FAPERGS',
      image: 'fapergs-300x156.png'
    },
    {
      id: 6,
      title: 'FAPERJ',
      image: 'faperj_logo-1024x431.jpg'
    },
    {
      id: 7,
      title: 'FAPESP',
      image: 'logofapesp.jpg'
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
          spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {interfaces.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}
            className={classes.supporters}>
                <CardActionArea>
                  <CardMedia
                    className={classes.sizeCardMedia}
                    component="img"
                    alt={item.title}
                    height="80"
                    image={`${process.env.PUBLIC_URL}/img/patrocinadores/${item.image}`}
                    title={item.title}
                  />
                </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Patrocinadores;
