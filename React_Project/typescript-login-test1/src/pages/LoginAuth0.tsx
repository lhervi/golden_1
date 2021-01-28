
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setProcessing, selectProcessing} from '../reducers/loginSlice';
import {setConnectionStatus, setUserLogged, setUserInfo, selectUserLogged} from '../reducers/statusSlice';
import { setMenuActiveLinks } from '../reducers/menuSlice';

import LoginButton from '../components/auth0/LoginButton';

import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import BardaszLogoDG from '../images/logoBardasz/BardaszLogoDarkGray'; 
import App from '../App';

import { useAuth0 } from "@auth0/auth0-react";

function Login() {   
    
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();         
    const userData = {lastname:'' , name:'',  email: '', role:'guess'};    

    const processing = useSelector(selectProcessing);

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        }
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    const classes = useStyles();
    
      function Footer() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {/*'Copyright © '*/}
          <Link color="inherit" href="https://bardasz.com/">
            Bardasz.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    async function updateSlices(){ 

        const urlApi = "http://localhost:3001/users";
        const connectionResult = {result: '', connectionStatusNumber: 0};   // result: text describing the status   
      
        try{     
          dispatch(setProcessing(true));   //  Indicates that the processing access has begun
          const resp = await axios.get(urlApi, {params: {email: user.email}});                  
          connectionResult.connectionStatusNumber = resp.request.status;                  
            if (resp.request.status===200 && resp.data.length>0) {
              const {lastname ,name, role} = resp.data[0]; 
              userData.lastname = lastname;
              userData.name= name;
              userData.role=role;
              userData.email=user.email;
              connectionResult.result= 'Access granted. You are now logged in';              
              sessionStorage.setItem('role', role);              
              
              dispatch(setEmail(user.email));                  //  Update login slice      
              dispatch(setMenuActiveLinks(role));           //Menu slice
              dispatch(setUserInfo(userData));            //Status slice   
              dispatch(setUserLogged(true))               //Status slice
            }else if (resp.request.status===200 && resp.data.length===0) {        
              connectionResult.result= 'User not found';      
               
            }          
        }catch(e){
          console.log(e);
        }   
            dispatch(setConnectionStatus(connectionResult.result));            
            dispatch(setProcessing(false));            
    }

if (isAuthenticated) { 
  updateSlices();   
} 

return (useSelector(selectUserLogged)) ? <App /> : 
  (  
    <Container component="main" maxWidth="xs">
      <CssBaseline /> 
      
      <div className={classes.paper}>
        <Grid container xs="auto" direction='row' justify='space-between' alignItems='center'>
          <Grid item>            
          <BardaszLogoDG w='220' h='220'/>
          </Grid>
          <Grid item >
          
          </Grid>
          <Grid item  justify='center' direction='column'>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />            
            </Avatar>
            <Typography component="h6" variant="h6">
            Sign in
            </Typography> 
          </Grid>          
        </Grid>
      
          <Grid>
          
          </Grid>   
          <Grid>
            <Grid>              
              
            </Grid>
          </Grid>
              <form className={classes.form} noValidate>                    
                
                <CircularProgress 
                  variant="indeterminate" 
                  thickness={processing ? .8: 0}                
                  />
                <label>{processing && "Login in progress..."}</label> 
                  
                  <LoginButton />

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      
                    </Link>
                  </Grid>
                  <Grid item>             
                  </Grid>
                </Grid>
              </form>
      </div>
      <Box mt={4}>
        <Footer />
      </Box>
    </Container>
  );
}

export default Login;