import React from 'react';
import Menu from './pages/menu/MenuJwt';
import Login from './pages/LoginAuth0';
import { useSelector } from 'react-redux';
import { selectUserLogged } from './reducers/statusSlice';
  
const App = ()=> {

    const logged = useSelector(selectUserLogged);

    return (!logged) ? <Login /> : <Menu />

}

export default App;