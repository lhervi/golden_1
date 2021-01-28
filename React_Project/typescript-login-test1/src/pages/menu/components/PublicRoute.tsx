import React from 'react';
import { Redirect } from 'react-router-dom';
//import validPath from '../../../components/menu/validPath';
//import filterPath from '../../../components/menu/filterPath';
import { useSelector } from 'react-redux';
import { selectUserLogged } from '../../../reducers/statusSlice';
import { selectMenuActiveLinks } from '../../../reducers/menuSlice';

const PublicRoute = ({component: Component, restricted, path, ...rest})=> {      

    const isLogin = useSelector(selectUserLogged);
    const validPath = useSelector(selectMenuActiveLinks);

    const login='/login';
    const home='/';
    const pageNotFound='/pagenotfound';

    const filterPath = routeElements => {

        const {path, restricted} = routeElements;
        const roleLinkSet = new Set(validPath);   
    
        if (roleLinkSet.has(path)) {
            if (!isLogin && restricted) {
                return      
            }else if ((!isLogin && !restricted) || (isLogin && path!==login)) {         
                return  path    
            }else if (isLogin && path===login){
                return home;
            }       
        }else{
            return pageNotFound;
        }    
    }

    const validPathResult = filterPath({path: path, restricted: restricted});
   
    if (path===validPathResult) {

        return <Component {...rest} /> 

    }else{

        return <Redirect to={validPathResult} />

    }    
}  

export default PublicRoute;