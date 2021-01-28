
import React from 'react';
import { BrowserRouter, Switch  } from 'react-router-dom';

import Navbar from './components/Navigator';

import Login from '../LoginAuth0';
import Dashboard from '../dashboard/Dashboard';
import Orders from '../dashboard/Orders';
import Customers from '../dashboard/Customers';
import Reports from '../dashboard/Reports';
import Integration from '../dashboard/Integration';
import PageNotFound from '../PageNotFound';
import Logout from '../Logout';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

export default function Menu() {

    return (
    
        <BrowserRouter>
            <Navbar />
            <Switch>                
                <PublicRoute restricted = {true} exact path="/" component={Dashboard}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/login" component={Login}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/pagenotfound" component={PageNotFound}></PublicRoute>                 
                <PublicRoute restricted = {true} exact path="/dashboard" component={Dashboard}></PublicRoute>
                <PrivateRoute exact path="/orders" component={Orders} ></PrivateRoute>
                <PrivateRoute exact path="/customers" component={Customers} ></PrivateRoute>
                <PrivateRoute  exact path="/reports" component={Reports} ></PrivateRoute>
                <PrivateRoute exact path="/integration" component={Integration} ></PrivateRoute>    
                <PrivateRoute exact path="/logout" component={Logout} ></PrivateRoute>                            
            </Switch>        
        </BrowserRouter>
    
    )    
}     