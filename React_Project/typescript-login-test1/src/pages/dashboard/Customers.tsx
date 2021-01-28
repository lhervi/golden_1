import * as React from 'react';
//import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

function Customers() {
    
    const classes = useStyles();

  return (
    <React.Fragment>
    <Title>Customers</Title>
    <Typography component="p" variant="h4">
      None
    </Typography>
    <Typography color="textSecondary" className={classes.depositContext}>
      on 15 March, 2019
      <p>Este es un ejeplo de párrafo insertado para validar el ancho de la página</p>
    </Typography>    
  </React.Fragment>
  )
}
export default Customers;