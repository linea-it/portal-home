/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import {
  Grid, Container, Typography, Breadcrumbs, Link,
} from '@material-ui/core';
import styles from './styles';

function AboutUs() {
  const classes = styles();


  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid
          item
          xs={12}
          className={classes.grid}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">About us</Typography>
          </Breadcrumbs>
          <Typography
            gutterBottom
            className={classes.textFormat}
            variant="overline"
            component="h2"
          >
            The Laboratório Interinstitucional de e-Astronomia (LIneA) was formally created in November 2010 by an agreement signed by three research institutes (
            <a href="https://www.lncc.br/" target="blank">Laboratório Nacional de Computação Científica</a>,&nbsp;
            <a href="http://www.on.br/index.php/pt-br/rvatório Nacional" target="blank">Observatório Nacional</a>&nbsp;
            and&nbsp;
            <a href="https://www.rnp.br/en" target="blank">Rede Nacional de Ensino e Pesquisa</a>
            ) of the Ministry of Science, Technology, Innovation and Communication (MCTIC). LIneA has  recently become a non-profit organization with the following mission:
            <ul>
              <li>Act as  the Brazilian representative to international collaborations</li>
              <li>Curate and publish astronomical datasets</li>
              <li>Provide science platforms for the scientific exploitation of large volumes of data</li>
              <li>Provide  infrastructure and resources to support data intensive research</li>
            </ul>
            LIneA is currently involved in the following projects:
            <ul>
              <li>Sloan Digital Sky Survey (SDSS)</li>
              <li>Dark Energy Survey (DES)</li>
              <li>Dark Energy Spectroscopic Survey (DESI)</li>
              <li>Legacy Survey of Space and Time (LSST)</li>
              <li>Transneptunian Occultation Network (TON)</li>
            </ul>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;
