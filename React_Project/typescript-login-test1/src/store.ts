import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import statusReducer from './reducers/statusSlice';
import menuReducer from './reducers/menuSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    status: statusReducer,
    menu: menuReducer,
  }
})

export default store
