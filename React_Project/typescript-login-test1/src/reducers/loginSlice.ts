import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'login',
  initialState: {
    email: '',   
    processing: false,    
  },    
  reducers: {
    setEmail: (state, action) => {      
      state.email = action.payload;          
    },    
    setProcessing: (state, action) => {
      state.processing = action.payload;      
    },
  },
});

export const {setEmail, setProcessing} = slice.actions;
export const selectEmail = state => state.login.email;
export const selectProcessing = state => state.login.processing;

export default slice.reducer;

