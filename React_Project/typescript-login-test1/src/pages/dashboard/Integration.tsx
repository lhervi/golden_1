import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core/';

const Integration=()=>{
    return(        
    <Container maxWidth="sm">
        <Grid >
            <Typography variant='h2'>
                Integration    
            </Typography>            
        </Grid>
        <Grid>
            <Typography variant='body1'>               
                Contenido de ejemplo (colocado en el último grid)
            </Typography>
        </Grid>
    
    </Container>               
                       
    )
}

export default Integration;