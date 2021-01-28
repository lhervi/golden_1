import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { linkSetInfo } from '../../../components/menu/linkSetInfo';
//import { activeLinks } from '../../../components/menu/activeLinks';
import { selectMenuActiveLinks } from '../../../reducers/menuSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import DashboardIcon from '@material-ui/icons/Dashboard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PeopleIcon from '@material-ui/icons/People';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BarChartIcon from '@material-ui/icons/BarChart';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LayersIcon from '@material-ui/icons/Layers';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
//import theme from '../../../styles/materialUiTheme';

//const links = activeLinks();
// selectMenuActiveLinks

const Navbar = ()=>{  

  const links = useSelector(selectMenuActiveLinks);
  // const linkHoverColor = theme.palette.secondary.main;

  const linksToInterface = links.map(li => 
                        
    linkSetInfo[li] && linkSetInfo[li].iconObj &&
     <ListItem button>
        <ListItemIcon>{linkSetInfo[li].iconObj}</ListItemIcon>
        <Link to={li} style={{"textDecoration":'none', "color":'inherit'}}>
          <ListItemText primary={linkSetInfo[li].name}/> 
        </Link>       
      </ListItem> 
  
  );  
  
  return(
  
  <nav> {linksToInterface} </nav>

  );
}

export default Navbar;

