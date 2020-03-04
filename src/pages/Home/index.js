import React from 'react';
import Container from '@material-ui/core/Container';
import Stars from '../../components/Stars/';
import Banner from '../../components/Banner/';
import Interfaces from './partials/Interfaces/';
import Patrocinadores from './partials/Patrocinadores/';


function Main() {
  
  return (
    <div>
      <Stars />
      <Banner />
      <Container>
        <Interfaces />
        <Patrocinadores />
      </Container>
    </div>
  );
}

export default Main;
