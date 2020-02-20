import React from 'react';
import Container from '@material-ui/core/Container';

import Grid from './Grid'
import HeaderImage from './HeaderImage'

export default function Main() {

    return (
        <Container  >
            <HeaderImage />
            <Grid />
        </Container>
        
    );
}