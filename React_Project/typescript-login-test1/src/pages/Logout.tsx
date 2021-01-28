
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

import {setEmail, setProcessing} from '../reducers/loginSlice';
import { setMenuActiveLinks } from '../reducers/menuSlice';
import { setConnectionStatus, setUserLogged, setUserInfo } from '../reducers/statusSlice';

import { useDispatch } from 'react-redux';

import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {  

  const dispatch = useDispatch();
  const userReset = {lastname:'', name:'', email:'', role:'guess'}    
  
  const { logout } = useAuth0();
  const [open, setOpen] = React.useState(true);  

  const goAway =()=>{   
    console.log('logout ini');
    sessionStorage.clear();    
    dispatch(setUserLogged(false));
    dispatch(setEmail(''));
    dispatch(setProcessing(false));
    dispatch(setMenuActiveLinks('guess'));
    dispatch(setConnectionStatus(''));    
    dispatch(setUserInfo(userReset));
    handleClose();        
    logout({ returnTo: window.location.origin, client_id: 'Oe1FF26XXT9yXnHo6RJBCpaDYBKs6Yf6', federated: true});
    console.log('logout end');
  }; 

  const handleClose = () => {  
    window.history.back();
    setOpen(false);
  };  

  return (
    <div>     
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"               
      >     
      
        <WarningRoundedIcon fontSize='large' color='secondary'/>
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to quit?"}      
        </DialogTitle>
        
          <Divider light /><br/><br/>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click "Logout" button if you really want to leave
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={goAway} color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    
    </div>
  );
}

/*

export const {setEmail, setProcessing} = slice.actions;
export const { setMenuActiveLinks } = slice.actions;
export const { setConnectionStatus, setUserLogged, setUserInfo } = actions;

*/