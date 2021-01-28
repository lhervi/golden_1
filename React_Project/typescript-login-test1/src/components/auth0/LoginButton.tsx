import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setProcessing } from '../../reducers/loginSlice';


const LoginButton = () => {

  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const useStyles = makeStyles((theme) => ({
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
      
  const classes = useStyles();

  const login = ()=> {   
  dispatch(setProcessing(true))  
  loginWithRedirect();

  }
  
    
  
  return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => login()}            
            >
            Sign In
        </Button>
  )
};

export default LoginButton;