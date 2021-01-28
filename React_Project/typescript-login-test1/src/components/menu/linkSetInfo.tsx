
//This object describe the link information that is required to built the menu

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export const linkSetInfo = { 
   
    '/dashboard': {name: 'Dashboard', iconObj: <DashboardIcon/>},
    '/orders': {name: 'Orders', iconObj: <ShoppingCartIcon/>}, 
    '/customers': {name: 'Customers', iconObj: <PeopleIcon/>},
    '/reports': {name: 'Reports', iconObj: <BarChartIcon/>},
    '/integration': {name: 'Integration', iconObj: <LayersIcon/>},
    '/logout' : {name: 'Logout', iconObj: <ExitToAppRoundedIcon />},
};

