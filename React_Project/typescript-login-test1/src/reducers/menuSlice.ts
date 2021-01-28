import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({  
  name: 'menu',  
  initialState: {
  menuActiveLinks: ['/login'],
  roleSet: {
    guess: ['/', '/login', '/dashboard', '/logout'],
    user1: ['/', '/login', '/dashboard', '/orders', '/logout'], 
    user2: ['/', '/login','/dashboard', '/orders', '/customers', '/logout'], 
    user3: ['/', '/login','/dashboard', '/orders', '/customers', '/reports', '/logout'], 
    admin: ['/', '/login', '/dashboard', '/orders', '/customers', '/reports', '/integration', '/logout']  
  }
  },
  reducers: {
  setMenuActiveLinks: (state, action) => {      
    state.menuActiveLinks = [...state.roleSet[action.payload]];
  },
  },
});

export const { setMenuActiveLinks } = slice.actions;
export const selectMenuActiveLinks = state => state.menu.menuActiveLinks;

export default slice.reducer;