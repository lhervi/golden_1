
import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {     
    connectionStatus: '',                   //Information (text) about the connection result and the timestamp when it occurred
    userLogged: false,                      // true is the connection was stablished / false any other case
    userInfo: {      
      lastname:'',
      name:'',
      email:'',       
      role:'guess'
    },    
  },
  reducers: {
        
    setConnectionStatus: (state, action) => {      
      state.connectionStatus = action.payload;
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },    
  },
});

const {actions, reducer} = statusSlice; 

export const { setConnectionStatus, setUserLogged, setUserInfo } = actions;

export const selectConnectionStatus = state => state.status.connectionStatus;
export const selectUserLogged = state => state.status.userLogged;
export const selectUserInfo = state => state.status.userInfo;

export default reducer;