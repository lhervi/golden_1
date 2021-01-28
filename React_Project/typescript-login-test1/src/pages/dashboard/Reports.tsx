import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

function Reports() {
    
    const classes = useStyles();

  return (
    <React.Fragment>
    <Title>Reports</Title>
    <Typography component="p" variant="h4">
      None
    </Typography>
    <Typography color="textSecondary" className={classes.depositContext}>
      on 15 March, 2019
    </Typography>    
  </React.Fragment>
  )
}
export default Reports;